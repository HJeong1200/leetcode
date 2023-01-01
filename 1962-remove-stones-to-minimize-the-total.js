// TLE

var minStoneSum = function (piles, k) {
  for (let i = 1; i <= k; i++) {
    piles.sort((a, b) => a - b);

    piles = remove(piles);
  }

  return piles.reduce((acc, cur) => acc + cur, 0);
};

function remove(arr) {
  const last = arr.length - 1;

  arr[last] -= Math.floor(arr[last] / 2);

  return arr;
}

// Max Priority Queue를 써야 한다..
