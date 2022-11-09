var buddyStrings = function (s, goal) {
  if (s.length !== goal.length || s.length === 1) {
    return false;
  }

  if (s === goal) {
    let set = new Set(Array.from(s));
    if (set.size === s.length) {
      return false;
    } else {
      return true;
    }
  }

  let pointerA = -1;
  let pointerB = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === goal[i]) {
      continue;
    }

    if (pointerA === -1) {
      pointerA = i;
      continue;
    }

    if (pointerB === -1) {
      pointerB = i;
    }

    if (pointerA !== -1 && pointerB !== -1) {
      break;
    }
  }

  let stringArr = Array.from(s);
  [stringArr[pointerA], stringArr[pointerB]] = [
    stringArr[pointerB],
    stringArr[pointerA],
  ];

  if (stringArr.join("") === goal) {
    return true;
  } else {
    return false;
  }
};

// two pointer로 양쪽에서 시작하여 바꿀 글자 찾을 수도 있음

// while (l < n & s[l] === goal[l]) l++;
// while (r >= 0 && s[r] === goal[r]) r--;
// if (l < r) swap(s[l], s[r]);
