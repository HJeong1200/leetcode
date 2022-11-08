var isRectangleOverlap = function (rec1, rec2) {
  const rec1XRange = [rec1[0], rec1[2]];
  const rec1YRange = [rec1[1], rec1[3]];

  const rec2XRange = [rec2[0], rec2[2]];
  const rec2YRange = [rec2[1], rec2[3]];

  const oneOnLeft =
    Math.min(rec1XRange[0], rec2XRange[0]) === rec1XRange[0] ? rec1 : rec2;
  const oneOnRight = oneOnLeft === rec1 ? rec2 : rec1;
  const oneOnTop =
    Math.max(rec1YRange[0], rec2YRange[0]) === rec1YRange[0] ? rec1 : rec2;
  const oneOnBottom = oneOnTop === rec1 ? rec2 : rec1;

  if (oneOnLeft[2] > oneOnRight[0] && oneOnTop[1] < oneOnBottom[3]) {
    return true;
  } else {
    return false;
  }
};

// 드모르간의 법칙

var isRectangleOverlap = function (rec1, rec2) {
  return !(
    rec1[2] <= rec2[0] ||
    rec1[3] <= rec2[1] ||
    rec1[0] >= rec2[2] ||
    rec1[1] >= rec2[3]
  );
};
