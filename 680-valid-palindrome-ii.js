var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
  }

  return true;
};

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

// else 조건에서 많이 막힘..
// 만약 s[left] !== s[right]인 경우, left, right중 하나를 없애야 함
// left, right 중 하나를 없애고 palindrome이 된다면, 지금까지 확인하지 않은 substring은 palindrome이 되어야 함
// isPalindrome 헬퍼 함수를 만들어서, left가 빠진 경우와 right가 빠진 경우 각각 palindrome이 되는지 확인
// 여기서 하나라도 true이면 return true, 아니면 return false
