var fairCandySwap = function (aliceSizes, bobSizes) {
  let aliceTotal = 0;
  let bobTotal = 0;

  for (let el of aliceSizes) {
    aliceTotal += el;
  }

  for (let el of bobSizes) {
    bobTotal += el;
  }

  for (let alice of aliceSizes) {
    for (let bob of bobSizes) {
      if (aliceTotal - alice + bob === bobTotal - bob + alice) {
        return [alice, bob];
      }
    }
  }
};

/**
 * Sum에 reduce 사용하면 짧다!!
 *
 * aliceTotal - alice + bob = bobTotal - bob + alice
 *  => bob = alice + (bobTotal - aliceTotal) / 2
 *
 * alice에 대하여 위의 조건을 만족하는 bob이 bobSet에 있는지 확인
 */

var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceTotal = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const bobTotal = bobSizes.reduce((acc, cur) => acc + cur, 0);

  const diff = bobTotal - aliceTotal;

  const bobSet = new Set(bobSizes);

  for (alice of aliceSizes) {
    if (bobSet.has(alice + diff / 2)) {
      return [alice, alice + diff / 2];
    }
  }
};
