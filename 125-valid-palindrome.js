var isPalindrome = function (s) {
  const validArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  s = s.toLowerCase();

  let strArr = [];

  for (let i = 0; i < s.length; i++) {
    if (validArr.indexOf(s[i]) !== -1) {
      strArr.push(s[i]);
    }
  }

  for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
    if (strArr[i] !== strArr[strArr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
