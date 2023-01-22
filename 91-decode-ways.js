var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  if (s.length === 1) return 1;

  const arr = Array(s.length + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i < arr.length; i++) {
    const oneDigit = Number(s.slice(i - 1, i));
    const twoDigits = Number(s.slice(i - 2, i));

    if (oneDigit >= 1 && oneDigit <= 9) arr[i] += arr[i - 1];
    if (twoDigits >= 10 && twoDigits <= 26) arr[i] += arr[i - 2];
  }

  return arr[arr.length - 1];
};
