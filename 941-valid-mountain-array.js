var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  if (arr.length === 3) {
    if (arr[0] < arr[1] && arr[1] > arr[2]) {
      return true;
    }

    return false;
  }

  let left = 1;
  let right = arr.length - 2;

  // edge case 조심!!
  if (arr[left - 1] >= arr[left]) return false;
  if (arr[right] <= arr[right + 1]) return false;

  while (arr[left - 1] < arr[left]) {
    left++;
  }

  while (arr[right] > arr[right + 1]) {
    right--;
  }

  if (left - 1 === right + 1) return true;
  return false;
};

// left, right 나눌 필요 없음

var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let i = 1;

  while (i < arr.length && arr[i - 1] < arr[i]) {
    i++;
  }

  // edge case 조심!!
  if (i === 1 || i === arr.length) {
    return false;
  }

  while (i < arr.length && arr[i - 1] > arr[i]) {
    i++;
  }

  return i === arr.length;
};
