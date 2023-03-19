var WordDictionary = function () {
  this.dictionary = [];
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.dictionary.push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  for (let el of this.dictionary) {
    if (el.length !== word.length) continue;

    let result = true;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === ".") continue;

      if (word[i] !== el[i]) {
        result = false;
        break;
      }
    }

    if (result) return true;
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Trie 사용
// wildcard는 DFS로 일치하는 항목이 있는지 확인
