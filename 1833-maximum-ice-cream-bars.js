var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  const prefix = costs.slice();

  if (prefix[0] > coins) return 0;

  for (let i = 1; i < prefix.length; i++) {
    prefix[i] += prefix[i - 1];
    if (prefix[i] > coins) return i;
  }

  return costs.length;
};

// with O(m+n) time
// use frequency

var maxIceCream = function (costs, coins) {
  const frequency = [];
  let result = 0;

  for (let cost of costs) {
    if (!frequency[cost]) frequency[cost] = 0;
    frequency[cost] += 1;
  }

  for (let i = 1; i < frequency.length; i++) {
    if (!frequency[i]) continue;

    const count = Math.min(frequency[i], Math.floor(coins / i));

    if (count === 0) return result;

    coins -= count * i;
    result += count;
  }

  return result;
};
