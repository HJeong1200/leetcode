// using stack

var backspaceCompare = function (s, t) {
  let resultS = "";
  let resultT = "";

  let stack = [];

  for (let char of s) {
    if (stack.length && char === "#") {
      stack.pop();
    }

    if (char !== "#") {
      stack.push(char);
    }
  }

  resultS = stack.join("");
  stack = [];

  for (let char of t) {
    if (stack.length && char === "#") {
      stack.pop();
    }

    if (char !== "#") {
      stack.push(char);
    }
  }

  resultT = stack.join("");

  return resultS === resultT ? true : false;
};

// using slice

var backspaceCompare = function (s, t) {
  let resultS = "";
  let resultT = "";

  for (let char of s) {
    if (char !== "#") {
      resultS += char;
    }

    if (char === "#" && resultS) {
      resultS = resultS.slice(0, resultS.length - 1);
    }
  }

  for (let char of t) {
    if (char !== "#") {
      resultT += char;
    }

    if (char === "#" && resultT) {
      resultT = resultT.slice(0, resultT.length - 1);
    }
  }

  return resultS === resultT ? true : false;
};
