var totalFruit = function (fruits) {
  if (fruits.length === 1) return 1;

  const maxFruitsArr = Array(fruits.length).fill(1);

  let basket = [fruits[0]];
  let basketIndex = [0];

  for (let i = 1; i < fruits.length; i++) {
    if (fruits[i] === fruits[i - 1]) {
      maxFruitsArr[i] = maxFruitsArr[i - 1] + 1;
    } else {
      if (basket.length === 1) {
        maxFruitsArr[i] = maxFruitsArr[i - 1] + 1;
        basket.push(fruits[i]);
        basketIndex.push(i);
        continue;
      }

      if (basket.length === 2 && basket.includes(fruits[i])) {
        maxFruitsArr[i] = maxFruitsArr[i - 1] + 1;
        basket.reverse();
        basketIndex.reverse();
        basketIndex[1] = i;
        continue;
      }

      if (basket.length === 2 && !basket.includes(fruits[i])) {
        maxFruitsArr[i] = i - basketIndex[1] + 1;
        basket.shift();
        basketIndex.shift();
        basket.push(fruits[i]);
        basketIndex.push(i);
      }
    }
  }

  return Math.max(...maxFruitsArr);
};

// using slide window

var totalFruit = function (fruits) {
  if (fruits.length === 1) return 1;

  let maxFruits = 1;
  let lastChangedIdx = 0;
  let basket = [];
  let basketSet = new Set();

  for (let i = 0; i < fruits.length; i++) {
    basket.push(fruits[i]);
    basketSet.add(fruits[i]);

    if (basketSet.size === 3) {
      basket = fruits.slice(lastChangedIdx, i + 1);
      basketSet = new Set(basket);
    }

    if (basketSet.size >= 2 && fruits[i] !== fruits[i - 1]) lastChangedIdx = i;

    maxFruits = Math.max(maxFruits, basket.length);
  }

  return maxFruits;
};

var totalFruit = function (fruits) {
  if (fruits.length === 1) return 1;

  let maxFruits = 0;
  let basket = new Map();
  let left = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (!basket.has(fruits[i])) basket.set(fruits[i], 0);

    basket.set(fruits[i], basket.get(fruits[i]) + 1);

    while (basket.size > 2) {
      const leftFruit = fruits[left];

      basket.set(leftFruit, basket.get(leftFruit) - 1);

      if (basket.get(leftFruit) === 0) basket.delete(leftFruit);

      left++;
    }

    maxFruits = Math.max(maxFruits, i - left + 1);
  }

  return maxFruits;
};
