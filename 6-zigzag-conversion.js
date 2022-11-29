var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let matrix = [];

  for (let i = 0; i < numRows; i++) {
    matrix.push([]);
  }

  let row = 0;
  let isIncreasing = true;

  for (let el of s) {
    matrix[row].push(el);

    if (isIncreasing) {
      row++;
    } else {
      row--;
    }

    if (row === numRows - 1 || row === 0) isIncreasing = !isIncreasing;
  }

  return matrix.flat().join("");
};

// Array.fill() 에서 배열, 객체를 추가하는 경우 주소값이 동일한 배열이 추가된다!!!!
// edge case 잘 확인하자
