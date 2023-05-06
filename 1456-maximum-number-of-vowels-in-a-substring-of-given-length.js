var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let max = 0;
  let localMax = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) localMax++;
  }

  max = Math.max(localMax, max);

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) localMax++;
    if (vowels.has(s[i - k])) localMax--;

    max = Math.max(localMax, max);
  }

  return max;
};
