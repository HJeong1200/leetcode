var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const answer = new Array(n).fill(-1);
  answer[0] = 0;

  const redEdgesList = new Map();
  const blueEdgesList = new Map();

  redEdgesList.set("visited", new Set());
  blueEdgesList.set("visited", new Set());
  redEdgesList.set("next", blueEdgesList);
  blueEdgesList.set("next", redEdgesList);

  createEdges(redEdges, redEdgesList);
  createEdges(blueEdges, blueEdgesList);

  let queue = [];

  if (redEdgesList.has(0)) {
    for (let node of redEdgesList.get(0)) {
      queue.push([node, blueEdgesList, 1]);
    }
  }
  if (blueEdgesList.has(0)) {
    for (let node of blueEdgesList.get(0)) {
      queue.push([node, redEdgesList, 1]);
    }
  }

  while (queue.length) {
    const [curNode, nextList, distance] = queue.shift();

    if (nextList.get("visited").has(curNode)) continue;

    nextList.get("visited").add(curNode);

    if (answer[curNode] === -1) answer[curNode] = distance;

    if (nextList.has(curNode)) {
      for (let node of nextList.get(curNode)) {
        queue.push([node, nextList.get("next"), distance + 1]);
      }
    }
  }

  return answer;
};

const createEdges = (edges, list) => {
  for (let i = 0; i < edges.length; i++) {
    const [node, connection] = edges[i];

    if (!list.has(node)) list.set(node, []);

    list.set(node, [...list.get(node), connection]);
  }

  return list;
};
