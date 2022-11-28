var lengthOfLongestSubstring = function (s) {
  let window = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!window.includes(s[i])) {
      window.push(s[i]);
    } else {
      result = Math.max(result, window.length);
      let index = window.indexOf(s[i]);
      window = window.slice(index + 1);
      window.push(s[i]);
    }
  }

  return Math.max(result, window.length);
};

// set 사용하고 싶은 경우
// set은 index를 저장하지는 않음
// set에 숫자가 있는 동안 s[left] delete

var lengthOfLongestSubstring = function (s) {
  let window = new Set();
  let result = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (!window.has(s[i])) {
      window.add(s[i]);
    } else {
      result = Math.max(result, window.size);
      while (window.has(s[i])) {
        window.delete(s[left]);
        left++;
      }
      window.add(s[i]);
    }
  }

  return Math.max(result, window.size);
};
