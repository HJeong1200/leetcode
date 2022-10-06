var intersection = function (nums1, nums2) {
  const unique = (arr) => {
    let uniqueArr = [];
    for (let el of arr) {
      if (uniqueArr.indexOf(el) === -1) {
        uniqueArr.push(el);
      }
    }
    return uniqueArr;
  };

  nums1 = unique(nums1);
  nums2 = unique(nums2);

  let result = [];

  if (nums1.length < nums2.length) {
    for (let el of nums1) {
      if (nums2.indexOf(el) !== -1) {
        result.push(el);
      }
    }
  } else {
    for (let el of nums2) {
      if (nums1.indexOf(el) !== -1) {
        result.push(el);
      }
    }
  }
  return result;
};

// 두 배열 모두 중복값 제거
// 두 배열의 길이를 비교해서 짧은것, 긴것으로 나눔
// indexOf 짧은것 !== -1 이면 result에 푸쉬
// result 반환

/**
 * Hashmap, Set 찾아보고 공부하기
 */
