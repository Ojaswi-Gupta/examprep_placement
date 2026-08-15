export const DP_DATA = {
  category: "Dynamic Programming",
  icon: "🧩",
  items: [
    {
      name: "Memoization (Top-Down)",
      description: "An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It starts from the main problem and breaks it down.",
      complexity: {
        time: "Optimizes exponential O(2^n) to polynomial O(n)",
        space: "O(n) for recursion stack and cache map"
      },
      code: `// Fibonacci using Memoization
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}`
    },
    {
      name: "Tabulation (Bottom-Up)",
      description: "A dynamic programming technique where you solve all subproblems and store their results in an array (or table) iteratively. It avoids the overhead of recursion by building the solution from the smallest subproblems up to the main problem.",
      complexity: {
        time: "O(n)",
        space: "O(n) for the array table (often can be optimized to O(1))"
      },
      code: `// Fibonacci using Tabulation
function fibTab(n) {
  if (n <= 1) return n;
  
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

// Space Optimized Version O(1) space
function fibOptimized(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}`
    },
    {
      name: "0/1 Knapsack Problem",
      description: "Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).",
      complexity: {
        time: "O(N * W) where N is items and W is capacity",
        space: "O(N * W) for the 2D DP array"
      },
      code: `function knapsack(W, wt, val, n) {
  let K = new Array(n + 1).fill().map(() => new Array(W + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0;
      } else if (wt[i - 1] <= w) {
        K[i][w] = Math.max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
      } else {
        K[i][w] = K[i - 1][w];
      }
    }
  }
  return K[n][W];
}`
    }
  ]
};
