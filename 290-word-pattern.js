var wordPattern = function (pattern, s) {
  const map = new Map();
  const sArr = s.split(" ");

  if (sArr.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], sArr[i]);
    } else {
      if (map.get(pattern[i]) !== sArr[i]) return false;
    }
  }

  const sSet = new Set(sArr);
  const patternSet = new Set(pattern.split(""));

  if (sSet.size !== patternSet.size) return false;

  return true;
};

// pattern과 s를 따로 확인

var wordPattern = function (pattern, s) {
  let map = new Map();
  const sArr = s.split(" ");

  if (sArr.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], sArr[i]);
    } else {
      if (map.get(pattern[i]) !== sArr[i]) return false;
    }
  }

  map = new Map();

  for (let i = 0; i < sArr.length; i++) {
    if (!map.has(sArr[i])) {
      map.set(sArr[i], pattern[i]);
    } else {
      if (map.get(sArr[i]) !== pattern[i]) return false;
    }
  }

  return true;
};
