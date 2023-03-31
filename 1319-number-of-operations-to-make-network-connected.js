var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;

  const adjList = createAdjList(connections);
  const visited = Array(n).fill(0);
  const queue = [];
  let connectedNodes = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    queue.push(i);
    visited[i] = 1;
    connectedNodes++;

    while (queue.length) {
      const nextNode = queue.shift();
      const links = adjList.get(nextNode) || [];

      for (let node of links) {
        if (!visited[node]) queue.push(node);
        visited[node] = 1;
      }
    }
  }

  return connectedNodes - 1;
};

const createAdjList = (connections) => {
  const adjList = new Map();

  for (let connection of connections) {
    const [start, end] = connection;

    if (!adjList.has(start)) adjList.set(start, []);
    if (!adjList.has(end)) adjList.set(end, []);

    adjList.get(start).push(end);
    adjList.get(end).push(start);
  }

  return adjList;
};
