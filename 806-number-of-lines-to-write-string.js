var numberOfLines = function (widths, s) {
  let length = 0;
  let lines = 1;

  for (let el of s) {
    length += widths[el.charCodeAt() - 97];
    if (length > 100) {
      lines++;
      length = 0;
      length += widths[el.charCodeAt() - 97];
    }
  }

  return [lines, length];
};

// Refactoring

var numberOfLines = function (widths, s) {
  let length = 0;
  let lines = 1;

  for (let el of s) {
    length += widths[el.charCodeAt() - 97];
    if (length > 100) {
      lines++;
      length = widths[el.charCodeAt() - 97];
    }
  }

  return [lines, length];
};
