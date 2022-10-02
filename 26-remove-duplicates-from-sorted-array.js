var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      for (let j = i; j < nums.length; j++) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }

    if (nums[i - 1] > nums[i]) {
      return i;
    }
  }
};

// 숫자를 두개씩 비교
// 두 숫자가 다르면 인덱스 추가
// 두 숫자가 같으면?
// 스위칭해서 맨 뒤로 보낸다?

/* 
    모든 중복값은 이웃해있다
    i 와 i-1을 비교해서 둘이 다르면 k를 하나씩 더한다
    k를 리턴한다
*/

/* 
    모든 중복값은 이웃해있다
    i 와 i-1을 비교해서 둘이 다르면 k를 하나씩 더한다
    nums[k]에 해당 값을 넣는다
*/

var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
