var numTrees = function (n) {
  const result = [1, 1];

  for (let i = 2; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= Math.ceil(i / 2); j++) {
      count += result[i - j] * result[j - 1] * 2;
    }

    if (i % 2 === 1) count -= result[Math.floor(i / 2)] ** 2;

    result.push(count);
  }

  return result[result.length - 1];
};
