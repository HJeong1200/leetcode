var findTheDifference = function (s, t) {
  let tMap = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!tMap.has(t[i])) {
      tMap.set(t[i], 0);
    }

    let value = tMap.get(t[i]);
    value++;
    tMap.set(t[i], value);
  }

  for (let i = 0; i < s.length; i++) {
    let value = tMap.get(s[i]) - 1;

    if (value === 0) {
      tMap.delete(s[i]);
    } else {
      tMap.set(s[i], value);
    }
  }

  for (let key of tMap.keys()) {
    return key;
  }
};

/**
 * Use charCodeAt()
 */
