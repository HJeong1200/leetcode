var isPerfectSquare = function (num) {
  if (num === 1) {
    return true;
  }

  let left = 1;
  let right = num;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let midSq = mid * mid;
    if (midSq === num) {
      return true;
    }
    if (midSq < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
};
