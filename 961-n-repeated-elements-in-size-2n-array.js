var repeatedNTimes = function (nums) {
  let map = {};
  const n = nums.length / 2;

  for (let num of nums) {
    if (!map[num]) {
      map[num] = 0;
    }

    map[num]++;
  }

  for (let num in map) {
    if (map[num] === n) {
      return num;
    }
  }
};
