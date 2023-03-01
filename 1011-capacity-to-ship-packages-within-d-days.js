var shipWithinDays = function (weights, days) {
  const { maxWeight, totalWeight } = searchWeight(weights);
  let left = maxWeight;
  let right = totalWeight;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    const shipDays = checkDays(weights, mid);

    if (shipDays <= days) right = mid;
    if (shipDays > days) left = mid + 1;
  }

  return left;
};

const searchWeight = (weights) => {
  let maxWeight = 0;
  let totalWeight = 0;

  for (let weight of weights) {
    maxWeight = Math.max(maxWeight, weight);
    totalWeight += weight;
  }

  return { maxWeight, totalWeight };
};

const checkDays = (weights, maxWeight) => {
  let days = 1;
  let curWeight = 0;

  for (let weight of weights) {
    curWeight += weight;

    if (curWeight > maxWeight) {
      days++;
      curWeight = weight;
    }
  }

  return days;
};
