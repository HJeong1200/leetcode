var bitwiseComplement = function (n) {
  let binary = n.toString(2).split("");
  const complement = binary.reduce((acc, cur) => acc + (Number(cur) ^ 1), "");

  let result = 0;

  for (let i = 0; i < complement.length; i++) {
    if (Number(complement[i])) {
      result += 2 ** (complement.length - 1 - i);
    }
  }

  return result;
};
