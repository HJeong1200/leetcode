var Trie = function () {
  this.words = [];
  this.wordsSet = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.words.push(word);
  this.wordsSet.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.wordsSet.has(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!this.words.length) return false;
  if (this.wordsSet.has(prefix)) return true;

  for (let word of this.wordsSet) {
    if (word.indexOf(prefix) === 0) return true;
  }

  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
