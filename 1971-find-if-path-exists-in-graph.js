var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;

  const visited = new Set([source]);

  for (let node of visited) {
    for (let edge of edges) {
      if (edge.includes(node) && edge.includes(destination)) return true;
      if (edge.includes(node) && !visited.has(edge[0])) visited.add(edge[0]);
      if (edge.includes(node) && !visited.has(edge[1])) visited.add(edge[1]);
    }
  }

  return false;
};
