/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let adder = "0";

  while (a.length > b.length) {
    b = "0" + b;
  }

  while (b.length > a.length) {
    a = "0" + a;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === "1" && b[i] === "1") {
      result = adder + result;
      adder = "1";
    } else if (a[i] === "0" && b[i] === "0") {
      result = adder + result;
      adder = "0";
    } else if (adder === "0") {
      result = "1" + result;
    } else {
      result = "0" + result;
      adder = "1";
    }
  }

  if (adder === "1") result = adder + result;

  return result;
};
