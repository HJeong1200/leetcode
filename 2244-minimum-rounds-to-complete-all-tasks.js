var minimumRounds = function (tasks) {
  let map = new Map();
  let rounds = 0;

  for (let task of tasks) {
    if (!map.has(task)) {
      map.set(task, 0);
    }

    map.set(task, map.get(task) + 1);
  }

  for (let el of map.values()) {
    if (el === 1) return -1;

    if (el === 2) {
      rounds += 1;
      continue;
    }

    if (el % 3 === 0) {
      rounds += el / 3;
    } else {
      rounds += Math.floor(el / 3) + 1;
    }
  }

  return rounds;
};
