var countSegments = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let counter = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === " " && s[i - 1] !== " ") {
      counter++;
    }
  }

  if (s[s.length - 1] !== " ") {
    return counter + 1;
  } else {
    return counter;
  }
};
