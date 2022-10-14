var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
};

/**
 * Use hashmap
 */

var firstUniqChar = function (s) {
  let hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], 0);
    }
    let value = hashMap.get(s[i]);
    value += 1;
    hashMap.set(s[i], value);
  }

  for (let entry of hashMap) {
    if (entry[1] === 1) {
      return s.indexOf(entry[0]);
    }
  }

  return -1;
};
