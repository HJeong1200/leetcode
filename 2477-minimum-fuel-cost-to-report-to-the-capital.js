// using BFS

var minimumFuelCost = function (roads, seats) {
  if (roads.length === 0) return 0;

  let fuels = 0;
  const degrees = Array(roads.length + 1).fill(0);
  const adjList = createAdjList(roads, degrees);
  const queue = [];
  const reps = Array(roads.length + 1).fill(1);

  for (let i = 1; i < degrees.length; i++) {
    if (degrees[i] === 1) queue.push(i);
  }

  while (queue.length) {
    const city = queue.shift();

    fuels += Math.ceil(reps[city] / seats);

    for (let node of adjList.get(city)) {
      degrees[node]--;

      reps[node] += reps[city];

      if (degrees[node] === 1 && node !== 0) {
        queue.push(node);
      }
    }
  }

  return fuels;
};

const createAdjList = (edges, degrees) => {
  const list = new Map();

  for (let edge of edges) {
    const [curNode, nextNode] = edge;
    if (!list.has(curNode)) list.set(curNode, []);
    if (!list.has(nextNode)) list.set(nextNode, []);

    list.get(curNode).push(nextNode);
    list.get(nextNode).push(curNode);

    degrees[curNode]++;
    degrees[nextNode]++;
  }

  return list;
};

// using DFS

var minimumFuelCost = function (roads, seats) {
  if (roads.length === 0) return 0;

  let fuels = 0;
  const adjList = createAdjList(roads);

  dfs(0, -1, adjList, seats);

  function dfs(node, parent, adjList, seats) {
    let reps = 1;

    for (let child of adjList.get(node)) {
      if (child !== parent) {
        reps += dfs(child, node, adjList, seats);
      }
    }

    if (node !== 0) {
      fuels += Math.ceil(reps / seats);
    }

    return reps;
  }

  return fuels;
};
