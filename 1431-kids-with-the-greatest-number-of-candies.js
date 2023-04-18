var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = candies.reduce((acc, cur) => (acc >= cur ? acc : cur), 1);
  return candies.map((el) => el + extraCandies >= maxCandies);
};
