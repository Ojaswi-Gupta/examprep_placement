// js/data/sql/crm_queries.js — Real-world CRM & Product Analytics SQL Patterns
export const sqlCrmQueries = [
  {
    title: "1. Conversion Rate by Lead Source (>= 100 Leads, Last 90 Days)",
    badge: "Funnel / Conversion",
    difficulty: "Medium",
    question: "Find the top 2 lead `source` channels with the highest conversion rate in the last 90 days, only considering sources with at least 100 leads.",
    schema: "leads (lead_id, created_at, source)\nconversions (conversion_id, lead_id, converted_at, revenue)",
    inputTables: [
      {
        name: "leads",
        columns: ["lead_id", "created_at", "source"],
        rows: [
          ["101", "2026-08-10", "Organic Search"],
          ["102", "2026-08-12", "LinkedIn Ads"],
          ["103", "2026-09-01", "Referral"],
          ["104", "2026-09-05", "LinkedIn Ads"],
          ["...", "... (100+ rows)", "..."]
        ]
      },
      {
        name: "conversions",
        columns: ["conversion_id", "lead_id", "converted_at", "revenue"],
        rows: [
          ["1", "102", "2026-08-15", "1200.00"],
          ["2", "102", "2026-08-20", "300.00 (upsell)"],
          ["3", "104", "2026-09-10", "2500.00"],
          ["4", "103", "2026-09-12", "800.00"]
        ]
      }
    ],
    expectedOutput: {
      columns: ["source", "total_leads", "converted_leads", "conversion_rate_pct"],
      rows: [
        ["Referral", "120", "36", "30.00"],
        ["LinkedIn Ads", "250", "50", "20.00"]
      ]
    },
    solutionQuery: `SELECT 
    l.source,
    COUNT(DISTINCT l.lead_id) AS total_leads,
    COUNT(DISTINCT c.lead_id) AS converted_leads,
    ROUND(
        (COUNT(DISTINCT c.lead_id) * 100.0) / COUNT(DISTINCT l.lead_id), 
        2
    ) AS conversion_rate_pct
FROM leads l
LEFT JOIN conversions c 
    ON l.lead_id = c.lead_id
WHERE l.created_at >= CURRENT_DATE - INTERVAL 90 DAY
GROUP BY l.source
HAVING COUNT(DISTINCT l.lead_id) >= 100
ORDER BY conversion_rate_pct DESC
LIMIT 2;`,
    traps: [
      "**LEFT JOIN vs INNER JOIN:** An INNER JOIN drops unconverted leads, which falsely makes every source's conversion rate 100%.",
      "**COUNT(DISTINCT ...):** In real CRMs, a single lead can have multiple conversions (initial purchase + upsells). Without DISTINCT, the numerator is falsely inflated.",
      "**Floating Point Division (* 100.0):** Multiplying by 100.0 forces float precision to prevent integer division truncation.",
      "**WHERE vs HAVING:** WHERE filters individual rows before aggregation (leads within 90 days), while HAVING filters aggregated group metrics (sources with >= 100 leads)."
    ]
  },
  {
    title: "2. Funnel Conversion Rates (Created → Demo Scheduled → Won)",
    badge: "Funnel Analysis",
    difficulty: "Hard",
    question: "Calculate the stage-by-stage funnel conversion rates across the pipeline: Total Leads Created, Demos Scheduled, Deals Won, Lead-to-Demo %, Demo-to-Won %, and Overall Win Rate %.",
    schema: "leads (lead_id, rep_id, city, status, created_at)\nactivities (activity_id, lead_id, rep_id, activity_type, activity_date)",
    inputTables: [
      {
        name: "leads",
        columns: ["lead_id", "rep_id", "city", "status", "created_at"],
        rows: [
          ["1", "10", "Mumbai", "Active", "2026-08-01"],
          ["2", "10", "Delhi", "Closed", "2026-08-02"],
          ["3", "20", "Bengaluru", "Active", "2026-08-05"],
          ["4", "20", "Mumbai", "Closed", "2026-08-06"]
        ]
      },
      {
        name: "activities",
        columns: ["activity_id", "lead_id", "rep_id", "activity_type", "activity_date"],
        rows: [
          ["501", "1", "10", "Demo Scheduled", "2026-08-03 10:00:00"],
          ["502", "1", "10", "Deal Won", "2026-08-10 14:00:00"],
          ["503", "2", "10", "Demo Scheduled", "2026-08-04 11:30:00"],
          ["504", "3", "20", "Call", "2026-08-07 09:15:00"]
        ]
      }
    ],
    expectedOutput: {
      columns: ["total_leads_created", "demos_scheduled", "deals_won", "lead_to_demo_rate_pct", "demo_to_won_rate_pct", "overall_win_rate_pct"],
      rows: [
        ["4", "2", "1", "50.00", "50.00", "25.00"]
      ]
    },
    solutionQuery: `SELECT 
    COUNT(DISTINCT l.lead_id) AS total_leads_created,
    COUNT(DISTINCT CASE WHEN a.activity_type = 'Demo Scheduled' THEN l.lead_id END) AS demos_scheduled,
    COUNT(DISTINCT CASE WHEN a.activity_type = 'Deal Won' THEN l.lead_id END) AS deals_won,
    
    -- Step 1 to Step 2 Conversion (Lead -> Demo)
    ROUND(
        COUNT(DISTINCT CASE WHEN a.activity_type = 'Demo Scheduled' THEN l.lead_id END) * 100.0 
        / COUNT(DISTINCT l.lead_id), 2
    ) AS lead_to_demo_rate_pct,
    
    -- Step 2 to Step 3 Conversion (Demo -> Won)
    ROUND(
        COUNT(DISTINCT CASE WHEN a.activity_type = 'Deal Won' THEN l.lead_id END) * 100.0 
        / NULLIF(COUNT(DISTINCT CASE WHEN a.activity_type = 'Demo Scheduled' THEN l.lead_id END), 0), 2
    ) AS demo_to_won_rate_pct,

    -- Overall Funnel Conversion (Lead -> Won)
    ROUND(
        COUNT(DISTINCT CASE WHEN a.activity_type = 'Deal Won' THEN l.lead_id END) * 100.0 
        / COUNT(DISTINCT l.lead_id), 2
    ) AS overall_win_rate_pct
FROM leads l
LEFT JOIN activities a 
    ON l.lead_id = a.lead_id;`,
    traps: [
      "**Conditional Aggregation:** Using `COUNT(DISTINCT CASE WHEN ... THEN lead_id END)` isolates distinct leads reaching that specific milestone.",
      "**Division by Zero Protection:** Wrapping denominators with `NULLIF(..., 0)` prevents runtime division-by-zero errors if 0 demos were scheduled.",
      "**Distinct Leads:** Ensures repeat activities (e.g. 2 demos scheduled for the same lead) do not inflate conversion metrics."
    ]
  },
  {
    title: "3. Time-to-Action / SLA Tracking (Average Time to First Call)",
    badge: "SLA / Timestamps",
    difficulty: "Medium",
    question: "Find the average time (in minutes) taken by each sales rep to make their first call after a lead is assigned to them.",
    schema: "leads (lead_id, rep_id, assigned_at)\nactivities (activity_id, lead_id, rep_id, activity_type, activity_date)",
    inputTables: [
      {
        name: "leads",
        columns: ["lead_id", "rep_id", "assigned_at"],
        rows: [
          ["101", "1", "2026-09-01 09:00:00"],
          ["102", "1", "2026-09-01 10:00:00"],
          ["201", "2", "2026-09-01 09:30:00"]
        ]
      },
      {
        name: "activities",
        columns: ["activity_id", "lead_id", "rep_id", "activity_type", "activity_date"],
        rows: [
          ["1", "101", "1", "Call", "2026-09-01 09:15:00"],
          ["2", "101", "1", "Call", "2026-09-01 11:00:00"],
          ["3", "102", "1", "Call", "2026-09-01 10:45:00"],
          ["4", "201", "2", "Call", "2026-09-01 10:00:00"]
        ]
      }
    ],
    expectedOutput: {
      columns: ["rep_id", "leads_contacted", "avg_minutes_to_first_call"],
      rows: [
        ["1", "2", "30.00"],
        ["2", "1", "30.00"]
      ]
    },
    solutionQuery: `WITH FirstCallPerLead AS (
    SELECT 
        l.lead_id,
        l.rep_id,
        l.assigned_at,
        MIN(a.activity_date) AS first_call_at
    FROM leads l
    INNER JOIN activities a 
        ON l.lead_id = a.lead_id
    WHERE a.activity_type = 'Call'
      AND a.activity_date >= l.assigned_at -- Ensures call happened AFTER assignment
    GROUP BY l.lead_id, l.rep_id, l.assigned_at
)
SELECT 
    rep_id,
    COUNT(lead_id) AS leads_contacted,
    ROUND(
        AVG(TIMESTAMPDIFF(MINUTE, assigned_at, first_call_at)), 
        2
    ) AS avg_minutes_to_first_call
FROM FirstCallPerLead
GROUP BY rep_id
ORDER BY avg_minutes_to_first_call ASC;`,
    traps: [
      "**TIMESTAMPDIFF Argument Order:** In `TIMESTAMPDIFF(unit, dt1, dt2)`, `dt1` is the EARLIER timestamp and `dt2` is the LATER timestamp (calculates dt2 - dt1). This is opposite to `DATEDIFF(dt1, dt2)`!",
      "**Isolate First Call:** Isolate the earliest call using `MIN(activity_date)` inside a CTE, otherwise subsequent calls will distort the SLA calculation.",
      "**Pre-Assignment Activities:** Filtering `a.activity_date >= l.assigned_at` ensures historical calls before current assignment are excluded."
    ]
  },
  {
    title: "4. Inactive Users / Churn Risk (No Activity in Last 30 Days)",
    badge: "Churn / Inactivity",
    difficulty: "Medium",
    question: "Find all sales reps who joined more than 30 days ago but have NOT logged a single activity in the last 30 days.",
    schema: "sales_reps (rep_id, rep_name, city, joined_at)\nactivities (activity_id, rep_id, activity_date)",
    inputTables: [
      {
        name: "sales_reps",
        columns: ["rep_id", "rep_name", "city", "joined_at"],
        rows: [
          ["1", "Alice Smith", "Mumbai", "2026-06-01"],
          ["2", "Bob Jones", "Bengaluru", "2026-07-15"],
          ["3", "Charlie Brown", "Delhi", "2026-10-10 (Recent join)"]
        ]
      },
      {
        name: "activities",
        columns: ["activity_id", "rep_id", "activity_date"],
        rows: [
          ["801", "1", "2026-10-18 (Active recently)"],
          ["802", "2", "2026-08-10 (Old activity)"]
        ]
      }
    ],
    expectedOutput: {
      columns: ["rep_id", "rep_name", "city", "joined_at"],
      rows: [
        ["2", "Bob Jones", "Bengaluru", "2026-07-15"]
      ]
    },
    solutionQuery: `SELECT 
    sr.rep_id,
    sr.rep_name,
    sr.city,
    sr.joined_at
FROM sales_reps sr
LEFT JOIN activities a 
    ON sr.rep_id = a.rep_id 
    AND a.activity_date >= CURRENT_DATE - INTERVAL 30 DAY
WHERE sr.joined_at <= CURRENT_DATE - INTERVAL 30 DAY
  AND a.activity_id IS NULL;`,
    traps: [
      "**LEFT JOIN ON Clause vs WHERE Clause:** The condition `a.activity_date >= CURRENT_DATE - INTERVAL 30 DAY` MUST be in the ON clause. Placing it in WHERE filters out NULL rows and accidentally converts the LEFT JOIN into an INNER JOIN!",
      "**Clean NOT EXISTS Alternative:** `NOT EXISTS (SELECT 1 FROM activities a WHERE a.rep_id = sr.rep_id AND a.activity_date >= CURRENT_DATE - INTERVAL 30 DAY)` is equally fast, clean, and avoids outer join NULL hazards."
    ]
  },
  {
    title: "5. Top 3 Performers per Region (Window Functions)",
    badge: "Window Functions",
    difficulty: "Hard",
    question: "Find the top 3 sales reps by total 'Won' deal revenue in each city. Handle ties appropriately so reps sharing top revenue share the same rank.",
    schema: "sales_reps (rep_id, rep_name, city)\ndeals (deal_id, rep_id, deal_value, status, closed_at)",
    inputTables: [
      {
        name: "sales_reps",
        columns: ["rep_id", "rep_name", "city"],
        rows: [
          ["1", "Priya", "Bengaluru"],
          ["2", "Rahul", "Bengaluru"],
          ["3", "Ananya", "Bengaluru"],
          ["4", "Vikram", "Bengaluru"]
        ]
      },
      {
        name: "deals",
        columns: ["deal_id", "rep_id", "deal_value", "status"],
        rows: [
          ["1", "1", "1000000", "Won"],
          ["2", "2", "1000000", "Won"],
          ["3", "3", "800000", "Won"],
          ["4", "4", "500000", "Won"]
        ]
      }
    ],
    expectedOutput: {
      columns: ["city", "rep_id", "rep_name", "total_revenue", "revenue_rank"],
      rows: [
        ["Bengaluru", "1", "Priya", "1000000", "1"],
        ["Bengaluru", "2", "Rahul", "1000000", "1"],
        ["Bengaluru", "3", "Ananya", "800000", "2"],
        ["Bengaluru", "4", "Vikram", "500000", "3"]
      ]
    },
    solutionQuery: `WITH RepRevenue AS (
    SELECT 
        sr.city,
        sr.rep_id,
        sr.rep_name,
        COALESCE(SUM(d.deal_value), 0) AS total_revenue,
        DENSE_RANK() OVER (
            PARTITION BY sr.city 
            ORDER BY COALESCE(SUM(d.deal_value), 0) DESC
        ) AS revenue_rank
    FROM sales_reps sr
    LEFT JOIN deals d 
        ON sr.rep_id = d.rep_id 
        AND d.status = 'Won'
    GROUP BY sr.city, sr.rep_id, sr.rep_name
)
SELECT 
    city,
    rep_id,
    rep_name,
    total_revenue,
    revenue_rank
FROM RepRevenue
WHERE revenue_rank <= 3
ORDER BY city ASC, revenue_rank ASC;`,
    traps: [
      "**ROW_NUMBER() vs RANK() vs DENSE_RANK():**\n• `ROW_NUMBER()`: 1, 2, 3 (no ties allowed, arbitrary rank).\n• `RANK()`: 1, 1, 3 (skips rank 2 after tie).\n• `DENSE_RANK()`: 1, 1, 2 (never skips ranks; required for 'top 3 revenue tiers').",
      "**Window Functions in WHERE/HAVING:** Window functions cannot be filtered directly in WHERE or HAVING. Wrapping them in a CTE or subquery is required in SQL standard.",
      "**COALESCE for Zero Revenue:** Ensures reps with no won deals yield 0 rather than NULL."
    ]
  }
];
