var findAnagrams = function (s, p) {
  const pMap = new Map();

  for (let i = 0; i < p.length; i++) {
    if (!pMap.has(p[i])) pMap.set(p[i], 0);

    pMap.set(p[i], pMap.get(p[i]) + 1);
  }

  const result = [];

  for (let i = 0; i <= s.length - p.length; i++) {
    const subStrMap = new Map();
    const subStr = s.slice(i, i + p.length);

    for (let j = 0; j < subStr.length; j++) {
      if (!subStrMap.has(subStr[j])) subStrMap.set(subStr[j], 0);

      subStrMap.set(subStr[j], subStrMap.get(subStr[j]) + 1);
    }

    let isAnagram = true;

    for (let str of pMap.keys()) {
      if (subStrMap.get(str) !== pMap.get(str)) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram) result.push(i);
  }

  return result;
};

// substring에 대해 매번 map을 돌리는 대신
// sliding window를 이용해서 빠지는 것과 추가되는 것만 확인함

var findAnagrams = function (s, p) {
  const pArray = Array(26).fill(0);
  const result = [];

  for (let i = 0; i < p.length; i++) {
    pArray[p[i].codePointAt() - 97]++;
  }

  for (let i = 0; i <= s.length - p.length; i++) {
    if (i === 0) {
      for (let j = 0; j < p.length; j++) {
        pArray[s[j].codePointAt() - 97]--;
      }
    } else {
      pArray[s[i - 1].codePointAt() - 97]++;
      pArray[s[i + p.length - 1].codePointAt() - 97]--;
    }

    if (isSame(pArray)) result.push(i);
  }

  return result;
};

function isSame(arr) {
  return arr.every((el) => el === 0);
}
