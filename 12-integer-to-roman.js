const roman = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

var intToRoman = function (num) {
  let result = "";
  let dividers = [1000, 100, 10, 1];

  for (let divider of dividers) {
    result += divideNum(num, divider);
    num -= Math.floor(num / divider) * divider;
  }

  return result;
};

const divideNum = (num, divider) => {
  let count = Math.floor(num / divider);
  let result = "";

  if (count === 4) {
    return roman[String(divider)] + roman[String(divider * 5)];
  }

  if (count === 9) {
    return roman[String(divider)] + roman[String(divider * 10)];
  }

  if (count >= 5) {
    result += roman[String(divider * 5)];
    count -= 5;
  }

  while (count > 0) {
    result += roman[String(divider)];
    count--;
  }

  return result;
};
