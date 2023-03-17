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

// 이게 진짜 Trie!!

var Trie = function () {
  this.char = new Map();
  this.end = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curTrie = this;

  for (let str of word) {
    if (!curTrie.char.has(str)) curTrie.char.set(str, new Trie());

    curTrie = curTrie.char.get(str);
  }

  curTrie.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let curTrie = this;

  for (let str of word) {
    if (!curTrie.char.has(str)) return false;

    curTrie = curTrie.char.get(str);
  }

  return curTrie.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let curTrie = this;

  for (let str of prefix) {
    if (!curTrie.char.has(str)) return false;

    curTrie = curTrie.char.get(str);
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
