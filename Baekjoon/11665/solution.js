const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const cuboids = input.slice(1).map((line) => {
  const [x1, y1, z1, x2, y2, z2] = line.split(' ').map(Number);
  return { x1, y1, z1, x2, y2, z2 };
});

let [xMin, xMax] = [cuboids[0].x1, cuboids[0].x2];
let [yMin, yMax] = [cuboids[0].y1, cuboids[0].y2];
let [zMin, zMax] = [cuboids[0].z1, cuboids[0].z2];

for (const cuboid of cuboids.slice(1)) {
  xMin = Math.max(xMin, cuboid.x1);
  xMax = Math.min(xMax, cuboid.x2);
  yMin = Math.max(yMin, cuboid.y1);
  yMax = Math.min(yMax, cuboid.y2);
  zMin = Math.max(zMin, cuboid.z1);
  zMax = Math.min(zMax, cuboid.z2);
}

const isValid = xMin < xMax && yMin < yMax && zMin < zMax;
console.log(isValid ? (xMax - xMin) * (yMax - yMin) * (zMax - zMin) : 0);
