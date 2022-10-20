var checkIfPangram = function (sentence) {
  let map = new Map();
  let size = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (!map.has(sentence[i])) {
      map.set(sentence[i], 1);
      size++;
    }
  }

  if (size === 26) {
    return true;
  } else {
    return false;
  }
};

/**
 * Use Set instead of Map!!
 */

var checkIfPangram = function (sentence) {
  let set = new Set();
  for (let i = 0; i < sentence.length; i++) {
    set.add(sentence[i]);
    if (set.size === 26) {
      return true;
    }
  }

  return false;
};

