var mergeAlternately = function (word1, word2) {
  let pointer = 0;
  let result = "";

  while (pointer < Math.min(word1.length, word2.length)) {
    result += word1[pointer];
    result += word2[pointer];

    pointer++;
  }

  if (pointer < word1.length) result += word1.slice(pointer);
  if (pointer < word2.length) result += word2.slice(pointer);

  return result;
};
