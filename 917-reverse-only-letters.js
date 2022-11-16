var reverseOnlyLetters = function (s) {
  const english = /[a-z]/i;
  let result = [];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(english)) {
      stack.push(s[i]);
    } else {
      result[i] = s[i];
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (result[i] === undefined) {
      result[i] = stack.pop();
    }
  }

  return result.join("");
};

// 41번 라인 없애고 if를 else if로 변경해도 통과 가능

var reverseOnlyLetters = function (s) {
  const english = /[a-z]/i;
  let result = [];
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (!s[left].match(english)) {
      result[left] = s[left];
      left++;
    }
    if (!s[right].match(english)) {
      result[right] = s[right];
      right--;
    }

    if (s[left] === undefined || s[right] === undefined) {
      continue;
    }

    if (s[left].match(english) && s[right].match(english)) {
      result[right] = s[left];
      result[left] = s[right];
      left++;
      right--;
    }
  }

  return result.join("");
};
