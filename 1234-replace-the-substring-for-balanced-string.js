var balancedString = function (s) {
  const { map, total } = createHashMap(s);
  let min = Infinity;

  for (let i = total - 1; i < s.length; i++) {
    let index = i;
    const curMap = { ...map };

    while (index >= 0 && Object.keys(curMap).length) {
      if (curMap[s[index]]) {
        curMap[s[index]]--;
        if (curMap[s[index]] === 0) delete curMap[s[index]];
      }

      index--;
    }

    if (!Object.keys(curMap).length) {
      min = Math.min(min, i - index);
      if (min === total) return min;
    }
  }

  return min;
};

const createHashMap = (s) => {
  const map = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    map[s[i]]++;
  }

  for (let str in map) {
    if (map[str] <= s.length / 4) delete map[str];
    else {
      map[str] = map[str] - s.length / 4;
      total += map[str];
    }
  }

  return { map, total };
};
