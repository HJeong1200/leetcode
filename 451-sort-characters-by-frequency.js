var frequencySort = function (s) {
  let hashMap = {};

  for (let char of s) {
    if (!hashMap[char]) hashMap[char] = 0;

    hashMap[char]++;
  }

  return s
    .split("")
    .sort()
    .sort((a, b) => hashMap[b] - hashMap[a])
    .join("");
};

// sort 두번 안쓰고

var frequencySort = function (s) {
  const hashMap = {};

  for (let char of s) {
    if (!hashMap[char]) hashMap[char] = 0;

    hashMap[char]++;
  }

  const arr = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);

  let result = "";

  for (let el of arr) {
    const char = el[0];
    let count = el[1];

    while (count > 0) {
      result += char;
      count--;
    }
  }

  return result;
};

// 마지막에 .reduce 사용

var frequencySort = function (s) {
  const hashMap = {};

  for (let char of s) {
    if (!hashMap[char]) hashMap[char] = 0;

    hashMap[char]++;
  }

  const arr = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);

  return arr.reduce((acc, cur) => {
    while (cur[1] > 0) {
      acc += cur[0];
      cur[1]--;
    }
    return acc;
  }, "");
};
