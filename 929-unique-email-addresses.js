var numUniqueEmails = function (emails) {
  let result = new Set();

  for (let email of emails) {
    const at = email.indexOf("@");
    let local = email.slice(0, at);
    let domain = email.slice(at + 1);

    local = findDot(findPlus(local));

    result.add(local + "@" + domain);
  }

  return result.size;
};

function findDot(str) {
  let result = "";

  for (let char of str) {
    if (char !== ".") {
      result += char;
    }
  }

  return result;
}

function findPlus(str) {
  const index = str.indexOf("+");

  if (index === -1) {
    return str;
  }

  return str.slice(0, index);
}

// split 사용하면 해당 단어로 split한 배열 생성 가능
// replace는 하나만 replace, replaceAll은 전체 replace

var numUniqueEmails = function (emails) {
  let result = new Set();

  for (let email of emails) {
    const emailArr = email.split("@");
    let local = emailArr[0];
    let domain = emailArr[1];

    local = cleanUp(local);

    result.add(local + "@" + domain);
  }

  return result.size;
};

function cleanUp(str) {
  str = str.split("+")[0];
  str = str.replaceAll(".", "");

  return str;
}
