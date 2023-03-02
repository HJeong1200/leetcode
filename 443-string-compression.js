var compress = function (chars) {
  if (chars.length === 1) return 1;

  let curChar = chars[0];
  let start = 0;
  let end = 0;

  for (let i = 1; i < chars.length; i++) {
    if (curChar === chars[i]) {
      end = i;
    } else {
      if (start !== end) {
        const num = end - start + 1;
        const str = String(num);

        chars.splice(start + 1, num - 1, ...str);
        i = i - num + 1 + str.length;
      }

      start = i;
      end = i;
      curChar = chars[i];
    }
  }

  if (start !== end) {
    const num = end - start + 1;
    chars.splice(start + 1, num - 1, ...String(num));
  }

  return chars.length;
};
