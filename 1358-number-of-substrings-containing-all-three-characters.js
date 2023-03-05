var numberOfSubstrings = function (s) {
  let result = 0;
  let lastA = -1;
  let lastB = -1;
  let lastC = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") lastA = i;
    if (s[i] === "b") lastB = i;
    if (s[i] === "c") lastC = i;

    if (lastA >= 0 && lastB >= 0 && lastC >= 0)
      result += Math.min(lastA, lastB, lastC) + 1;
  }

  return result;
};
