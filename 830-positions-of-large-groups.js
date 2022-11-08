var largeGroupPositions = function (s) {
  let result = [];

  let left = 0;
  let right = 1;
  let counter = 0;

  while (left < s.length) {
    if (s[left] === s[right]) {
      counter++;
      right++;
    } else {
      if (counter >= 2) {
        result.push([left, right - 1]);
      }
      counter = 0;
      left = right;
      right++;
    }
  }

  return result;
};
