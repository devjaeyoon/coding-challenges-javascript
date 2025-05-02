const [xA, yA, xB, yB, xC, yC] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(xA, yA, xB, yB, xC, yC) {
  const area = Math.abs((xB - xA) * (yC - yA) - (xC - xA) * (yB - yA));
  if (area === 0) {
    return -1;
  }

  const AB = Math.hypot(xB - xA, yB - yA);
  const BC = Math.hypot(xC - xB, yC - yB);
  const AC = Math.hypot(xC - xA, yC - yA);

  const perimeter1 = 2 * (AB + BC);
  const perimeter2 = 2 * (AB + AC);
  const perimeter3 = 2 * (AC + BC);

  const maxPerimeter = Math.max(perimeter1, perimeter2, perimeter3);
  const minPerimeter = Math.min(perimeter1, perimeter2, perimeter3);

  return maxPerimeter - minPerimeter;
}

console.log(solution(xA, yA, xB, yB, xC, yC));
