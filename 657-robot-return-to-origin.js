var judgeCircle = function (moves) {
  let position = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        position[1]++;
        break;
      case "D":
        position[1]--;
        break;
      case "L":
        position[0]--;
        break;
      case "R":
        position[0]++;
        break;
    }
  }

  if (position[0] === 0 && position[1] === 0) {
    return true;
  } else {
    return false;
  }
};
