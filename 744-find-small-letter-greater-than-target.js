var nextGreatestLetter = function (letters, target) {
  for (let el of letters) {
    if (el > target) return el;
  }

  return letters[0];
};

// letters 배열이 non-decrasing order으로 정렬되어 있으므로 binary search 사용 가능

var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return letters[left] > target ? letters[left] : letters[0];
};
