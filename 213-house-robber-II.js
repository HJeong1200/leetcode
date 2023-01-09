var rob = function (nums) {
  if (nums.length <= 2) return Math.max(...nums);

  const optionOne = nums.slice(0, nums.length - 1);
  const optionTwo = nums.slice(1);

  for (let i = 1; i < optionOne.length; i++) {
    optionOne[i] = Math.max(
      (optionOne[i - 2] || 0) + optionOne[i],
      optionOne[i - 1]
    );
    optionTwo[i] = Math.max(
      (optionTwo[i - 2] || 0) + optionTwo[i],
      optionTwo[i - 1]
    );
  }

  return Math.max(
    optionOne[optionOne.length - 1],
    optionTwo[optionTwo.length - 1]
  );
};
