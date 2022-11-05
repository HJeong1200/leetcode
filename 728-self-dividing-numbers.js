var selfDividingNumbers = function (left, right) {
  let result = [];

  for (let i = left; i <= right; i++) {
    if (checkSelfDividing(i)) {
      result.push(i);
    }
  }

  return result;
};

function checkSelfDividing(num) {
  let str = String(num);

  if (str.includes("0")) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (num % str[i]) {
      return false;
    }
  }

  return true;
}
