var halvesAreAlike = function (s) {
  const half = Math.floor((s.length - 1) / 2);
  const front = s.slice(0, half + 1);
  const back = s.slice(half + 1);

  const frontCount = checkVowels(front);
  const backCount = checkVowels(back);

  return frontCount === backCount ? true : false;
};

const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

const checkVowels = (arr) => {
  let count = 0;

  for (let char of arr) {
    if (vowels.has(char)) count++;
  }

  return count;
};
