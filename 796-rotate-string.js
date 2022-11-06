var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  s += s;
  return s.includes(goal) ? true : false;
};

// rotate이기 때문에 length 조건을 넣어야 함
