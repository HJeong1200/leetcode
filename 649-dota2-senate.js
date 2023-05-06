var predictPartyVictory = function (senate) {
  if (senate.length === 1) {
    if (senate[0] === "R") return "Radiant";
    else return "Dire";
  }

  let Radiant = 0;
  let Dire = 0;
  let round = 0;

  while (Dire < senate.length && Radiant < senate.length) {
    if (round >= senate.length) round = 0;

    if (senate[round] === "R") {
      if (Radiant === 0) {
        Dire++;
        round++;
      } else {
        senate = senate.slice(0, round) + senate.slice(round + 1);
        Radiant--;
      }
    } else {
      if (Dire === 0) {
        Radiant++;
        round++;
      } else {
        senate = senate.slice(0, round) + senate.slice(round + 1);
        Dire--;
      }
    }
  }

  return Radiant > Dire ? "Dire" : "Radiant";
};
