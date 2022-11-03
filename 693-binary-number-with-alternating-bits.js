var hasAlternatingBits = function (n) {
  let binary = n.toString(2);

  if (binary.length === 1) {
    return true;
  }

  for (let i = 1; i < binary.length; i++) {
    if (binary[i] === binary[i - 1]) {
      return false;
    }
  }

  return true;
};
