var findComplement = function (num) {
  num = num.toString(2);

  let complement = "";

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") {
      complement += "0";
    } else {
      complement += "1";
    }
  }

  if (complement[0] === "0") {
    complement = complement.slice(1);
  }

  let complementNum = 0;

  for (let i = 0; i < complement.length; i++) {
    complementNum += complement[complement.length - 1 - i] * 2 ** i;
  }

  return complementNum;
};
