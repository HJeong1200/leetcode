var repeatedStringMatch = function (a, b) {
  if (b === "") return 0;

  let repeat = Infinity;
  let aIndices = findStartIndex(a, b);

  for (aIdx of aIndices) {
    let curRepeat = 1;
    let isMatch = true;
    let curIdx = aIdx + 1;

    for (let i = 1; i < b.length; i++) {
      if (curIdx === a.length) {
        curRepeat++;
        curIdx = 0;
      }

      if (a[curIdx] !== b[i]) {
        isMatch = false;
        break;
      }

      curIdx++;
    }

    if (isMatch) repeat = Math.min(curRepeat, repeat);
  }

  return repeat === Infinity ? -1 : repeat;
};

const findStartIndex = (a, b) => {
  const arr = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[0]) arr.push(i);
  }

  return arr;
};

// a를 repeat한 str.length >= b.length일때까지 str을 더한 후 한번 확인
// 여기에서 답이 나오지 않으면 a를 한번 더 더한 후 확인
// a를 한번 더 더하는 이유는 모든 a의 요소에 대해서 b와 일치하는지 확인해야 하기 때문
// 각각의 a의 요소부터 시작한 substring에 대하여 b가 없다는 것을 확인했다면 a를 아무리 추가해도 b가 될 수 없음

var repeatedStringMatch = function (a, b) {
  if (b === "") return 0;

  let repeat = 1;
  let str = a;

  while (str.length < b.length) {
    str += a;
    repeat++;
  }

  if (str.indexOf(b) !== -1) return repeat;

  str += a;
  repeat++;

  if (str.indexOf(b) !== -1) return repeat;

  return -1;
};
