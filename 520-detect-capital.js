var detectCapitalUse = function (word) {
  let upper = word.toUpperCase();
  let lower = word.toLowerCase();
  let first = word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (word === upper || word === lower || word === first) {
    return true;
  }

  return false;
};

var detectCapitalUse = function (word) {
  const first = word[0];
  const rest = word.slice(1).split("");

  if (first === word[0].toUpperCase()) {
    if (
      rest.every((el) => el === el.toUpperCase()) ||
      rest.every((el) => el === el.toLowerCase())
    )
      return true;
    return false;
  } else {
    if (rest.every((el) => el === el.toLowerCase())) return true;
    return false;
  }
};
