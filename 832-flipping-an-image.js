var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j <= Math.floor((image.length - 1) / 2); j++) {
      [image[i][j], image[i][image.length - 1 - j]] = [
        image[i][image.length - 1 - j],
        image[i][j],
      ];
      [image[i][j], image[i][image.length - 1 - j]] = [
        image[i][j] ^ 1,
        image[i][image.length - 1 - j] ^ 1,
      ];
    }
  }

  return image;
};

// using internal function

var flipAndInvertImage = function (image) {
  return image.map((el) => el.reverse().map((bit) => (bit === 1 ? 0 : 1)));
};

var flipAndInvertImage = function (image) {
  return image.map((el) => el.reverse().map((bit) => (bit ^= 1)));
};
