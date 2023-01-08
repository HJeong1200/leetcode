const c = (n, i) => {
  let child = 1;
  let parent = 1;

  for (let j = n - i; j > n - i - i; j--) {
    child *= j;
  }

  for (let j = 1; j <= i; j++) {
    parent *= j;
  }

  return child / parent;
};

var climbStairs = function (n) {
  let counter = 0;

  for (let i = 0; 2 * i <= n; i++) {
    counter += c(n, i);
  }

  return counter;
};

// n은 계단의 수
// iterate i
// 1계단 올라가는 one = n - 2 * i
// 2계단 올라가는 two = 2 * i

// 경우의 수 n - i C i

// 4C0, 3C1, 2C2

/**
 * 피보나치..??
 *
 * n번째 계단으로 가는 방법:
 *      n-1번째 계단에서 1칸 올라간다
 *      n-2번째 계단에서 2칸 올라간다
 *
 * n번째 계단으로 올라가는 모든 경우의 수
 *  =   n-1번째 계단으로 가는 모든 경우의 수
 *  +   n-2번째 계단으로 가는 모든 경우의 수
 *
 * ...
 *
 * 3번째 계단으로 올라가는 모든 경우의 수
 *  =   2번째 계단으로 가는 모든 경우의 수
 *  +   1번째 계단으로 가는 모든 경우의 수
 *
 * => 피보나치 수열이네!
 *
 */

var climbStairs = function (n) {
  let base = 1;
  let result = 1;

  for (let i = 1; i < n; i++) {
    [result, base] = [base + result, result];
  }

  return result;
};

var climbStairs = function (n) {
  if (n <= 2) return n;

  const stairs = Array(n + 1).fill(1);
  stairs[2] = 2;

  for (let i = 3; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2];
  }

  return stairs[n];
};
