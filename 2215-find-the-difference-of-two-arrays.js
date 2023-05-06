var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);
  const result = [[], []];

  for (const num of nums1Set) {
    if (nums2Set.has(num)) continue;

    result[0].push(num);
  }
  for (const num of nums2Set) {
    if (nums1Set.has(num)) continue;

    result[1].push(num);
  }

  return result;
};
