var wordBreak = function (s, wordDict) {
  let store = [];

  for (let word of wordDict) {
    let startIdx = s.indexOf(word);

    while (startIdx !== -1) {
      store.push([startIdx, startIdx + word.length]);
      startIdx = s.indexOf(word, startIdx + 1);
    }
  }

  store.sort((a, b) => a[0] - b[0]);

  const endIndexArr = [];

  for (let i = 0; i < store.length; i++) {
    if (store[i][0] === 0) {
      endIndexArr.push(store[i][1]);
      continue;
    }

    if (endIndexArr.includes(store[i][0])) {
      endIndexArr.push(store[i][1]);
    }
  }

  return endIndexArr.includes(s.length);
};

// Solution 2

var wordBreak = function (s, wordDict) {
  arr = Array(s.length + 1).fill(false);
  arr[0] = true;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue;

    for (let word of wordDict) {
      const candidate = s.slice(i, i + word.length);

      if (word === candidate && arr[i]) {
        arr[i + word.length] = true;
      }
    }
  }

  return arr[s.length];
};
