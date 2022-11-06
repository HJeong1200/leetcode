var numJewelsInStones = function (jewels, stones) {
  let jewelsSet = new Set();
  let counter = 0;

  for (let el of jewels) {
    jewelsSet.add(el);
  }

  for (let stone of stones) {
    if (jewelsSet.has(stone)) {
      counter++;
    }
  }

  return counter;
};
