var average = function (salary) {
  let min = Infinity;
  let max = -Infinity;
  let result = 0;
  let people = 0;

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] < min) min = salary[i];
    if (salary[i] > max) max = salary[i];
  }

  for (let i = 0; i < salary.length; i++) {
    if (salary[i] === min || salary[i] === max) continue;
    result += salary[i];
    people++;
  }

  return result / people;
};

// single iteration

var average = function (salary) {
  let min = Infinity;
  let max = -Infinity;
  let result = 0;

  for (let i = 0; i < salary.length; i++) {
    if (min > salary[i]) min = salary[i];
    if (max < salary[i]) max = salary[i];

    result += salary[i];
  }

  return (result - min - max) / (salary.length - 2);
};
