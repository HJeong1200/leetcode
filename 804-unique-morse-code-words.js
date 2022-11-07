var uniqueMorseRepresentations = function (words) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let result = new Set();

  for (let word of words) {
    let morseStr = "";
    for (let el of word) {
      morseStr += morse[el.charCodeAt() - 97];
    }
    result.add(morseStr);
  }

  return result.size;
};
