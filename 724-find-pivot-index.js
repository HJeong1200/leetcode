var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (sum(nums.slice(0, i)) === sum(nums.slice(i + 1))) {
      return i;
    }
  }

  return -1;
};

function sum(arr) {
  let result = 0;

  for (let el of arr) {
    result += el;
  }

  return result;
}

// Binary search x
// 수의 배열에 규칙이 없기 때문에 binary search로 왼쪽과 오른쪽을 비교해서 큰 쪽으로 mid를 옮겨도 그 쪽이 정답이 아닐 가능성 있음
// 매 번 left와 right 구할 필요 없이 인덱스가 움직일때마다 leftSum과 rightSum을 더하고 빼면 더 빠름

var pivotIndex = function (nums) {
  let rightSum = findTotal(nums);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};

function findTotal(arr) {
  let result = 0;
  for (let el of arr) {
    result += el;
  }
  return result;
}
