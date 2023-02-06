var findCircleNum = function (isConnected) {
  const n = isConnected.length;

  if (n === 1) return 1;

  let provinces = 0;
  const visited = Array(n).fill(0);
  const queue = [];

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    provinces++;
    visited[i] = 1;

    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j]) {
        queue.push(j);
      }
    }

    while (queue.length) {
      const nextCity = queue.shift();
      visited[nextCity] = 1;

      for (let j = 0; j < n; j++) {
        if (visited[j]) continue;

        if (isConnected[nextCity][j]) {
          queue.push(j);
        }
      }
    }
  }

  return provinces;
};
