var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1 || flowerbed[i - 1] === 1 || flowerbed[i + 1] === 1)
      continue;

    n--;
    flowerbed[i] = 1;

    if (n === 0) return true;
  }

  return false;
};
