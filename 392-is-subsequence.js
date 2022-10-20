var isSubsequence = function (s, t) {
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[count]) {
      count++;
    }
  }

  if (count === s.length) {
    return true;
  } else {
    return false;
  }
};

// t를 반복문 돌면서 s[0]이 있는지 확인하고 있으면 s[++]
