var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// w/o using built-in fn.

var strStr = function (haystack, needle) {
  const hayLength = haystack.length;
  const needleLength = needle.length;

  for (let i = 0; i <= hayLength - needleLength; i++) {
    const candidate = haystack.slice(i, i + needleLength);

    if (candidate === needle) return i;
  }

  return -1;
};
