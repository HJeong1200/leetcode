var mergeTwoLists = function (list1, list2) {
  let curNode = { value: 0, next: undefined };
  let merged = curNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curNode.next = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      list2 = list2.next;
    }
    curNode = curNode.next;
  }
  curNode.next = list1 || list2;

  return merged.next;
};

// list1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };

// list2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };

/**
 * Linked List
 *      새로운 merged List를 만든다
 *      현재 노드를 확인하는 curNode를 만든다
 *
 *      List1과 List2가 확인되는 동안 반복문을 돌린다
 *          두 리스트 중 val의 값이 작은 리스트를 curNode에 연결한다
 *          curNode = curNode.next로 넘어간다
 *
 *      비교할 리스트가 없으면 curNode.next는 둘 중 남아있는 리스트를 가리키고, merged list를 리턴한다
 */

// curNode.next = list1.val로 넣지 않는 이유는 curNode.next는 객체로 이어야 하기 때문.
