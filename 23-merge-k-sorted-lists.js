var mergeKLists = function (lists) {
  const arr = [];

  for (let list of lists) {
    while (list) {
      arr.push(list.val);

      list = list.next;
    }
  }

  if (!arr.length) return null;

  arr.sort((a, b) => a - b);

  let curNode = new ListNode();
  const list = curNode;

  for (let i = 0; i < arr.length; i++) {
    curNode.val = arr[i];

    if (i !== arr.length - 1) {
      curNode.next = new ListNode();
      curNode = curNode.next;
    }
  }

  return list;
};
