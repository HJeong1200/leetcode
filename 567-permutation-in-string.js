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

var checkInclusion = function (s1, s2) {
  const s1Arr = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1[i].codePointAt() - 97]++;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (i === 0) {
      for (let j = 0; j < s1.length; j++) {
        s1Arr[s2[j].codePointAt() - 97]--;
      }
    } else {
      s1Arr[s2[i - 1].codePointAt() - 97]++;
      s1Arr[s2[i + s1.length - 1].codePointAt() - 97]--;
    }

    if (isSame(s1Arr)) return true;
  }

  return false;
};

function isSame(arr) {
  return arr.every((el) => el === 0);
}
