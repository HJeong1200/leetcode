var floodFill = function (image, sr, sc, color) {
  let prevColor = image[sr][sc];
  if (prevColor === color) {
    return image;
  }
  let m = image.length;
  let n = image[0].length;

  const flood = (sr, sc, color) => {
    image[sr][sc] = color;
    if (sr + 1 < m && image[sr + 1][sc] === prevColor) {
      flood(sr + 1, sc, color);
    }
    if (sr - 1 >= 0 && image[sr - 1][sc] === prevColor) {
      flood(sr - 1, sc, color);
    }
    if (sc + 1 < n && image[sr][sc + 1] === prevColor) {
      flood(sr, sc + 1, color);
    }
    if (sc - 1 >= 0 && image[sr][sc - 1] === prevColor) {
      flood(sr, sc - 1, color);
    }
  };

  flood(sr, sc, color);

  return image;
};

// helper function에서 조건을 확인할 때 image[sr + 1][sc] 가 아닌 sr + 1 < m 이런 식으로 해야 함

var floodFill = function (image, sr, sc, color) {
  const prevColor = image[sr][sc];

  if (prevColor === color) return image;

  colorImage(image, sr, sc, prevColor, color);

  return image;
};

const colorImage = (image, sr, sc, prevColor, color) => {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
  if (image[sr][sc] !== prevColor) return;

  image[sr][sc] = color;

  colorImage(image, sr + 1, sc, prevColor, color);
  colorImage(image, sr - 1, sc, prevColor, color);
  colorImage(image, sr, sc + 1, prevColor, color);
  colorImage(image, sr, sc - 1, prevColor, color);
};
