var findKthPositive = function (arr, k) {
  const set = new Set(arr);
  let count = 0;
  let i = 1;

  while (count < k) {
    if (!set.has(i)) count++;
    if (count === k) return i;

    i++;
  }
};
