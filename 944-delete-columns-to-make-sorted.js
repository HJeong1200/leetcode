var minDeletionSize = function (strs) {
  let count = 0;

  for (let i = 0; i < strs[0].length; i++) {
    let word = [];
    for (let j = 0; j < strs.length; j++) {
      word.push(strs[j][i]);
    }

    if (word.join("") !== word.slice().sort().join("")) {
      count++;
    }
  }

  return count;
};

var minDeletionSize = function (strs) {
  let count = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] > strs[j][i]) {
        count++;
        break;
      }
    }
  }

  return count;
};
