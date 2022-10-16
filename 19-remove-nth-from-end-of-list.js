var removeNthFromEnd = function (head, n) {
  let counter = n;

  let fast = head;
  let slow = head;

  while (counter > 0) {
    fast = fast.next;
    counter--;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};
