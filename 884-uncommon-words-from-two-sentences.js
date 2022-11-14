var uncommonFromSentences = function (s1, s2) {
  let result = [];

  const s1Arr = s1.split(" ");
  const s2Arr = s2.split(" ");

  for (let i = 0; i < s1Arr.length; i++) {
    if (
      !s2Arr.includes(s1Arr[i]) &&
      s1Arr.indexOf(s1Arr[i]) === s1Arr.lastIndexOf(s1Arr[i])
    ) {
      result.push(s1Arr[i]);
    }
  }

  for (let i = 0; i < s2Arr.length; i++) {
    if (
      !s1Arr.includes(s2Arr[i]) &&
      s2Arr.indexOf(s2Arr[i]) === s2Arr.lastIndexOf(s2Arr[i])
    ) {
      result.push(s2Arr[i]);
    }
  }

  return result;
};

// indexOf, lastIndexOf, includes 사용하니 속도가 너무 느림 => set 사용
// 배열에서 어떤 항목이 있는지 없는지 어떻게 확인할까? => 중복값을 담는 set 하나 더 만들기

var uncommonFromSentences = function (s1, s2) {
  let result = [];

  const s1Arr = s1.split(" ");
  const s2Arr = s2.split(" ");

  let s1Set = new Set();
  let s2Set = new Set();
  let duplicates = new Set();

  for (let el of s1Arr) {
    if (!s1Set.has(el)) {
      s1Set.add(el);
    } else {
      duplicates.add(el);
    }
  }

  for (let el of s2Arr) {
    if (!s2Set.has(el)) {
      s2Set.add(el);
    } else {
      duplicates.add(el);
    }
  }

  for (let el of s1Set) {
    if (!s2Set.has(el) && !duplicates.has(el)) result.push(el);
  }

  for (let el of s2Set) {
    if (!s1Set.has(el) && !duplicates.has(el)) result.push(el);
  }

  return result;
};

/**
 * uncommon word = words that appear only once
 * 모든 word에 대하여 hashMap 만들어서 count를 셈, count가 1인 것들만 모아서 리턴
 */

var uncommonFromSentences = function (s1, s2) {
  let result = [];

  const arr = s1.split(" ").concat(s2.split(" "));
  let hashMap = {};

  for (el of arr) {
    if (!hashMap[el]) {
      hashMap[el] = 0;
    }

    hashMap[el]++;
  }

  for (el in hashMap) {
    if (hashMap[el] === 1) {
      result.push(el);
    }
  }

  return result;
};
