var possibleBipartition = function (n, dislikes) {
  if (n === 1) return true;
  if (!dislikes.length) return true;

  const map = new Map();
  const arr = Array(n + 1).fill(0);

  for (let dislike of dislikes) {
    const [x, y] = dislike;

    if (!map.has(x)) map.set(x, []);
    if (!map.has(y)) map.set(y, []);

    map.set(x, [...map.get(x), y]);
    map.set(y, [...map.get(y), x]);
  }

  for (let i = 1; i <= n; i++) {
    if (!arr[i]) {
      if (!color(i, arr, map)) return false;
    }
  }

  return true;
};

const color = function (i, arr, map) {
  const queue = [i];

  arr[i] = 1;

  while (queue.length) {
    let node = queue.pop();

    for (let el of map.get(node) || []) {
      if (arr[el] === arr[node]) return false;
      if (!arr[el]) {
        arr[el] = arr[node] * -1;
        queue.push(el);
      }
    }
  }

  return true;
};
