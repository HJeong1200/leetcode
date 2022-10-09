var maxDistance = function (colors) {
  let start = 0;
  let end = colors.length - 1;
  let maxDist = 1;

  let startDist;
  let endDist;
  let currMaxDist;

  for (let i = 0; i <= end; i++) {
    if (colors[i] !== colors[start]) {
      startDist = Math.abs(start - i);
    }
    if (colors[i] !== colors[end]) {
      endDist = Math.abs(end - i);
    }

    currMaxDist = Math.max(startDist, endDist);

    if (currMaxDist >= maxDist) {
      maxDist = currMaxDist;
    }
  }

  return maxDist;
};

/**
 * 왜 첫 번째 집과 마지막 집을 확인하는지?
 *
 * Let 0 < i < j < n-1, colors[i] != colors[j] and assume that they are the maximum distance between two houses with different colors.
 * Then, colors[0] must be the same color as colors[j],
 * as otherwise the distance between 0 and j is greater than i and j, a contradiction;
 * With the same reasoning, colors[i] must be the same with colors[n-1].
 * But now, we have that colors[0] and colors[n-1] being different, and they have more distance than our original assumption, i and j;
 * Thus, contradiction.
 */
