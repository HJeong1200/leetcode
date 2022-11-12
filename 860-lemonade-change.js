var lemonadeChange = function (bills) {
  let billsInHand = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let bill of bills) {
    billsInHand[String(bill)]++;

    if (bill === 5) {
      continue;
    }

    bill = bill - 5;

    if (bill === 5 && billsInHand[String(bill)]) {
      billsInHand[String(bill)]--;
    } else if (bill === 15 && billsInHand["10"] && billsInHand["5"]) {
      billsInHand["10"]--;
      billsInHand["5"]--;
    } else if (bill === 15 && billsInHand["5"] >= 3) {
      billsInHand["5"] -= 3;
    } else {
      return false;
    }
  }

  return true;
};
