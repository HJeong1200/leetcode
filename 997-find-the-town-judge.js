var findJudge = function (n, trust) {
  let hashMap = new Map();

  if (n > 1 && trust.length === 0) return -1;

  for (let el of trust) {
    if (!hashMap.has(el[0])) {
      hashMap.set(el[0], []);
    }
    let arr = hashMap.get(el[0]);
    arr.push(el[1]);
    hashMap.set(el[0], arr);
  }

  let judge = -1;

  if (hashMap.size !== n - 1) {
    return judge;
  }

  for (let i = 1; i <= n; i++) {
    if (!hashMap.get(i) && everybodyTrusts(hashMap, i)) {
      judge = i;
    }
  }

  return judge;
};

function everybodyTrusts(map, i) {
  for (let el of map.values()) {
    if (!el.includes(i)) return false;
  }

  return true;
}

/**
 *
 * Graph in-degree & out-degree
 *
 * judge가 되기 위한 조건: trust[0]에 없어야 하며, trust[1]에 n - 1번 있어야 함
 * trust[0]에 있는 사람의 count--, trust[1]에 있는 사람의 count++ 한다
 * 결과가 n - 1인 사람이 있나 확인한다
 *
 */

var findJudge = function (n, trust) {
  let status = Array(n + 1).fill(0);

  for (let el of trust) {
    status[el[0]]--;
    status[el[1]]++;
  }

  for (let i = 1; i < status.length; i++) {
    if (status[i] === n - 1) return i;
  }

  return -1;
};
