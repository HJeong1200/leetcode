var getRow = function (rowIndex) {
  let result = [];

  if (rowIndex === 0) {
    return [1];
  } else if (rowIndex === 1) {
    return [1, 1];
  }

  result = [1, 1];

  for (let i = 2; i <= rowIndex; i++) {
    let temp = result.slice();

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[j] = 1;
      } else {
        result[j] = temp[j - 1] + temp[j];
      }
    }
  }

  return result;
};
