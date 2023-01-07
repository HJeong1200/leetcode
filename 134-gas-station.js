var canCompleteCircuit = function (gas, cost) {
  const route = [...gas.slice(), ...gas.slice()];
  const routeCost = [...cost.slice(), ...cost.slice()];

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] < cost[i]) continue;
    let tank = gas[i];

    for (let j = i + 1; j <= i + gas.length; j++) {
      tank = tank - routeCost[j - 1];

      if (j === i + gas.length && tank >= 0) return i;
      if (tank < 0) break;

      tank += route[j];
    }
  }

  return -1;
};

// faster

var canCompleteCircuit = function (gas, cost) {
  if (
    gas.reduce((acc, cur) => acc + cur) < cost.reduce((acc, cur) => acc + cur)
  )
    return -1;

  let answer = 0;
  let tank = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];

    if (tank < 0) {
      answer = i + 1;
      tank = 0;
    }
  }

  return answer;
};
