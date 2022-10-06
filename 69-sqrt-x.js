var mySqrt = function (x) {
  if (x < 1) {
    return 0;
  } else if (x === 1) {
    return 1;
  }

  let left = 1;
  let right = x;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    let midSq = mid * mid;

    if (x === midSq) {
      return mid;
    }

    if (x > midSq) {
      left = mid + 1;
    }

    if (x < midSq) {
      right = mid;
    }
  }

  result = left - 1;
  return result;
};

/**
 *
 */
