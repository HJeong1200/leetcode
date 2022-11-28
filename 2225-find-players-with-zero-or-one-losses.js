var findWinners = function (matches) {
  let matchStatus = [];
  let result = [[], []];

  for (let match of matches) {
    const [winner, loser] = match;

    if (!matchStatus[winner] || matchStatus[winner] > 0)
      matchStatus[winner] = 1;

    if (matchStatus[loser] === -1) {
      matchStatus[loser]--;
    }

    if (!matchStatus[loser] || matchStatus[loser] > 0) matchStatus[loser] = -1;
  }

  for (let i = 0; i < matchStatus.length; i++) {
    if (!matchStatus[i]) continue;
    if (matchStatus[i] === 1) result[0].push(i);
    if (matchStatus[i] === -1) result[1].push(i);
  }

  return result;
};

// using Map

var findWinners = function (matches) {
  let matchStatus = new Map();
  let result = [[], []];

  for (let match of matches) {
    const [winner, loser] = match;

    if (!matchStatus.has(winner)) matchStatus.set(winner, { win: 0, lose: 0 });
    let updateWin = matchStatus.get(winner);
    updateWin.win++;
    matchStatus.set(winner, updateWin);

    if (!matchStatus.has(loser)) matchStatus.set(loser, { win: 0, lose: 0 });
    let updateLose = matchStatus.get(loser);
    updateLose.lose++;
    matchStatus.set(loser, updateLose);
  }

  for (let status of matchStatus) {
    if (status[1].win > 0 && status[1].lose === 0) result[0].push(status[0]);
    if (status[1].lose === 1) result[1].push(status[0]);
  }
  result[0].sort((a, b) => a - b);
  result[1].sort((a, b) => a - b);

  return result;
};
