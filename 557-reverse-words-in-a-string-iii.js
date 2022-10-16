var reverseWords = function (s) {
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = "";

    for (let j = arr[i].length - 1; j >= 0; j--) {
      word += arr[i][j];
    }

    arr[i] = word;
  }

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
  }

  result = result.slice(0, result.length - 1);

  return result;
};

/**
 * 내장 함수 사용
 */

var reverseWords = function (s) {
  let arr = s.split(" ");

  arr = arr.map((el) => {
    return el.split("").reverse().join("");
  });

  arr = arr.join(" ");

  return arr;
};
