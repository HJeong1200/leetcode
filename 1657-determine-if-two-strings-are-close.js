var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  let word1Map = mapWords(word1);
  let word2Map = mapWords(word2);

  let word1Value = Object.values(word1Map);
  let word2Value = Object.values(word2Map);

  for (let char in word1Map) {
    if (!word2Map[char]) return false;
  }

  for (let value of word1Value) {
    let index = word2Value.indexOf(value);

    if (index !== -1) {
      word2Value.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

function mapWords(word) {
  const map = {};

  for (let char of word) {
    if (!map[char]) map[char] = 0;
    map[char]++;
  }

  return map;
}

// 함수 정리

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  let word1Map = mapWords(word1);
  let word2Map = mapWords(word2);

  if (!checkSameElements(word1Map, word2Map)) return false;

  let word1Value = Object.values(word1Map);
  let word2Value = Object.values(word2Map);

  if (!checkValues(word1Value, word2Value)) return false;

  return true;
};

function mapWords(word) {
  const map = {};

  for (let char of word) {
    if (!map[char]) map[char] = 0;
    map[char]++;
  }

  return map;
}

function checkSameElements(obj1, obj2) {
  for (let el in obj1) {
    if (!obj2[el]) return false;
  }

  return true;
}

function checkValues(value1, value2) {
  for (let value of value1) {
    let index = value2.indexOf(value);

    if (index !== -1) {
      value2.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}
