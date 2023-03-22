var minScore = function (n, roads) {
  const list = createList(n, roads);
  const visited = Array(n).fill(0);
  visited[0] = 1;
  const queue = [0];
  let score = Infinity;

  while (queue.length) {
    const start = queue.pop();
    const roads = list[start];

    for (let end in roads) {
      score = Math.min(score, roads[end]);

      if (!visited[end]) {
        visited[end] = 1;
        queue.push(end);
      }
    }
  }

  return score;
};

const createList = (n, roads) => {
  const list = {};

  for (let road of roads) {
    const [start, end, distance] = road;

    if (!list[start - 1]) list[start - 1] = {};
    if (!list[end - 1]) list[end - 1] = {};

    list[start - 1][end - 1] = distance;
    list[end - 1][start - 1] = distance;
  }

  return list;
};
