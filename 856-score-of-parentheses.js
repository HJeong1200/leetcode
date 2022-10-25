var scoreOfParentheses = function (s) {
  let stack = [];
  let score = 0;

  for (let i = 0; i < s.length; i++) {
    let prev = s[i - 1];
    let multiplier = 0;

    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length && prev !== s[i]) {
        multiplier = stack.length - 1;
        stack.pop();
        score += 2 ** multiplier;
      }

      if (stack.length && prev === s[i]) {
        stack.pop();
      }
    }
  }

  return score;
};
