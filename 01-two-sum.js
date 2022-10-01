// My code

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Solution

/*
1. Brute Force
    loop through each element x and find if there is another value that equals to target - x
    
    time complexity: O(n^2) -> 반복문 두번
    space complexity: O(1) -> 고정된 공간만 필요
*/

/*
2. Two-pass Hash Table
    trade space for speed
    1) add each element's value as a key and its index as a value to the hash table
    2) check if each element's complement(target - nums[i]) exists in the hash table 

    time complexity: O(n)
    space complexity: O(n)
*/

var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hash[complement] !== undefined && hash[complement] !== i) {
      return [hash[complement], i];
    }
  }
};

/*

3. One-pass Hash Table
    while iterating and inserting elements into the hash table, 
    look back to check if current element's complement already exists in the hash table

    time complexity: O(n)
    space complexity: O(n)
*/

var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hash[complement] !== undefined && hash[complement] !== i) {
      return [hash[complement], i];
    }

    hash[nums[i]] = i;
  }
};
