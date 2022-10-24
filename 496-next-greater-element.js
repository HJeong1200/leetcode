var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let x = nums2.indexOf(nums1[i]);

    if (x !== -1) {
      for (let j = x; j < nums2.length; j++) {
        if (nums2[x] < nums2[j]) {
          result[i] = nums2[j];
          break;
        } else {
          result[i] = -1;
        }
      }
    } else {
      result[i] = -1;
    }
  }

  return result;
};

// 조건에 맞추어 정리(num1에 있는 모든 수는 num2에 존재하는 조건)

var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let x = nums2.indexOf(nums1[i]);

    for (let j = x; j < nums2.length; j++) {
      if (nums2[x] < nums2[j]) {
        result[i] = nums2[j];
        break;
      } else {
        result[i] = -1;
      }
    }
  }

  return result;
};

// Monotonic stack 사용

var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let stack = [];

    let x = nums2.indexOf(nums1[i]);

    for (let j = x + 1; j <= nums2.length; j++) {
      if (stack.length && stack[stack.length - 1] > nums1[i]) {
        result[i] = stack.pop();
        break;
      }

      stack.push(nums2[j]);
    }

    if (!result[i]) {
      result[i] = -1;
    }
  }

  return result;
};
