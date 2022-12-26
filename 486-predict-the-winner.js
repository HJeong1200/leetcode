var PredictTheWinner = function (nums) {
  return game(nums, 0, nums.length - 1, 1) >= 0;
};

function game(arr, left, right, turn) {
  if (left === right) return turn * arr[left];

  const a = turn * arr[left] + game(arr, left + 1, right, -turn);
  const b = turn * arr[right] + game(arr, left, right - 1, -turn);

  return turn * Math.max(turn * a, turn * b);
}
