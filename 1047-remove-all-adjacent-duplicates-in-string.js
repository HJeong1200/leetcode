var removeDuplicates = function (s) {
  let stack = [];

  for (let el of s) {
    let deleteWord = "";

    while (stack.length && stack[stack.length - 1] === el) {
      deleteWord = stack.pop();
    }

    if (deleteWord !== el) {
      stack.push(el);
    }
  }

  return stack.join("");
};
