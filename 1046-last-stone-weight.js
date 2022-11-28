var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    const last = stones.length - 1;
    if (stones[last] === stones[last - 1]) {
      stones = stones.slice(0, last - 1);
    } else {
      stones[last] = stones[last] - stones[last - 1];
      stones.splice(last - 1, 1);
      stones.sort((a, b) => a - b);
    }
  }

  return stones.length ? stones[0] : 0;
};

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    let first = [0, -1];
    let second = [0, -1];

    for (let i = 0; i < stones.length; i++) {
      if (stones[i] >= first[0]) {
        second = first.slice();
        first = [stones[i], i];
      }

      if (stones[i] >= second[0] && stones[i] < first[0]) {
        second = [stones[i], i];
      }
    }

    if (first[0] === second[0]) {
      stones.splice(first[1], 1);
      stones.splice(second[1], 1);
    } else {
      stones[first[1]] = first[0] - second[0];
      stones.splice(second[1], 1);
    }
  }

  return stones.length ? stones[0] : 0;
};
