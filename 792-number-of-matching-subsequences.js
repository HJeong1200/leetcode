var numMatchingSubseq = function (s, words) {
  let result = 0;

  for (let word of words) {
    if (word.length > s.length) continue;

    let prev = s.indexOf(word[0]);

    if (word.length === 1 && prev !== -1) {
      result++;
      continue;
    }
    if (prev === -1) continue;

    for (let i = 1; i < word.length; i++) {
      const current = s.indexOf(word[i], prev + 1);

      if (current !== -1) {
        prev = current;
      } else {
        break;
      }

      if (i === word.length - 1) result++;
    }
  }

  return result;
};
