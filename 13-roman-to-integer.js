var romanToInt = function (s) {
  let arr = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" && s[i + 1] === "V") ||
      (s[i] === "I" && s[i + 1] === "X")
    ) {
      arr.push(s[i] + s[i + 1]);
      i++;
    } else if (
      (s[i] === "X" && s[i + 1] === "L") ||
      (s[i] === "X" && s[i + 1] === "C")
    ) {
      arr.push(s[i] + s[i + 1]);
      i++;
    } else if (
      (s[i] === "C" && s[i + 1] === "D") ||
      (s[i] === "C" && s[i + 1] === "M")
    ) {
      arr.push(s[i] + s[i + 1]);
      i++;
    } else {
      arr.push(s[i]);
    }
  }

  for (num of arr) {
    if (num === "I") {
      result += 1;
    } else if (num === "V") {
      result += 5;
    } else if (num === "X") {
      result += 10;
    } else if (num === "L") {
      result += 50;
    } else if (num === "C") {
      result += 100;
    } else if (num === "D") {
      result += 500;
    } else if (num === "M") {
      result += 1000;
    } else if (num === "IV") {
      result += 4;
    } else if (num === "IX") {
      result += 9;
    } else if (num === "XL") {
      result += 40;
    } else if (num === "XC") {
      result += 90;
    } else if (num === "CD") {
      result += 400;
    } else if (num === "CM") {
      result += 900;
    }
  }
  return result;
};

// string을 배열로 만든다
// 2개씩 확인해서 subtract케이스이면 하나의 인덱스에 넣고 아니면 별도의 인덱스에 넣는다
// 배열의 각각을 숫자로 치환해서 더한다.

/*
    Loop through every digits
    define the current and next values
    if the current value is smaller than the next value, reduce it, otherwise sum it
*/

var romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let next = s[i + 1];

    if (romans[cur] < romans[next]) {
      result -= romans[cur];
    } else {
      result += romans[cur];
    }
  }

  return result;
};
