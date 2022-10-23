var constructRectangle = function (area) {
  let result = [area, 1];
  let current = [1, 1];

  for (let i = Math.ceil(area / 2); i >= 1; i--) {
    if (area % i === 0) {
      current[0] = Math.max(area / i, i);
      current[1] = Math.min(area / i, i);

      if (Math.abs(result[0] - result[1]) > Math.abs(current[0] - current[1])) {
        result = current.slice();
      }
    }
  }

  return result;
};

/**
 * Math.floor(Math.sqrt(area))이 정수이면 return
 * 정수가 아니어도 해당 수부터 반복하여 area % i 가 0인 것을 찾으면 가장 차이가 적은 L과 W를 찾을 수 있을 것임
 */

var constructRectangle = function (area) {
  let num = Math.floor(Math.sqrt(area));

  if (num ** 2 === area) {
    return [num, num];
  }

  for (let i = num; i > 0; i--) {
    if (area % i === 0) {
      return [Math.max(area / i, i), Math.min(area / i, i)];
    }
  }
};
