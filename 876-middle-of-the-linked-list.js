var middleNode = function (head) {
  let curNode = head;
  let midNode = head;

  let counter = true;

  while (curNode.next) {
    if (counter) {
      curNode = curNode.next;
      midNode = midNode.next;
      counter = !counter;
    } else {
      curNode = curNode.next;
      counter = !counter;
    }
  }

  return midNode;
};

var middleNode = function (head) {
  let curNode = head;
  let midNode = head;

  while (curNode && curNode.next) {
    curNode = curNode.next.next;
    midNode = midNode.next;
  }

  return midNode;
};

// 221205 ver.

var middleNode = function (head) {
  let count = 0;
  let curNode = head;

  function traverse(node) {
    if (!node) return;

    count++;
    traverse(node.next);
  }

  traverse(curNode);

  let mid = Math.floor(count / 2) + 1;
  curNode = head;

  while (mid > 1) {
    curNode = curNode.next;
    mid--;
  }

  return curNode;
};
