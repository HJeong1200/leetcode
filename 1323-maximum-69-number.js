var maximum69Number = function (num) {
  let str = String(num);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "6") {
      str = str.slice(0, i) + "9" + str.slice(i + 1);
      return Number(str);
    }
  }

  return num;
};
