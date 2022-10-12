var deleteDuplicates = function (head) {
  let curNode = head;

  if (!curNode) {
    return head;
  }

  while (curNode.next) {
    if (curNode.val === curNode.next.val) {
      curNode.next = curNode.next.next;
    } else {
      curNode = curNode.next;
    }
  }

  return head;
};
