var hasGroupsSizeX = function (deck) {
  let partition = new Map();

  for (let card of deck) {
    if (!partition.has(card)) {
      partition.set(card, 0);
    }

    partition.set(card, partition.get(card) + 1);
  }

  let partitionedNum = [];
  let min = Infinity;

  for (let number of partition.values()) {
    partitionedNum.push(number);
    min = Math.min(number, min);
  }

  if (min === 1) {
    return false;
  }

  let minArr = [];

  for (let i = 2; i <= min; i++) {
    if (min % i === 0) {
      minArr.push(i);
    }
  }

  for (let i = 0; i < minArr.length; i++) {
    let result = partitionedNum.every((num) => {
      return num % minArr[i] === 0;
    });

    if (result) {
      return true;
    }
  }

  return false;
};

// refactor: min에 대하여 약수를 찾아서 베열에 넣고 그 배열에 대해 다시 반복문을 돌릴 필요 없이
// 2부터 min까지 반복문을 돌려서 시간 절약 가능

var hasGroupsSizeX = function (deck) {
  let partition = new Map();

  for (let card of deck) {
    if (!partition.has(card)) {
      partition.set(card, 0);
    }

    partition.set(card, partition.get(card) + 1);
  }

  let partitionedNum = [];
  let min = Infinity;

  for (let number of partition.values()) {
    partitionedNum.push(number);
    min = Math.min(number, min);
  }

  if (min === 1) {
    return false;
  }

  for (let i = 2; i <= min; i++) {
    if (
      partitionedNum.every((num) => {
        return num % i === 0;
      })
    ) {
      return true;
    }
  }

  return false;
};
