var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (let el of arr) {
    if (!map.has(el)) {
      map.set(el, 0);
    }

    let num = map.get(el) + 1;

    map.set(el, num);
  }

  const values = [...map.values()];

  for (let count of values) {
    if (values.indexOf(count) !== values.lastIndexOf(count)) return false;
  }

  return true;
};

// using set

var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (let el of arr) {
    if (!map.has(el)) {
      map.set(el, 0);
    }

    let num = map.get(el) + 1;

    map.set(el, num);
  }

  const values = [...map.values()];
  const set = new Set(values);

  return values.length === set.size ? true : false;
};
