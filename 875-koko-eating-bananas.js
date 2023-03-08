var minEatingSpeed = function (piles, h) {
  let right = Math.max(...piles);
  if (piles.length === h) return right;
  let left = 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canEatAllBananasInTime(piles, h, mid)) right = mid;
    else left = mid + 1;
  }

  return left;
};

const canEatAllBananasInTime = (piles, h, speed) => {
  const time = piles.reduce((acc, cur) => acc + Math.ceil(cur / speed), 0);

  return time <= h;
};
