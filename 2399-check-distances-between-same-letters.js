var checkDistances = function (s, distance) {
  let counter = 0;
  let result = Array(26).fill(-1);

  let left = 0;

  for (let i = 1; i < s.length; i++) {
    if (result[s[left].charCodeAt() - 97] === -1) {
      if (s[left] !== s[i]) {
        counter++;
      } else {
        result[s[left].charCodeAt() - 97] = counter;
        counter = 0;
        left++;
        i = left;
      }
    } else {
      left++;
      i = left;
    }
  }

  let answer = false;

  for (let i = 0; i < distance.length; i++) {
    if (distance[i] === result[i] || result[i] === -1) {
      answer = true;
    } else if (distance[i] !== result[i] && result[i] !== -1) {
      return false;
    }
  }

  return answer;
};

// using hashmap

var checkDistances = function (s, distance) {
  let hashMap = new Map();
  let result = true;

  for (let i = 0; i < s.length; i++) {
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], i);
    } else {
      if (i - hashMap.get(s[i]) - 1 !== distance[s[i].charCodeAt() - 97]) {
        result = false;
      }
    }
  }

  return result;
};
