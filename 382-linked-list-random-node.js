var Solution = function (head) {
  const arr = [];

  if (!head) return arr;

  while (head) {
    arr.push(head.val);

    head = head.next;
  }

  this.arr = arr;
};

Solution.prototype.getRandom = function () {
  const arr = this.arr;
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};

// 만약 constant space로 모집단 크기를 모르는 상태에서 랜덤하게 추출하려면?
// -> reservoir sampling: 모집단을 순회하면서 (1 / 현재까지 순회한 값)의 확률로 저수지에 추가할 지 결정
