var maximumBags = function (capacity, rocks, additionalRocks) {
  for (let i = 0; i < capacity.length; i++) {
    capacity[i] -= rocks[i];
  }

  let count = -1;

  capacity.sort((a, b) => a - b);

  for (let i = 0; i < capacity.length; i++) {
    if (capacity[i] === 0) continue;

    if (capacity[i] > additionalRocks) {
      count = i;
      break;
    } else if (capacity[i] === additionalRocks) {
      count = i + 1;
      break;
    } else {
      additionalRocks -= capacity[i];
      capacity[i] = 0;
    }
  }

  if (count === -1 && capacity[0] > 0) return 0;
  if (count == -1 && capacity[0] === 0) return capacity.length;
  return count;
};
