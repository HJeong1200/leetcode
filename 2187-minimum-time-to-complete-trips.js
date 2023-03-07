var minimumTime = function (time, totalTrips) {
  let right = findMaxTime(time, totalTrips);
  let left = 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    const curTrips = time.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (curTrips >= totalTrips) right = mid;
    else left = mid + 1;
  }

  return left;
};

const findMaxTime = (time, totalTrips) => {
  let max = 0;

  for (let i = 0; i < time.length; i++) {
    max = Math.max(max, time[i]);
  }

  return Math.ceil(totalTrips * max);
};
