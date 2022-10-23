var licenseKeyFormatting = function (s, k) {
  let arr = [];
  let word = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "-" && typeof s[i] === "string") {
      word = s[i].toUpperCase() + word;
    } else if (typeof s[i] === "number") {
      word = s[i] + word;
    }

    if (word.length === k) {
      arr.unshift(word);
      word = "";
    }
  }

  if (word.length <= k && arr.length === 0) {
    return word;
  }

  if (word.length !== 0) {
    return word + "-" + arr.join("-");
  } else {
    return arr.join("-");
  }
};

/** 최적화 */

var licenseKeyFormatting = function (s, k) {
  let letterStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "-") {
      letterStr += s[i];
    }
  }

  let head = letterStr.length % k;
  let arr = [];

  if (head !== 0) {
    arr.push(letterStr.slice(0, head));
  }

  for (let i = head; i < letterStr.length; i += k) {
    arr.push(letterStr.slice(i, i + k));
  }

  let result = arr.join("-").toUpperCase();
  return result;
};
