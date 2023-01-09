var deleteAndEarn = function (nums) {
  if (nums.length === 1) return nums[0];

  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap.has(nums[i])) hashMap.set(nums[i], 0);

    hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
  }

  const arr = [];

  for (let num of hashMap.keys()) arr[num] = getVal(num, hashMap);

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) arr[i] = 0;
  }

  for (let i = 1; i < arr.length; i++) {
    const prevVal = arr[i - 1];
    const curVal = arr[i] + (arr[i - 2] || 0);

    arr[i] = Math.max(curVal, prevVal);
  }

  return arr[arr.length - 1];
};

function getVal(num, hashMap) {
  if (!num) return 0;
  return num * hashMap.get(num);
}
