const numMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  let result = [];

  if (digits.length === 0) return [];
  if (digits.length === 1) return numMap[String(digits)];

  function helper(num, word) {
    if (num === digits.length) {
      result.push(word);
      return;
    }

    for (let el of numMap[String(digits[num])]) {
      let newWord = word + el;
      helper(num + 1, newWord);
    }
  }

  helper(0, "");

  return result;
};
