var fib = function (n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

// Memoization 이용

var fib = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let prevPrev = 0;
  let prev = 1;
  let counter = 2;

  function findFib(n) {
    let current = prev + prevPrev;

    if (counter === n) {
      return current;
    }

    [prevPrev, prev] = [prev, current];
    counter++;

    return findFib(n);
  }

  return findFib(n);
};
