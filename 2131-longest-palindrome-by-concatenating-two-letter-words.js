var longestPalindrome = function (words) {
  let map = new Map();
  let length = 0;

  for (let i = 0; i < words.length; i++) {
    let reversed = words[i][1] + words[i][0];

    if (map.has(reversed)) {
      map.get(reversed).pop();
      if (map.get(reversed).length === 0) {
        map.delete(reversed);
      }
      length += 4;
      continue;
    }

    if (!map.has(words[i])) {
      map.set(words[i], [i]);
    } else {
      map.get(words[i]).push(i);
    }
  }

  for (let el of map.keys()) {
    if (el[0] === el[1]) {
      length += 2;
      return length;
    }
  }

  return length;
};
