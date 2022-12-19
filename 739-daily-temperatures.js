var dailyTemperatures = function (temperatures) {
  const result = [];

  for (let i = 0; i < temperatures.length - 1; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        result.push(j - i);
        break;
      }
    }

    if (result.length === i) result.push(0);
  }

  result.push(0);

  return result;
};

// Stack 으로 풀기

var dailyTemperatures = function (temperatures) {
  const result = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let j = stack.pop();
      result[j] = i - j;
    }

    stack.push(i);
  }

  return result;
};
