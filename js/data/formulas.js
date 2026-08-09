export const FORMULAS_DATA = [
  {
    category: "Percentages",
    formulas: [
      {
        title: "Set Theory (Inclusion-Exclusion)",
        type: "Advanced",
        formula: "n(A\\cup B\\cup C) = \\Sigma n(A) - \\Sigma n(A\\cap B) + n(A\\cap B\\cap C)",
        variables: [{ symbol: "n(A)", definition: "Number of elements in set A" }]
      },
      {
        title: "Population Growth & Depreciation",
        type: "Advanced",
        formula: "P_n = P_0\\left(1 \\pm \\frac{R}{100}\\right)^n",
        variables: [{ symbol: "P_n", definition: "Final Population/Value" }, { symbol: "P_0", definition: "Initial Population/Value" }, { symbol: "R", definition: "Rate" }, { symbol: "n", definition: "Time" }]
      },
      {
        title: "Product Constancy Rule",
        type: "Advanced",
        formula: "\\text{If } A \\times B = C \\text{ and } A \\uparrow \\frac{x}{y}, B \\downarrow \\frac{x}{y+x}",
        variables: [{ symbol: "x, y", definition: "Numerator and denominator of fraction" }]
      },
      {
        title: "Basic Percentage",
        type: "Simple",
        formula: "P = \\frac{V}{T} \\times 100",
        variables: [
          { symbol: "P", definition: "Percentage (%)" },
          { symbol: "V", definition: "Value or Part" },
          { symbol: "T", definition: "Total or Base amount" }
        ]
      },
      {
        title: "Percentage Change",
        type: "Simple",
        formula: "\\% \\text{ Change} = \\left[ \\frac{F - I}{I} \\right] \\times 100",
        variables: [
          { symbol: "F", definition: "Final Value" },
          { symbol: "I", definition: "Initial Value" }
        ]
      },
      {
        title: "Successive Percentage Change",
        type: "Advanced",
        formula: "\\text{Net \\% Change} = a + b + \\frac{a \\times b}{100}",
        variables: [
          { symbol: "a", definition: "First percentage change (use negative for decrease)" },
          { symbol: "b", definition: "Second percentage change (use negative for decrease)" }
        ]
      }
    ]
  },
  {
    category: "Profit & Loss",
    formulas: [
      {
        title: "Buy X Get Y Free",
        type: "Advanced",
        formula: "\\text{Discount}\\% = \\frac{Y}{X+Y} \\times 100",
        variables: [{ symbol: "X", definition: "Items paid for" }, { symbol: "Y", definition: "Free items" }]
      },
      {
        title: "Successive Discounts",
        type: "Advanced",
        formula: "\\text{Net Discount} = d_1 + d_2 - \\frac{d_1 \\times d_2}{100}",
        variables: [{ symbol: "d_1, d_2", definition: "Discount percentages" }]
      },
      {
        title: "Marked Price & Discount",
        type: "Advanced",
        formula: "\\frac{MP}{CP} = \\frac{100+\\text{Profit}\\%}{100-\\text{Discount}\\%}",
        variables: [{ symbol: "MP", definition: "Marked Price" }, { symbol: "CP", definition: "Cost Price" }]
      },
      {
        title: "Basic Profit / Loss",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Profit} &= SP - CP \\\\ \\text{Loss} &= CP - SP \\end{aligned}",
        variables: [
          { symbol: "SP", definition: "Selling Price" },
          { symbol: "CP", definition: "Cost Price" }
        ]
      },
      {
        title: "Profit / Loss Percentage",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Profit \\%} &= \\left( \\frac{\\text{Profit}}{CP} \\right) \\times 100 \\\\ \\text{Loss \\%} &= \\left( \\frac{\\text{Loss}}{CP} \\right) \\times 100 \\end{aligned}",
        variables: [
          { symbol: "Profit", definition: "Amount gained (SP > CP)" },
          { symbol: "Loss", definition: "Amount lost (CP > SP)" },
          { symbol: "CP", definition: "Cost Price (Base for percentage)" }
        ]
      },
      {
        title: "Selling Price with Profit/Loss %",
        type: "Advanced",
        formula: "SP = CP \\times \\left[ \\frac{100 \\pm R}{100} \\right]",
        variables: [
          { symbol: "SP", definition: "Selling Price" },
          { symbol: "CP", definition: "Cost Price" },
          { symbol: "R", definition: "Profit % (use +) or Loss % (use -)" }
        ]
      },
      {
        title: "False Weight / Dishonest Dealer",
        type: "Advanced",
        formula: "\\text{Gain \\%} = \\left[ \\frac{\\text{Error}}{\\text{True Weight} - \\text{Error}} \\right] \\times 100",
        variables: [
          { symbol: "Error", definition: "True Weight - False Weight used" },
          { symbol: "True Weight", definition: "The actual weight that was supposed to be given" }
        ]
      }
    ]
  },
  {
    category: "Time, Speed & Distance",
    formulas: [
      {
        title: "Late/Early Shortcut",
        type: "Advanced",
        formula: "D = \\frac{S_1 \\times S_2}{S_1 - S_2} \\times \\Delta T",
        variables: [{ symbol: "S_1, S_2", definition: "Speeds" }, { symbol: "\Delta T", definition: "Difference in time" }]
      },
      {
        title: "Escalator Problems",
        type: "Advanced",
        formula: "\\text{Effective steps} = \\text{Person's steps} \\pm \\text{Escalator's steps}",
        variables: [{ symbol: "\pm", definition: "+ if moving with escalator, - if against" }]
      },
      {
        title: "Races & Games",
        type: "Advanced",
        formula: "\\frac{\\text{Speed}_A}{\\text{Speed}_B} = \\frac{D}{D-d}",
        variables: [{ symbol: "D", definition: "Total distance" }, { symbol: "d", definition: "Distance by which A beats B" }]
      },
      {
        title: "Basic Relation",
        type: "Simple",
        formula: "D = S \\times T",
        variables: [
          { symbol: "D", definition: "Distance covered" },
          { symbol: "S", definition: "Speed" },
          { symbol: "T", definition: "Time taken" }
        ]
      },
      {
        title: "Average Speed",
        type: "Advanced",
        formula: "\\text{Average Speed} = \\frac{2 \\times a \\times b}{a + b}",
        variables: [
          { symbol: "a", definition: "Speed during first half of the journey" },
          { symbol: "b", definition: "Speed during second half of the journey" }
        ]
      },
      {
        title: "Relative Speed (Same Direction)",
        type: "Simple",
        formula: "\\text{Relative S} = |S_1 - S_2|",
        variables: [
          { symbol: "S_1, S_2", definition: "Speeds of two moving bodies" }
        ]
      },
      {
        title: "Relative Speed (Opposite Direction)",
        type: "Simple",
        formula: "\\text{Relative S} = S_1 + S_2",
        variables: [
          { symbol: "S_1, S_2", definition: "Speeds of two moving bodies" }
        ]
      },
      {
        title: "Trains crossing each other",
        type: "Relative Speed",
        formula: "\\text{Time} = \\frac{L_1 + L_2}{S_1 \\pm S_2}",
        variables: [
          { symbol: "L_1, L_2", definition: "Lengths of the trains" },
          { symbol: "S_1, S_2", definition: "Speeds of the trains" },
          { symbol: "\\pm", definition: "+ for opposite, - for same direction" }
        ]
      },
      {
        title: "Boats & Streams",
        type: "Relative Speed",
        formula: "\\begin{aligned} \\text{Downstream (D)} &= u + v \\\\ \\text{Upstream (U)} &= u - v \\\\ u &= \\frac{D + U}{2} \\\\ v &= \\frac{D - U}{2} \\end{aligned}",
        variables: [
          { symbol: "u", definition: "Speed of boat in still water" },
          { symbol: "v", definition: "Speed of stream/current" }
        ]
      },
      {
        title: "Circular Tracks (Meeting)",
        type: "Relative Speed",
        formula: "\\begin{aligned} \\text{Time for first meet} &= \\frac{\\text{Length of Track}}{\\text{Relative Speed}} \\\\ \\text{Meet at Start} &= \\text{LCM}\\left(\\frac{L}{S_1}, \\frac{L}{S_2}\\right) \\end{aligned}",
        variables: [
          { symbol: "L", definition: "Length of track" },
          { symbol: "S_1, S_2", definition: "Speeds of runners" }
        ]
      }
    ]
  },
  {
    category: "Time & Work",
    formulas: [
      {
        title: "Wages Distribution",
        type: "Advanced",
        formula: "\\text{Wages} \\propto \\text{Work Done}",
        variables: [{ symbol: "Work Done", definition: "Efficiency x Time worked" }]
      },
      {
        title: "Joining/Leaving Midway",
        type: "Advanced",
        formula: "\\sum \\frac{t_i}{T_i} = 1",
        variables: [{ symbol: "t_i", definition: "Time worked by person i" }, { symbol: "T_i", definition: "Total time person i takes alone" }]
      },
      {
        title: "Efficiency Ratio",
        type: "Advanced",
        formula: "\\frac{E_1}{E_2} = \\frac{T_2}{T_1}",
        variables: [{ symbol: "E", definition: "Efficiency" }, { symbol: "T", definition: "Time taken" }]
      },
      {
        title: "Work and Time Relation",
        type: "Simple",
        formula: "\\text{Work Done} = \\text{Rate of Work} \\times \\text{Time}",
        variables: [
          { symbol: "Rate of Work", definition: "Amount of work done in 1 unit of time (e.g., 1/Days)" }
        ]
      },
      {
        title: "Two Persons Working Together",
        type: "Time & Work",
        formula: "\\text{Together Time} = \\frac{xy}{x+y}",
        variables: [
          { symbol: "x", definition: "Time taken by A alone" },
          { symbol: "y", definition: "Time taken by B alone" }
        ]
      },
      {
        title: "Pipes & Cisterns",
        type: "Time & Work",
        formula: "\\text{Net Part Filled in 1 hr} = \\frac{1}{x} - \\frac{1}{y}",
        variables: [
          { symbol: "x", definition: "Time to fill (Inlet)" },
          { symbol: "y", definition: "Time to empty (Outlet)" }
        ]
      },
      {
        title: "Chain Rule (MDH Formula)",
        type: "Time & Work",
        formula: "\\frac{M_1 \\times D_1 \\times H_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2}{W_2}",
        variables: [
          { symbol: "M", definition: "Number of workers (Men)" },
          { symbol: "D", definition: "Number of days" },
          { symbol: "H", definition: "Hours per day" },
          { symbol: "W", definition: "Amount of work done" }
        ]
      },
      {
        title: "Alternate Days Work",
        type: "Time & Work",
        formula: "\\text{Find LCM of times, determine efficiency per day, and calculate work done in a 2-day cycle.}",
        variables: [
          { symbol: "Cycle", definition: "A+B's combined work over 2 days" }
        ]
      }
    ]
  },
  {
    category: "Mixtures, Clocks & Calendars",
    formulas: [
      {
        title: "Reflex Angle (Clocks)",
        type: "Clocks",
        formula: "\\text{Reflex angle} = 360^{\\circ} - \\theta",
        variables: [{ symbol: "\theta", definition: "Interior angle" }]
      },
      {
        title: "Century Year Odd Days",
        type: "Calendars",
        formula: "\\text{100yr}=5, \\text{200yr}=3, \\text{300yr}=1, \\text{400yr}=0",
        variables: [{ symbol: "Odd days", definition: "Remainder of days / 7" }]
      },
      {
        title: "Weighted Average (3 Mixtures)",
        type: "Advanced",
        formula: "C_m = \\frac{v_1c_1 + v_2c_2 + v_3c_3}{v_1+v_2+v_3}",
        variables: [{ symbol: "v_i", definition: "Volumes" }, { symbol: "c_i", definition: "Concentrations" }]
      },
      {
        title: "Rule of Alligation",
        type: "Mixtures",
        formula: "\\frac{\\text{Qty of Cheaper}}{\\text{Qty of Dearer}} = \\frac{d - m}{m - c}",
        variables: [
          { symbol: "c", definition: "Cost Price of Cheaper" },
          { symbol: "d", definition: "Cost Price of Dearer" },
          { symbol: "m", definition: "Mean Price of Mixture" }
        ]
      },
      {
        title: "Successive Replacement",
        type: "Mixtures",
        formula: "\\text{Final Qty} = \\text{Initial Qty} \\times \\left(1 - \\frac{y}{x}\\right)^n",
        variables: [
          { symbol: "x", definition: "Initial total quantity of liquid" },
          { symbol: "y", definition: "Quantity replaced each time" },
          { symbol: "n", definition: "Number of replacement operations" }
        ]
      },
      {
        title: "Angle Between Clock Hands",
        type: "Clocks",
        formula: "\\theta = \\left| 30H - 5.5M \\right|",
        variables: [
          { symbol: "H", definition: "Hour (1-12)" },
          { symbol: "M", definition: "Minutes (0-59)" }
        ]
      },
      {
        title: "Odd Days (Calendars)",
        type: "Calendars",
        formula: "\\text{Odd Days} = \\text{Total Days} \\pmod 7",
        variables: [
          { symbol: "Ordinary Year", definition: "365 days = 1 odd day" },
          { symbol: "Leap Year", definition: "366 days = 2 odd days" },
          { symbol: "100 Years", definition: "5 odd days" }
        ]
      },
      {
        title: "Clock Hands Coincide (0°)",
        type: "Clocks",
        formula: "M = \\frac{60}{11} \\times H",
        variables: [
          { symbol: "H", definition: "Starting hour (e.g., between 3 and 4, H=3)" },
          { symbol: "M", definition: "Minutes past H when they coincide" }
        ]
      },
      {
        title: "Clock Hands Opposite (180°)",
        type: "Clocks",
        formula: "M = \\frac{60}{11} \\times (H \\pm 6)",
        variables: [
          { symbol: "+ 6", definition: "If H < 6" },
          { symbol: "- 6", definition: "If H > 6" }
        ]
      },
      {
        title: "Clock Hands at Right Angle (90°)",
        type: "Clocks",
        formula: "M = \\frac{60}{11} \\times (H \\pm 3)",
        variables: [
          { symbol: "\\pm 3", definition: "Use both + and - to get two different times per hour" }
        ]
      },
      {
        title: "Faulty Clocks",
        type: "Clocks",
        formula: "\\text{True Time} = \\left( \\frac{\\text{Correct Interval}}{\\text{Faulty Interval}} \\right) \\times \\text{Total Time Passed}",
        variables: [
          { symbol: "Correct Interval", definition: "Usually 65 5/11 minutes for hands to coincide" }
        ]
      },
      {
        title: "Calendar Repetition",
        type: "Calendars",
        formula: "\\text{Leap Year } (+28), \\text{ Leap}+1 (+6), \\text{ Leap}+2/+3 (+11)",
        variables: [
          { symbol: "Leap Year", definition: "Repeats after 28 years" },
          { symbol: "Leap + 1", definition: "Repeats after 6 years" },
          { symbol: "Leap + 2 / 3", definition: "Repeats after 11 years" }
        ]
      },
      {
        title: "Zeller's Rule (Day of the week)",
        type: "Calendars",
        formula: "f = k + \\left\\lfloor\\frac{13m-1}{5}\\right\\rfloor + D + \\left\\lfloor\\frac{D}{4}\\right\\rfloor + \\left\\lfloor\\frac{C}{4}\\right\\rfloor - 2C \\pmod 7",
        variables: [
          { symbol: "k", definition: "Day of the month" },
          { symbol: "m", definition: "Month (March=1, Feb=12 of prev year)" },
          { symbol: "D", definition: "Last two digits of year" },
          { symbol: "C", definition: "First two digits of year" }
        ]
      }
    ]
  },
  {
    category: "Number System & Algebra",
    formulas: [
      {
        title: "Remainder Theorem & Cyclicity",
        type: "Advanced",
        formula: "f(a) = R",
        variables: [{ symbol: "R", definition: "Remainder when f(x) divided by (x-a)" }]
      },
      {
        title: "Sum of Cubes",
        type: "Advanced",
        formula: "\\sum n^3 = \\left[\\frac{n(n+1)}{2}\\right]^2",
        variables: [{ symbol: "n", definition: "Number of terms" }]
      },
      {
        title: "Sum of Squares",
        type: "Advanced",
        formula: "\\sum n^2 = \\frac{n(n+1)(2n+1)}{6}",
        variables: [{ symbol: "n", definition: "Number of terms" }]
      },
      {
        title: "Legendre's Formula",
        type: "Advanced",
        formula: "E_p(n!) = \\sum \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor",
        variables: [{ symbol: "p", definition: "Prime number" }, { symbol: "n", definition: "Number for factorial" }]
      },
      {
        title: "AM-GM-HM Inequality",
        type: "Advanced",
        formula: "\\text{AM} \\ge \\text{GM} \\ge \\text{HM}",
        variables: [{ symbol: "AM, GM, HM", definition: "Arithmetic, Geometric, Harmonic Means" }]
      },
      {
        title: "Product of Factors",
        type: "Advanced",
        formula: "\\text{Product} = N^{\\frac{\\text{Total Factors}}{2}}",
        variables: [{ symbol: "N", definition: "The number" }]
      },
      {
        title: "Number of Factors",
        type: "Number System",
        formula: "\\text{If } N = 2^a \\times p^b \\times q^c \\text{, Factors} = (a+1)(b+1)(c+1)",
        variables: [
          { symbol: "2, p, q", definition: "Prime factors of N" }
        ]
      },
      {
        title: "Odd and Even Factors",
        type: "Number System",
        formula: "\\begin{aligned} \\text{Odd Factors} &= (b+1)(c+1) \\dots \\\\ \\text{Even Factors} &= a(b+1)(c+1) \\dots \\end{aligned}",
        variables: [
          { symbol: "a", definition: "Power of 2 in prime factorization" },
          { symbol: "b, c", definition: "Powers of odd primes" }
        ]
      },
      {
        title: "Sum of Factors",
        type: "Number System",
        formula: "\\text{Sum} = \\left(\\frac{2^{a+1}-1}{2-1}\\right) \\times \\left(\\frac{p^{b+1}-1}{p-1}\\right) \\times \\dots",
        variables: [
          { symbol: "p, q", definition: "Prime factors" }
        ]
      },
      {
        title: "Euler's Totient Function (\\phi)",
        type: "Number Theory",
        formula: "\\phi(N) = N \\left(1 - \\frac{1}{p}\\right)\\left(1 - \\frac{1}{q}\\right)\\dots",
        variables: [
          { symbol: "\\phi(N)", definition: "Count of numbers coprime to N and < N" },
          { symbol: "p, q", definition: "Distinct prime factors of N" }
        ]
      },
      {
        title: "Fermat's & Wilson's Theorems",
        type: "Number Theory",
        formula: "\\begin{aligned} a^{p-1} &\\equiv 1 \\pmod p \\\\ (p-1)! &\\equiv -1 \\pmod p \\end{aligned}",
        variables: [
          { symbol: "p", definition: "A prime number" },
          { symbol: "a", definition: "An integer coprime to p" }
        ]
      },
      {
        title: "Number of Trailing Zeros",
        type: "Number System",
        formula: "Z = \\left\\lfloor \\frac{N}{5} \\right\\rfloor + \\left\\lfloor \\frac{N}{25} \\right\\rfloor + \\left\\lfloor \\frac{N}{125} \\right\\rfloor + \\dots",
        variables: [
          { symbol: "N!", definition: "Factorial of N" }
        ]
      },
      {
        title: "Arithmetic Progression (AP)",
        type: "Algebra",
        formula: "\\begin{aligned} T_n &= a + (n-1)d \\\\ S_n &= \\frac{n}{2}[2a + (n-1)d] \\end{aligned}",
        variables: [
          { symbol: "a", definition: "First term" },
          { symbol: "d", definition: "Common difference" }
        ]
      },
      {
        title: "Geometric Progression (GP)",
        type: "Algebra",
        formula: "\\begin{aligned} T_n &= a r^{n-1} \\\\ S_n &= \\frac{a(r^n - 1)}{r - 1} \\text{ (for r>1)} \\\\ S_\\infty &= \\frac{a}{1 - r} \\text{ (for |r|<1)} \\end{aligned}",
        variables: [
          { symbol: "a", definition: "First term" },
          { symbol: "r", definition: "Common ratio" }
        ]
      },
      {
        title: "Logarithm Properties",
        type: "Algebra",
        formula: "\\begin{aligned} \\log_a(xy) &= \\log_a x + \\log_a y \\\\ \\log_a(x/y) &= \\log_a x - \\log_a y \\\\ \\log_a(x^n) &= n \\log_a x \\\\ \\log_b a &= \\frac{\\log_c a}{\\log_c b} \\end{aligned}",
        variables: [
          { symbol: "a, b, c", definition: "Bases" }
        ]
      },
      {
        title: "Quadratic Equation Roots",
        type: "Advanced",
        formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        variables: [
          { symbol: "a, b, c", definition: "Coefficients of ax^2 + bx + c = 0" },
          { symbol: "x", definition: "Roots of the equation" }
        ]
      },
      {
        title: "Algebraic Expansion",
        type: "Simple",
        formula: "(a + b)^2 = a^2 + 2ab + b^2",
        variables: [
          { symbol: "a, b", definition: "Terms in the expression" }
        ]
      },
      {
        title: "Sum of First n Natural Numbers",
        type: "Simple",
        formula: "\\text{Sum} = \\frac{n(n + 1)}{2}",
        variables: [
          { symbol: "n", definition: "Total number of terms" }
        ]
      },
      {
        title: "LCM and HCF Relation",
        type: "Advanced",
        formula: "\\text{LCM}(a,b) \\times \\text{HCF}(a,b) = a \\times b",
        variables: [
          { symbol: "a, b", definition: "Two given numbers" },
          { symbol: "LCM", definition: "Least Common Multiple" },
          { symbol: "HCF", definition: "Highest Common Factor" }
        ]
      }
    ]
  },
  {
    category: "Advanced Probability & P&C",
    formulas: [
      {
        title: "Conditional Probability",
        type: "Advanced",
        formula: "P(A|B) = \\frac{P(A\\cap B)}{P(B)}",
        variables: [{ symbol: "P(A|B)", definition: "Probability of A given B" }]
      },
      {
        title: "Rank of Word in Dictionary",
        type: "Advanced",
        formula: "\\text{Rank} = 1 + \\sum (\\text{permutations of words before})",
        variables: [{ symbol: "Rank", definition: "Dictionary position" }]
      },
      {
        title: "Inclusion-Exclusion (P&C)",
        type: "Advanced",
        formula: "|A\\cup B\\cup C| = |A|+|B|+|C| - |A\\cap B| - |B\\cap C| - |A\\cap C| + |A\\cap B\\cap C|",
        variables: [{ symbol: "A, B, C", definition: "Sets" }]
      },
      {
        title: "Pigeonhole Principle",
        type: "Advanced",
        formula: "\\text{If } n > m, \\text{ at least 1 bin has } \\ge 2 \\text{ items}",
        variables: [{ symbol: "n", definition: "Items" }, { symbol: "m", definition: "Containers" }]
      },
      {
        title: "Permutation (Arrangement)",
        type: "Advanced",
        formula: "{}^n P_r = \\frac{n!}{(n - r)!}",
        variables: [
          { symbol: "n", definition: "Total number of distinct items available" },
          { symbol: "r", definition: "Number of items to be arranged" },
          { symbol: "!", definition: "Factorial (e.g., 5! = 5×4×3×2×1)" }
        ]
      },
      {
        title: "Combination (Selection)",
        type: "Advanced",
        formula: "{}^n C_r = \\frac{n!}{r!(n - r)!}",
        variables: [
          { symbol: "n", definition: "Total number of distinct items available" },
          { symbol: "r", definition: "Number of items to be selected" }
        ]
      },
      {
        title: "Circular Permutation",
        type: "Arrangements",
        formula: "\\text{Ways} = (n - 1)!",
        variables: [
          { symbol: "n", definition: "Number of distinct objects" }
        ]
      },
      {
        title: "Derangement",
        type: "Advanced P&C",
        formula: "D_n = n! \\left( 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!} \\right)",
        variables: [
          { symbol: "n", definition: "Number of items" }
        ]
      },
      {
        title: "Stars and Bars (Distribution)",
        type: "Advanced P&C",
        formula: "\\text{Ways to distribute } n \\text{ identical items among } r \\text{ groups} = {}^{n+r-1}C_{r-1}",
        variables: [
          { symbol: "n", definition: "Identical items" },
          { symbol: "r", definition: "Distinct groups" }
        ]
      },
      {
        title: "Bayes Theorem",
        type: "Probability",
        formula: "P(A|B) = \\frac{P(B|A) \\times P(A)}{P(B)}",
        variables: [
          { symbol: "P(A|B)", definition: "Prob of A given B has occurred" }
        ]
      }
    ]
  },
  {
    category: "Simple & Compound Interest",
    formulas: [
      {
        title: "Effective Annual Rate",
        type: "Advanced",
        formula: "\\text{EAR} = \\left(1 + \\frac{R}{n}\\right)^n - 1",
        variables: [{ symbol: "n", definition: "Compounding periods per year" }]
      },
      {
        title: "Compounding Frequencies",
        type: "Advanced",
        formula: "\\text{Half-yrly: } \\frac{R}{2}, 2T \\quad \\text{Quarterly: } \\frac{R}{4}, 4T",
        variables: [{ symbol: "R", definition: "Rate" }, { symbol: "T", definition: "Time" }]
      },
      {
        title: "Equal Installments (SI)",
        type: "Advanced",
        formula: "A = nx + \\left(\\frac{Rx}{100}\\right)\\frac{n(n-1)}{2}",
        variables: [{ symbol: "x", definition: "Installment" }, { symbol: "n", definition: "Number of years" }]
      },
      {
        title: "Simple Interest (SI)",
        type: "Simple",
        formula: "SI = \\frac{P \\times R \\times T}{100}",
        variables: [
          { symbol: "P", definition: "Principal amount" },
          { symbol: "R", definition: "Rate of interest per annum (%)" },
          { symbol: "T", definition: "Time period in years" }
        ]
      },
      {
        title: "Amount (Simple Interest)",
        type: "Simple",
        formula: "A = P \\times \\left[1 + \\frac{R \\times T}{100}\\right]",
        variables: [
          { symbol: "A", definition: "Total Amount" },
          { symbol: "P", definition: "Principal amount" }
        ]
      },
      {
        title: "Compound Interest (CI) Amount",
        type: "Advanced",
        formula: "A = P \\times \\left(1 + \\frac{R}{100}\\right)^T",
        variables: [
          { symbol: "A", definition: "Total Amount after compounding" },
          { symbol: "P", definition: "Principal amount" },
          { symbol: "R", definition: "Rate of interest per annum (%)" },
          { symbol: "T", definition: "Time period in years" }
        ]
      },
      {
        title: "Difference between CI and SI (2 Years)",
        type: "Advanced",
        formula: "\\text{Diff} = P \\times \\left(\\frac{R}{100}\\right)^2",
        variables: [
          { symbol: "Diff", definition: "Difference between CI and SI for exactly 2 years" },
          { symbol: "P", definition: "Principal amount" },
          { symbol: "R", definition: "Rate of interest per annum (%)" }
        ]
      },
      {
        title: "Difference between CI and SI (3 Years)",
        type: "Advanced",
        formula: "\\text{Diff} = P \\times \\left(\\frac{R}{100}\\right)^2 \\times \\left(\\frac{300 + R}{100}\\right)",
        variables: [
          { symbol: "Diff", definition: "Difference between CI and SI for exactly 3 years" },
          { symbol: "P", definition: "Principal amount" },
          { symbol: "R", definition: "Rate of interest per annum (%)" }
        ]
      }
    ]
  },
  {
    category: "Mensuration (2D & 3D)",
    formulas: [
      {
        title: "Area of a Triangle (Base & Height)",
        type: "Simple",
        formula: "\\text{Area} = \\frac{1}{2} \\times b \\times h",
        variables: [
          { symbol: "b", definition: "Base of the triangle" },
          { symbol: "h", definition: "Height corresponding to the base" }
        ]
      },
      {
        title: "Area of a Triangle (Heron's Formula)",
        type: "Advanced",
        formula: "\\begin{aligned} s &= \\frac{a + b + c}{2} \\\\ \\text{Area} &= \\sqrt{s(s - a)(s - b)(s - c)} \\end{aligned}",
        variables: [
          { symbol: "a, b, c", definition: "Side lengths of the triangle" },
          { symbol: "s", definition: "Semi-perimeter" }
        ]
      },
      {
        title: "Right-Angled Triangle",
        type: "Simple",
        formula: "\\text{Area} = \\frac{1}{2} \\times \\text{Base} \\times \\text{Perpendicular}",
        variables: [
          { symbol: "Hypotenuse²", definition: "Base² + Perpendicular² (Pythagoras)" }
        ]
      },
      {
        title: "Area of an Equilateral Triangle",
        type: "Advanced",
        formula: "\\text{Area} = \\frac{\\sqrt{3}}{4} \\times a^2",
        variables: [
          { symbol: "a", definition: "Length of a side" }
        ]
      },
      {
        title: "Isosceles Triangle",
        type: "Advanced",
        formula: "\\text{Area} = \\frac{b}{4} \\times \\sqrt{4a^2 - b^2}",
        variables: [
          { symbol: "a", definition: "Length of each of the equal sides" },
          { symbol: "b", definition: "Length of the base" }
        ]
      },
      {
        title: "Rectangle",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Area} &= l \\times w \\\\ \\text{Perimeter} &= 2(l + w) \\end{aligned}",
        variables: [
          { symbol: "l", definition: "Length" },
          { symbol: "w", definition: "Width" }
        ]
      },
      {
        title: "Square",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Area} &= a^2 \\\\ \\text{Perimeter} &= 4a \\end{aligned}",
        variables: [
          { symbol: "a", definition: "Side length" },
          { symbol: "d", definition: "Diagonal = a\\sqrt{2}" }
        ]
      },
      {
        title: "Parallelogram",
        type: "Simple",
        formula: "\\text{Area} = b \\times h",
        variables: [
          { symbol: "b", definition: "Base" },
          { symbol: "h", definition: "Height" }
        ]
      },
      {
        title: "Rhombus",
        type: "Advanced",
        formula: "\\begin{aligned} \\text{Area} &= \\frac{1}{2} \\times d_1 \\times d_2 \\\\ \\text{Perimeter} &= 4a \\end{aligned}",
        variables: [
          { symbol: "d_1, d_2", definition: "Diagonals" },
          { symbol: "a", definition: "Side length" }
        ]
      },
      {
        title: "Trapezium",
        type: "Advanced",
        formula: "\\text{Area} = \\frac{1}{2} \\times (a + b) \\times h",
        variables: [
          { symbol: "a, b", definition: "Parallel sides" },
          { symbol: "h", definition: "Height (Distance between parallel sides)" }
        ]
      },
      {
        title: "Circle (Area & Perimeter)",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Area} &= \\pi r^2 \\\\ \\text{Perimeter} &= 2\\pi r \\end{aligned}",
        variables: [
          { symbol: "r", definition: "Radius of the circle" },
          { symbol: "π", definition: "Pi (approx. 3.14159)" }
        ]
      },
      {
        title: "Cube (Volume & Surface Area)",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Volume} &= a^3 \\\\ \\text{Total SA} &= 6a^2 \\end{aligned}",
        variables: [
          { symbol: "a", definition: "Edge length" }
        ]
      },
      {
        title: "Cuboid (Volume & Surface Area)",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Volume} &= l \\times b \\times h \\\\ \\text{Total SA} &= 2(lb + bh + hl) \\end{aligned}",
        variables: [
          { symbol: "l, b, h", definition: "Length, Breadth, Height" }
        ]
      },
      {
        title: "Cylinder (Volume & Surface Area)",
        type: "Advanced",
        formula: "\\begin{aligned} \\text{Volume} &= \\pi r^2 h \\\\ \\text{Curved SA} &= 2\\pi rh \\\\ \\text{Total SA} &= 2\\pi r(r + h) \\end{aligned}",
        variables: [
          { symbol: "r", definition: "Radius of the circular base" },
          { symbol: "h", definition: "Height of the cylinder" }
        ]
      },
      {
        title: "Cone (Volume & Surface Area)",
        type: "Advanced",
        formula: "\\begin{aligned} \\text{Volume} &= \\frac{1}{3} \\pi r^2 h \\\\ \\text{Curved SA} &= \\pi rl \\\\ \\text{Total SA} &= \\pi r(r + l) \\end{aligned}",
        variables: [
          { symbol: "r", definition: "Radius of base" },
          { symbol: "h", definition: "Vertical height" },
          { symbol: "l", definition: "Slant height (l² = r² + h²)" }
        ]
      },
      {
        title: "Sphere (Volume & Surface Area)",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Volume} &= \\frac{4}{3} \\pi r^3 \\\\ \\text{Surface Area} &= 4\\pi r^2 \\end{aligned}",
        variables: [
          { symbol: "r", definition: "Radius of the sphere" }
        ]
      },
      {
        title: "Hemisphere (Volume & Surface Area)",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Volume} &= \\frac{2}{3} \\pi r^3 \\\\ \\text{Curved Surface Area} &= 2\\pi r^2 \\\\ \\text{Total Surface Area} &= 3\\pi r^2 \\end{aligned}",
        variables: [
          { symbol: "r", definition: "Radius of the hemisphere" }
        ]
      },
      {
        title: "Hollow Sphere (Spherical Shell)",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Volume} &= \\frac{4}{3} \\pi (R^3 - r^3) \\\\ \\text{External Surface Area} &= 4\\pi R^2 \\end{aligned}",
        variables: [
          { symbol: "R", definition: "External radius" },
          { symbol: "r", definition: "Internal radius" }
        ]
      },
      {
        title: "Hollow Cylinder (Pipe)",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Volume} &= \\pi h (R^2 - r^2) \\\\ \\text{Total Surface Area} &= 2\\pi(R+r)(h+R-r) \\end{aligned}",
        variables: [
          { symbol: "R", definition: "Outer radius" },
          { symbol: "r", definition: "Inner radius" },
          { symbol: "h", definition: "Height / Length" }
        ]
      },
      {
        title: "Sector of a Circle",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Area} &= \\frac{\\theta}{360} \\times \\pi r^2 \\\\ \\text{Arc Length} &= \\frac{\\theta}{360} \\times 2\\pi r \\end{aligned}",
        variables: [
          { symbol: "r", definition: "Radius" },
          { symbol: "\\theta", definition: "Central angle in degrees" }
        ]
      },
      {
        title: "Quadrant of a Circle",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Area} &= \\frac{1}{4} \\pi r^2 \\\\ \\text{Perimeter} &= \\frac{1}{2}\\pi r + 2r \\end{aligned}",
        variables: [
          { symbol: "r", definition: "Radius of the quadrant" }
        ]
      },
      {
        title: "Frustum of a Cone",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Volume} &= \\frac{1}{3}\\pi h(R^2 + r^2 + Rr) \\\\ \\text{Slant Height (l)} &= \\sqrt{h^2 + (R-r)^2} \\\\ \\text{Curved Surface} &= \\pi l (R+r) \\end{aligned}",
        variables: [
          { symbol: "R", definition: "Base radius" },
          { symbol: "r", definition: "Top radius" },
          { symbol: "h", definition: "Height" }
        ]
      },
      {
        title: "Regular Polygon",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Interior Angle} &= \\frac{(n-2) \\times 180^{\\circ}}{n} \\\\ \\text{Area} &= \\frac{n a^2}{4 \\tan(180^{\\circ}/n)} \\end{aligned}",
        variables: [
          { symbol: "n", definition: "Number of sides" },
          { symbol: "a", definition: "Length of a side" }
        ]
      },
      {
        title: "Sine and Cosine Rules",
        type: "Advanced Geometry",
        formula: "\\begin{aligned} \\frac{a}{\\sin A} &= \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\\\ a^2 &= b^2 + c^2 - 2bc \\cos A \\end{aligned}",
        variables: [
          { symbol: "R", definition: "Circumradius" },
          { symbol: "A, B, C", definition: "Angles of triangle" },
          { symbol: "a, b, c", definition: "Sides opposite to angles" }
        ]
      },
      {
        title: "Apollonius Theorem",
        type: "Advanced Geometry",
        formula: "AB^2 + AC^2 = 2(AD^2 + BD^2)",
        variables: [
          { symbol: "AD", definition: "Median to side BC" },
          { symbol: "BD", definition: "Half of side BC" }
        ]
      },
      {
        title: "Euler's Polyhedron Formula",
        type: "Advanced Geometry",
        formula: "V + F = E + 2",
        variables: [
          { symbol: "V", definition: "Vertices" },
          { symbol: "F", definition: "Faces" },
          { symbol: "E", definition: "Edges" }
        ]
      },
      {
        title: "Coordinate Geometry (Distance & Area)",
        type: "Advanced Geometry",
        formula: "\\begin{aligned} d &= \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\\\ \\text{Area} &= \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| \\end{aligned}",
        variables: [
          { symbol: "(x_n, y_n)", definition: "Coordinates of points" }
        ]
      },
      {
        title: "Prism (Volume & Surface Area)",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Volume} &= \\text{Base Area} \\times h \\\\ \\text{LSA} &= \\text{Perimeter of Base} \\times h \\\\ \\text{TSA} &= \\text{LSA} + 2 \\times \\text{Base Area} \\end{aligned}",
        variables: [
          { symbol: "h", definition: "Height of the prism" },
          { symbol: "Base Area", definition: "Area of the cross-sectional base (triangle, pentagon, etc.)" }
        ]
      },
      {
        title: "Pyramid (Volume & Surface Area)",
        type: "Mensuration",
        formula: "\\begin{aligned} \\text{Volume} &= \\frac{1}{3} \\times \\text{Base Area} \\times h \\\\ \\text{LSA} &= \\frac{1}{2} \\times \\text{Perimeter} \\times l \\\\ \\text{TSA} &= \\text{LSA} + \\text{Base Area} \\end{aligned}",
        variables: [
          { symbol: "h", definition: "Perpendicular height from apex to base" },
          { symbol: "l", definition: "Slant height" }
        ]
      },
      {
        title: "Regular Tetrahedron",
        type: "Advanced Geometry",
        formula: "\\begin{aligned} \\text{Volume} &= \\frac{a^3}{6\\sqrt{2}} \\\\ \\text{TSA} &= \\sqrt{3}\\, a^2 \\\\ \\text{Height} &= a\\sqrt{\\frac{2}{3}} \\end{aligned}",
        variables: [
          { symbol: "a", definition: "Edge length of the regular tetrahedron" }
        ]
      },
      {
        title: "Cyclic Quadrilateral (Brahmagupta)",
        type: "Advanced Geometry",
        formula: "\\text{Area} = \\sqrt{(s-a)(s-b)(s-c)(s-d)}, \\quad s = \\frac{a+b+c+d}{2}",
        variables: [
          { symbol: "a, b, c, d", definition: "Sides of the cyclic quadrilateral" },
          { symbol: "s", definition: "Semi-perimeter" }
        ]
      },
      {
        title: "Perpendicular Distance (Point to Line)",
        type: "Advanced Geometry",
        formula: "d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}",
        variables: [
          { symbol: "(x_1, y_1)", definition: "Coordinates of the point" },
          { symbol: "ax + by + c = 0", definition: "Equation of the line" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Blood Relations",
    formulas: [
      {
        title: "Coded Blood Relations",
        type: "Advanced",
        formula: "\\text{Analyze symbols to draw family tree}",
        variables: [{ symbol: "+, -, *, /", definition: "Code for relations" }]
      },
      {
        title: "Paternal vs Maternal",
        type: "Simple",
        formula: "\\begin{aligned} \\text{Paternal} &= \\text{Father's side} \\\\ \\text{Maternal} &= \\text{Mother's side} \\end{aligned}",
        variables: [
          { symbol: "Paternal Uncle", definition: "Father's brother" },
          { symbol: "Maternal Uncle", definition: "Mother's brother" }
        ]
      },
      {
        title: "In-Laws",
        type: "Simple",
        formula: "\\text{Spouse's relatives}",
        variables: [
          { symbol: "Father-in-law", definition: "Spouse's father" },
          { symbol: "Sister-in-law", definition: "Spouse's sister OR Brother's wife" }
        ]
      },
      {
        title: "Generations Tree Method",
        type: "Advanced",
        formula: "\\begin{aligned} \\text{1. Same gen:} &\\quad \\text{Horizontal line (—)} \\\\ \\text{2. Diff gen:} &\\quad \\text{Vertical line (|)} \\end{aligned}",
        variables: [
          { symbol: "Square / (+)", definition: "Male" },
          { symbol: "Circle / (-)", definition: "Female" },
          { symbol: "Double line (=)", definition: "Married Couple" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Direction Sense",
    formulas: [
      {
        title: "Shadows & Sun Position",
        type: "Advanced",
        formula: "\\text{Morning: Sun E, Shadow W; Evening: Sun W, Shadow E}",
        variables: [{ symbol: "Shadow", definition: "Opposite to sun" }]
      },
      {
        title: "Standard Directions",
        type: "Simple",
        formula: "\\text{North (Up), South (Down), East (Right), West (Left)}",
        variables: [
          { symbol: "Clockwise", definition: "N -> E -> S -> W" },
          { symbol: "Anti-Clockwise", definition: "N -> W -> S -> E" }
        ]
      },
      {
        title: "Shortest Distance (Pythagoras)",
        type: "Advanced",
        formula: "\\text{Hypotenuse}^2 = \\text{Base}^2 + \\text{Perpendicular}^2",
        variables: [
          { symbol: "Hypotenuse", definition: "Shortest distance between start and end point" },
          { symbol: "Base/Perpendicular", definition: "Horizontal and vertical distance components" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Syllogism",
    formulas: [
      {
        title: "Only a Few / Only A are B",
        type: "Advanced",
        formula: "\\text{Only A are B } \\implies \\text{ All B are A, and B cannot be anything else}",
        variables: [{ symbol: "Only a few", definition: "Some + Some not" }]
      },
      {
        title: "Type: All A are B",
        type: "Simple",
        formula: "\\text{A lies completely inside B}",
        variables: [
          { symbol: "A", definition: "Inner circle" },
          { symbol: "B", definition: "Outer circle" },
          { symbol: "Conclusion", definition: "Some B are A (True), All B are A (False/Uncertain)" }
        ]
      },
      {
        title: "Type: Some A are B",
        type: "Advanced",
        formula: "\\text{A and B partially overlap}",
        variables: [
          { symbol: "Overlap", definition: "The region shared by A and B" },
          { symbol: "Conclusion", definition: "Some B are A (True)" }
        ]
      },
      {
        title: "Type: No A is B",
        type: "Simple",
        formula: "\\text{A and B are completely separate}",
        variables: [
          { symbol: "Conclusion", definition: "No B is A (True), Some A are not B (True)" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Coding-Decoding",
    formulas: [
      {
        title: "Opposite Letter Pairs",
        type: "Advanced",
        formula: "A\\leftrightarrow Z, B\\leftrightarrow Y \\dots M\\leftrightarrow N",
        variables: [{ symbol: "Sum", definition: "Positional sum is always 27" }]
      },
      {
        title: "Forward Alphabet Positional Value",
        type: "Simple",
        formula: "\\text{A=1, B=2, C=3 ... Z=26}",
        variables: [
          { symbol: "EJOTY", definition: "E=5, J=10, O=15, T=20, Y=25" }
        ]
      },
      {
        title: "Reverse Alphabet Positional Value",
        type: "Advanced",
        formula: "\\text{Z=1, Y=2, X=3 ... A=26}",
        variables: [
          { symbol: "Reverse Value", definition: "27 - Forward Value" },
          { symbol: "Example", definition: "A's reverse = 27 - 1 = 26" }
        ]
      }
    ]
  },
  {
    category: "Advanced Circle Geometry",
    formulas: [
      {
        title: "Incircle Radius (Inradius)",
        type: "Geometry",
        formula: "r = \\frac{\\Delta}{s}",
        variables: [
          { symbol: "r", definition: "Inradius (radius of inscribed circle)" },
          { symbol: "\\Delta", definition: "Area of the triangle" },
          { symbol: "s", definition: "Semi-perimeter of the triangle" }
        ]
      },
      {
        title: "Circumcircle Radius (Circumradius)",
        type: "Geometry",
        formula: "R = \\frac{abc}{4\\Delta}",
        variables: [
          { symbol: "R", definition: "Circumradius (radius of circumscribed circle)" },
          { symbol: "a, b, c", definition: "Side lengths of the triangle" },
          { symbol: "\\Delta", definition: "Area of the triangle" }
        ]
      },
      {
        title: "Tangents from an External Point",
        type: "Properties",
        formula: "\\begin{aligned} PA &= PB \\\\ \\angle PAO &= \\angle PBO = 90^{\\circ} \\end{aligned}",
        variables: [
          { symbol: "P", definition: "External point" },
          { symbol: "A, B", definition: "Points of tangency on the circle" },
          { symbol: "O", definition: "Center of the circle" }
        ]
      },
      {
        title: "Direct Common Tangent (DCT)",
        type: "Two Circles",
        formula: "L_{DCT} = \\sqrt{d^2 - (R - r)^2}",
        variables: [
          { symbol: "d", definition: "Distance between the centers of the two circles" },
          { symbol: "R, r", definition: "Radii of the two circles (R > r)" }
        ]
      },
      {
        title: "Transverse Common Tangent (TCT)",
        type: "Two Circles",
        formula: "L_{TCT} = \\sqrt{d^2 - (R + r)^2}",
        variables: [
          { symbol: "d", definition: "Distance between the centers of the two circles" },
          { symbol: "R, r", definition: "Radii of the two circles" }
        ]
      },
      {
        title: "Two Circles: Relative Positions",
        type: "Two Circles",
        formula: "\\begin{aligned} d &> R+r &\\text{(Disjoint, 4 common tangents)} \\\\ d &= R+r &\\text{(Touch Externally, 3 tangents)} \\\\ |R-r| &< d < R+r &\\text{(Intersecting, 2 tangents)} \\\\ d &= |R-r| &\\text{(Touch Internally, 1 tangent)} \\end{aligned}",
        variables: [
          { symbol: "d", definition: "Distance between centers" },
          { symbol: "R, r", definition: "Radii of the circles" }
        ]
      }
    ]
  }
];
