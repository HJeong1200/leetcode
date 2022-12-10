// wrong
// start인 경우에는 0, end인 경우에는 1을 배열에 표시한다
// stack을 사용해서 0이 보이면 stack에 push, 1이 보이면 stack에서 pop
// [1, 4], [1, 5]인 경우 에러

var merge = function (intervals) {
  let allIntervals = [];
  let result = [];

  for (let interval of intervals) {
    if (allIntervals[interval[0]] === 1) {
      allIntervals[interval[0]] = "";
    } else {
      allIntervals[interval[0]] = 0;
    }

    if (allIntervals[interval[1] === 0]) {
      allIntervals[interval[1]] = "";
    } else {
      allIntervals[interval[1]] = 1;
    }
  }

  let start = -1;
  let stack = [];

  for (let i = 0; i < allIntervals.length; i++) {
    if (start === -1 && allIntervals[i] === 0) {
      start = i;
    } else if (start !== -1 && allIntervals[i] === 0) {
      stack.push(0);
    }

    if (allIntervals[i] === 1 && stack.length) {
      stack.pop();
    } else if (allIntervals[i] === 1 && !stack.length) {
      result.push([start, i]);
      start = -1;
    }
  }

  return result;
};

// correct
// 전체 intervals를 start를 기준으로 sort 한다.
// 모든 interval에 대하여 start가 end보다 큰 경우에는 overlap되지 않음을 이용하여 result 배열 생성

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let startMin = intervals[0][0];
  let endMax = intervals[0][1];

  for (let interval of intervals) {
    if (interval[0] > endMax) {
      result.push([startMin, endMax]);
      startMin = interval[0];
      endMax = interval[1];
    }

    startMin = Math.min(startMin, interval[0]);
    endMax = Math.max(endMax, interval[1]);
  }

  result.push([startMin, endMax]);

  return result;
};
