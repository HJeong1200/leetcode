var mincostTickets = function (days, costs) {
  const [oneDay, weekly, monthly] = costs;
  const dp = Array(396).fill(0);
  const daySet = new Set(days);

  for (let i = 364; i >= 0; i--) {
    if (!daySet.has(i + 1)) {
      dp[i] = dp[i + 1];
      continue;
    }

    const oneDayCost = oneDay + dp[i + 1];
    const weeklyCost = weekly + dp[i + 7];
    const monthlyCost = monthly + dp[i + 30];

    dp[i] = Math.min(oneDayCost, weeklyCost, monthlyCost);
  }

  return dp[0];
};
