var detectCycle = function (head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      while (head !== slow) {
        head = head.next;
        slow = slow.next;
      }

      return head;
    }
  }

  return null;
};

/**
 * slow = 1턴에 1칸씩 움직이는 포인터
 * fast = 1턴에 2칸씩 움직이는 포인터
 *
 * x = head에서 Cycle 시작까지의 거리
 * C = Cycle의 길이
 * y = Cycle 내부에서 slow와 fast가 만나기까지의 거리
 *
 * while문을 탈출하면 Cycle이 존재하지 않는다 => return null
 * fast === slow인 경우 fast가 움직인 길이 = 2(x + y) = x + y + nC
 * x + y = nC, x = nC - y = (n - 1)C + (C - y)
 *  => slow포인터가 x만큼 움직이면 사이클의 시작점에 도착하게 된다
 */
