var combine = function (n, k) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return getCombination(arr, k);
};

function getCombination(arr, num) {
  const result = [];

  if (num === 1) return arr.map((el) => [el]);

  for (let i = 0; i < arr.length; i++) {
    const sliced = arr.slice(i + 1);
    const combination = getCombination(sliced, num - 1);
    const attached = combination.map((el) => [arr[i], ...el]);
    result.push(...attached);
  }

  return result;
}

// backtracking
