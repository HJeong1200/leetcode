// TLE

var minimumAverageDifference = function (nums) {
  if (nums.length === 1) return 0;

  let avgArr = [];

  for (let i = 0; i < nums.length; i++) {
    const leftAvg = average(nums.slice(0, i + 1));
    const rightAvg = average(nums.slice(i + 1));

    const curAvg = Math.abs(leftAvg - rightAvg);

    if (curAvg === 0) return i;

    avgArr.push(curAvg);
  }

  let min = 0;

  for (let i = 1; i < avgArr.length; i++) {
    if (avgArr[min] > avgArr[i]) min = i;
  }

  return avgArr.indexOf(avgArr[min]);
};

const average = (arr) => {
  if (arr.length === 0) return 0;

  const divider = arr.length;

  return Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / divider);
};

// memoization
// 배열 순회하면서 sum을 매번 다시 계산할 필요 없음 - (i + 1)번째 요소를 더하고 빼주면 됨

var minimumAverageDifference = function (nums) {
  if (nums.length === 1) return 0;

  let avgArr = [];

  let leftSum = nums[0];
  let rightSum = nums.slice(1).reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < nums.length; i++) {
    let leftAvg = Math.floor(leftSum / (i + 1));
    let rightAvg = Math.floor(rightSum / (nums.length - i - 1));
    if (isNaN(rightAvg)) rightAvg = 0;

    const curAvg = Math.abs(leftAvg - rightAvg);

    if (curAvg === 0) return i;

    avgArr.push(curAvg);

    leftSum += nums[i + 1];
    rightSum -= nums[i + 1];
  }

  let min = 0;

  for (let i = 1; i < avgArr.length; i++) {
    if (avgArr[min] > avgArr[i]) min = i;
  }

  return min;
};

// refactor - avg들을 배열에 담을 필요 없이 minAvg, minIdx로 저장해주면 됨

var minimumAverageDifference = function (nums) {
  if (nums.length === 1) return 0;

  let minAvg = Infinity;
  let minIdx;

  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = nums[0];
  let rightSum = totalSum - leftSum;

  for (let i = 0; i < nums.length; i++) {
    let leftAvg = Math.floor(leftSum / (i + 1));
    let rightAvg = Math.floor(rightSum / (nums.length - i - 1));
    if (isNaN(rightAvg)) rightAvg = 0;

    const curAvg = Math.abs(leftAvg - rightAvg);

    if (curAvg === 0) return i;

    if (minAvg > curAvg) {
      minAvg = curAvg;
      minIdx = i;
    }

    leftSum += nums[i + 1];
    rightSum -= nums[i + 1];
  }

  return minIdx;
};
