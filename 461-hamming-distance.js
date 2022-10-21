var hammingDistance = function (x, y) {
  let xor = (x ^ y).toString(2);

  let count = 0;

  for (let i = 0; i < xor.length; i++) {
    if (xor[i] === "1") {
      count++;
    }
  }

  return count;
};
