var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const queue = [];
  let dir = -1;

  queue.push(root);

  while (queue.length) {
    const arr = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (dir === 1) {
        arr.unshift(node.val);
      } else {
        arr.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    dir = dir * -1;
    result.push(arr);
  }

  return result;
};
