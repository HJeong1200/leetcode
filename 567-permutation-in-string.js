var checkInclusion = function (s1, s2) {
  const s1Map = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (!s1Map.has(s1[i])) s1Map.set(s1[i], 0);

    s1Map.set(s1[i], s1Map.get(s1[i]) + 1);
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    subStr = s2.slice(i, i + s1.length);

    const subStrMap = new Map();

    for (let j = 0; j < subStr.length; j++) {
      if (!subStrMap.has(subStr[j])) subStrMap.set(subStr[j], 0);

      subStrMap.set(subStr[j], subStrMap.get(subStr[j]) + 1);
    }

    let result = true;

    for (let str of s1Map.keys()) {
      if (s1Map.get(str) !== subStrMap.get(str)) {
        result = false;
        break;
      }
    }

    if (result) return true;
  }

  return false;
};

// permutation 확인하는 법 -> 모든 글자의 빈도가 동일하면 permutation
