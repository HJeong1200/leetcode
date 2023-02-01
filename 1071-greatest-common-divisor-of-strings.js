var gcdOfStrings = function (str1, str2) {
  const [shortWord, longWord] =
    str1.length <= str2.length ? [str1, str2] : [str2, str1];
  const short = shortWord.length;
  const long = longWord.length;
  let divisor = 1;

  while (divisor <= short) {
    if (Math.floor(short / divisor) !== short / divisor) {
      divisor++;
      continue;
    }

    const gcd = shortWord.slice(0, short / divisor);

    if (Math.floor(long / gcd.length) !== long / gcd.length) {
      divisor++;
      continue;
    }

    const repeat = long / gcd.length;

    if (gcd.repeat(repeat) === longWord && gcd.repeat(divisor) === shortWord)
      return gcd;

    divisor++;
  }

  return "";
};
