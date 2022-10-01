var longestCommonPrefix = function (strs) {
  let testword = strs[0];

  for (let str of strs) {
    if (str.length < testword.length) {
      testword = str;
    }
  }

  let result = "";

  for (let i = 0; i < testword.length; i++) {
    if (
      strs.every((el) => {
        return el[i] === testword[i];
      })
    ) {
      result += testword[i];
    } else {
      return result;
    }
  }

  return result;
};

// strs에서 첫 번째 단어가 모두 일치하는지 확인하여 result에 넣는다.
// strs에서 두 번째 단어가 모두 일치하는지 확인하여 result에 넣는다.
// strs에서 n 번째 단어가 모두 일치하는지 확인하여 result에 넣는다.
// false가 나오는 순간 result를 반환한다.
