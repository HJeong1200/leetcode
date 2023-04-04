var partitionString = function (s) {
  let substrings = 1;
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      substrings++;
      set = new Set();
    }

    set.add(s[i]);
  }

  return substrings;
};
