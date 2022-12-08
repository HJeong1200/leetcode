var addTwoNumbers = function (l1, l2) {
  let curNode = new ListNode();
  let result = curNode;

  let up = 0;

  while (l1 || l2) {
    if (!curNode.next) curNode.next = new ListNode();

    let val1 = 0;
    let val2 = 0;
    if (l1) val1 = l1.val;
    if (l2) val2 = l2.val;

    let curVal = val1 + val2 + up;
    if (curVal < 10) {
      curNode.next.val = curVal;
      up = 0;
    } else {
      curNode.next.val = curVal - 10;
      up = 1;
    }

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    curNode = curNode.next;
  }

  if (up === 1) {
    curNode.next = new ListNode();
    curNode = curNode.next;
    curNode.val = 1;
  }

  return result.next;
};

// refactor

var addTwoNumbers = function (l1, l2) {
  let curNode = new ListNode();
  let result = curNode;

  let up = 0;

  while (l1 || l2) {
    if (!curNode.next) curNode.next = new ListNode();

    let sum = up;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (curVal < 10) {
      curNode.next.val = sum;
      up = 0;
    } else {
      curNode.next.val = sum - 10;
      up = 1;
    }

    curNode = curNode.next;
  }

  if (up === 1) {
    curNode.next = new ListNode();
    curNode = curNode.next;
    curNode.val = 1;
  }

  return result.next;
};
