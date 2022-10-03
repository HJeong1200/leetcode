var lengthOfLastWord = function (s) {
  s = s.trim();
  let start = s.lastIndexOf(" ") + 1;
  return s.length - start;
};
