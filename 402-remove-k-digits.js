var removeKdigits = function (num, k) {
  if (num.length === k) {
    return "0";
  }

  let stack = [];

  for (let i = 0; i < num.length; i++) {
    while (stack.length && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  if (k > 0) {
    stack = stack.slice(0, -k);
  }

  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  return stack.join("") || "0";
};
