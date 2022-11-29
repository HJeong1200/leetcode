var longestPalindrome = function (s) {
  let longest = s[0];

  if (isPalindrome(s)) return s;

  for (let i = 1; i < s.length - 1; i++) {
    let left = i - 1;
    let right = i + 1;
    let subStr = s.slice(left, right + 1);

    while (left >= 0 && right <= s.length - 1 && isPalindrome(subStr)) {
      if (longest.length < subStr.length) longest = subStr;
      left--;
      right++;
      subStr = s.slice(left, right + 1);
    }
  }

  for (let i = 1; i < s.length; i++) {
    let left = i - 1;
    let right = i;
    let subStr = s.slice(left, right + 1);

    while (left >= 0 && right <= s.length - 1 && isPalindrome(subStr)) {
      if (longest.length < subStr.length) longest = subStr;
      left--;
      right++;
      subStr = s.slice(left, right + 1);
    }

    if (!isPalindrome(subStr)) {
      left++;
      right--;
    }
  }

  return longest;
};

function isPalindrome(str) {
  for (let i = 0; i <= parseInt(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

// palindrome 체크할 때, 앞 뒤 하나씩 추가하고 있으므로 맨 처음과 맨 마지막이 일치하는지만 보면 됨
// 다만 이렇게 할 경우 전체가 palindrome인 경우 체크하는 속도 늦어짐
// 그래도 전반적으로 더 빨라짐

var longestPalindrome = function (s) {
  let longest = s[0];

  for (let i = 1; i < s.length - 1; i++) {
    let left = i - 1;
    let right = i + 1;
    let subStr = s.slice(left, right + 1);

    while (left >= 0 && right <= s.length - 1 && isPalindrome(subStr)) {
      if (longest.length < subStr.length) longest = subStr;
      left--;
      right++;
      subStr = s.slice(left, right + 1);
    }
  }

  for (let i = 1; i < s.length; i++) {
    let left = i - 1;
    let right = i;
    let subStr = s.slice(left, right + 1);

    while (left >= 0 && right <= s.length - 1 && isPalindrome(subStr)) {
      if (longest.length < subStr.length) longest = subStr;
      left--;
      right++;
      subStr = s.slice(left, right + 1);
    }

    if (!isPalindrome(subStr)) {
      left++;
      right--;
    }
  }

  return longest;
};

function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;
  return true;
}
