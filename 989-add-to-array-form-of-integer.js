// BigInt는 BigInt와만 더할 수 있음

var addToArrayForm = function (num, k) {
  return String(BigInt(num.join("")) + BigInt(k)).split("");
};

var addToArrayForm = function (num, k) {
  k = String(k).split("");

  if (num.length < k.length) [num, k] = [k, num];

  let kIdx = k.length - 1;
  let add = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    let current;

    if (kIdx >= 0) {
      current = Number(num[i]) + Number(k[kIdx]) + add;
      kIdx--;
    } else {
      current = Number(num[i]) + add;
    }

    num[i] = current % 10;

    if (current / 10 >= 1) add = 1;
    if (current / 10 < 1) add = 0;
  }

  if (add === 1) num.unshift(1);

  return num;
};
