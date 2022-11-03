var calPoints = function (operations) {
  let records = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      records.push(records[records.length - 1] + records[records.length - 2]);
    } else if (operations[i] === "C") {
      records.pop();
    } else if (operations[i] === "D") {
      records.push(records[records.length - 1] * 2);
    } else {
      records.push(Number(operations[i]));
    }
  }

  let result = 0;

  for (let record of records) {
    result += record;
  }

  return result;
};
