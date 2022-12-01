// brute force (TLE);

var maxArea = function (height) {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      const width = Math.abs(j - i);
      const curHeight = Math.min(height[i], height[j]);

      max = Math.max(max, width * curHeight);
    }
  }

  return max;
};

// two pointers
// 왼쪽과 오른쪽을 비교해서 작은 부분의 포인터를 옮긴다
// 양쪽의 높이가 같은 경우 포인터 둘 다 옮겨도 됨
//   -> 포인터를 하나만 옮긴다고 가정할 경우 어차피 크기는 줄어들 것이기 때문

var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, calcHeight(left, right, height));

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

function calcHeight(i, j, height) {
  const width = Math.abs(i - j);
  const curHeight = Math.min(height[i], height[j]);

  return width * curHeight;
}
