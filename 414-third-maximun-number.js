var thirdMax = function (nums) {
  let set = new Set(nums);
  let arr = [];

  for (let el of set) {
    arr.push(el);
  }

  arr = arr.sort((a, b) => a - b);

  if (arr.length < 3) {
    return arr[arr.length - 1];
  } else {
    return arr[arr.length - 3];
  }
};

/** O(n) */

var thirdMax = function (nums) {
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];

  for (let num of nums) {
    if ([first, second, third].includes(num)) {
      continue;
    }

    if (num > first) {
      [first, second, third] = [num, first, second];
    } else if (num > second) {
      [second, third] = [num, second];
    } else if (num > third) {
      third = num;
    }
  }

  return third === -Infinity ? first : third;
};
