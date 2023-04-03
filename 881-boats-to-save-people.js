var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let boats = 0;

  let right = people.length - 1;
  let left = 0;

  while (left <= right) {
    while (right > left && people[left] + people[right] > limit) {
      right--;
      boats++;
    }

    if (left === right) {
      boats++;
      break;
    }

    left++;
    right--;
    boats++;
  }

  return boats;
};
