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
