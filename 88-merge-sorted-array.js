var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
  } else if (n === 0) {
    nums1 = nums1;
  } else {
    while (n > 0) {
      let last = n + m - 1;
      if (nums1[m - 1] >= nums2[n - 1]) {
        nums1[last] = nums1[m - 1];
        m--;
      } else {
        nums1[last] = nums2[n - 1];
        n--;
      }
    }
  }
};
