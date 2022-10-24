var detectCapitalUse = function (word) {
  let upper = word.toUpperCase();
  let lower = word.toLowerCase();
  let first = word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (word === upper || word === lower || word === first) {
    return true;
  }

  return false;
};
