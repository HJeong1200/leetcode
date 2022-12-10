var insert = function (intervals, newInterval) {
  let n = intervals.length;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    }
  }

  if (intervals.length === n) intervals.push(newInterval);

  let result = [];

  let minStart = intervals[0][0];
  let maxEnd = intervals[0][1];

  for (let interval of intervals) {
    if (maxEnd < interval[0]) {
      result.push([minStart, maxEnd]);
      minStart = interval[0];
      maxEnd = interval[1];
    }

    minStart = Math.min(minStart, interval[0]);
    maxEnd = Math.max(maxEnd, interval[1]);
  }

  result.push([minStart, maxEnd]);

  return result;
};
