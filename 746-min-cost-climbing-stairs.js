var minCostClimbingStairs = function (cost) {
  if (cost.length === 2) return Math.min(cost[0], cost[1]);

  const totalCost = Array(cost.length).fill(0);
  totalCost[0] = cost[0];
  totalCost[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    totalCost[i] = Math.min(totalCost[i - 1], totalCost[i - 2]) + cost[i];
  }

  return Math.min(totalCost[cost.length - 1], totalCost[cost.length - 2]);
};

// recursive

var minCostClimbingStairs = function (cost) {
  return Math.min(
    recursion(cost, cost.length - 1),
    recursion(cost, cost.length - 2)
  );
};

function recursion(cost, i) {
  if (i === 0) return cost[0];
  if (i === 1) return cost[1];

  return cost[i] + Math.min(recursion(cost, i - 1), recursion(cost, i - 2));
}
