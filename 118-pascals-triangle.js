var generate = function (numRows) {
  let result = [[1], [1, 1]];

  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }

  for (let i = 2; i < numRows; i++) {
    let row = [1];
    let prevRow = result[i - 1];

    for (let j = 1; j <= i; j++) {
      if (j === i) {
        row[j] = 1;
      } else {
        row[j] = prevRow[j - 1] + prevRow[j];
      }
    }

    result.push(row);
  }

  return result;
};

// ver.2

var generate = function (numRows) {
  let result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let row = [];
    row[0] = 1;
    row[i] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result.push(row);
  }

  return result;
};
