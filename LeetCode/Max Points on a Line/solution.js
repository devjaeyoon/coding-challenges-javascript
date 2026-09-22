/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length <= 2) {
    return points.length;
  }

  let answer = 0;

  for (let i = 0; i < points.length; i++) {
    const slopes = new Map();

    for (let j = i + 1; j < points.length; j++) {
      let dx = points[j][0] - points[i][0];
      let dy = points[j][1] - points[i][1];

      const gcd = getGCD(dx, dy);

      dx /= gcd;
      dy /= gcd;

      if (dx < 0) {
        dx *= -1;
        dy *= -1;
      } else if (dx === 0) {
        dy = 1;
      } else if (dy === 0) {
        dx = 1;
      }

      const slope = `${dy}/${dx}`;

      slopes.set(slope, (slopes.get(slope) || 0) + 1);

      answer = Math.max(answer, slopes.get(slope) + 1);
    }
  }

  return answer;
};

function getGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = a % b;

    a = b;
    b = temp;
  }

  return a;
}
