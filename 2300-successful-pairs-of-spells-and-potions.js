var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const answer = Array(spells.length).fill(0);

  for (let i = 0; i < spells.length; i++) {
    let left = 0;
    let right = potions.length - 1;

    if (potions[left] * spells[i] >= success) {
      answer[i] = potions.length;
      continue;
    }
    if (potions[right] * spells[i] < success) {
      answer[i] = 0;
      continue;
    }

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (potions[mid] * spells[i] < success) left = mid + 1;
      else right = mid;
    }

    answer[i] = potions.length - left;
  }

  return answer;
};
