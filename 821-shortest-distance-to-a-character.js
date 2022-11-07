// brute force

var shortestToChar = function (s, c) {
  let result = [];
  let zeroIndices = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      result[i] = 0;
      zeroIndices.push(i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (result[i] !== 0) {
      let minDist = Math.abs(i - zeroIndices[0]);
      for (let index of zeroIndices) {
        minDist = Math.min(minDist, Math.abs(i - index));
      }
      result[i] = minDist;
    }
  }

  return result;
};

// two pass

var shortestToChar = function (s, c) {
  let result = [];
  let prev = s.indexOf(c);

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== c) {
      result[i] = Math.abs(i - prev);
    } else {
      result[i] = 0;
      prev = i;
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== c) {
      result[i] = Math.min(result[i], Math.abs(i - prev));
    } else {
      prev = i;
    }
  }

  return result;
};
