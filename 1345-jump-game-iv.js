// hash를 써서 key는 값, value는 index를 저장
// arr[0] = 0, arr[1] = 1
// queue를 쓴다
// visited로 이미 방문한 인덱스는 queue에 추가되지 않도록 한다
// arr[0]의 값과 동일한 값을 가진 인덱스들에 1을 넣고, 그 앞과 뒤를 queue에 추가, arr[1]도 queue에 추가
// queue에서 하나씩 빼면서..

var minJumps = function (arr) {
  if (arr.length <= 1) return arr.length - 1;
  if (arr[0] === arr[arr.length - 1]) return 1;

  const map = getHashMap(arr);
  const visited = new Set();
  const queue = [];
  const resultArr = Array(arr.length).fill(Infinity);

  queue.push([0, 0]);

  while (queue.length) {
    const [index, distance] = queue.shift();

    resultArr[index] = Math.min(resultArr[index], distance);

    const next = getNextArr(arr, map, visited, index);
    map.delete(arr[index]);

    for (let i = 0; i < next.length; i++) {
      if (visited.has(next[i]) || next[i] < 0 || next[i] >= arr.length)
        continue;

      visited.add(next[i]);
      queue.push([next[i], distance + 1]);
    }
  }

  return resultArr[arr.length - 1];
};

const getHashMap = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], []);

    map.get(arr[i]).push(i);
  }

  return map;
};

const getNextArr = (arr, map, visited, index) => {
  const next = [];

  if (!visited.has(index + 1)) next.push(index + 1);
  if (!visited.has(index - 1)) next.push(index - 1);

  if (map.has(arr[index])) {
    for (let idx of map.get(arr[index])) {
      if (visited.has(idx)) continue;

      next.push(idx);
    }
  }

  return next;
};
