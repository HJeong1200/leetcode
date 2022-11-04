const vowels = {
  a: "a",
  e: "e",
  i: "i",
  o: "o",
  u: "u",
  A: "A",
  E: "E",
  I: "I",
  O: "O",
  U: "U",
};

var reverseVowels = function (s) {
  let vowelsArr = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels[s[i]]) {
      vowelsArr.push(s[i]);
    }
  }

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (!vowels[s[i]]) {
      answer += s[i];
    } else {
      answer += vowelsArr.pop();
    }
  }

  return answer;
};

// using two pointers

var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  let arr = [];

  while (left <= right) {
    if (!vowels[s[left]]) {
      arr[left] = s[left];
      left++;
    }
    if (!vowels[s[right]]) {
      arr[right] = s[right];
      right--;
    }
    if (vowels[s[left]] && vowels[s[right]]) {
      [arr[left], arr[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};
