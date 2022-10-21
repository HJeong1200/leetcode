var repeatedSubstringPattern = function (s) {
  if (s.length === 1) {
    return false;
  }

  for (let i = 1; i <= s.length / 2; i++) {
    let subStr = s.slice(0, i);

    while (subStr.length < s.length) {
      subStr += s.slice(0, i);
    }

    if (subStr === s) {
      return true;
    }
  }

  return false;
};

/**
 *
 * subStr은 (s.length / subStr.length)번 반복할 수 있음
 *
 */

var repeatedSubstringPattern = function (s) {
  if (s.length === 1) {
    return false;
  }

  let subStr = "";

  for (let i = 0; i <= Math.floor((s.length - 1) / 2); i++) {
    subStr += s[i];

    if (subStr.repeat(s.length / subStr.length) === s) {
      return true;
    }
  }

  return false;
};
