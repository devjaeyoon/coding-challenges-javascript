const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const positions = input.map((line) => line.split(' ').map(Number));
const distances = [];

distances.push(
  Math.sqrt(
    Math.pow(positions[1][0] - positions[0][0], 2) +
      Math.pow(positions[1][1] - positions[0][1], 2)
  ) +
    Math.sqrt(
      Math.pow(positions[2][0] - positions[1][0], 2) +
        Math.pow(positions[2][1] - positions[1][1], 2)
    ) +
    Math.sqrt(
      Math.pow(positions[3][0] - positions[2][0], 2) +
        Math.pow(positions[3][1] - positions[2][1], 2)
    )
);
distances.push(
  Math.sqrt(
    Math.pow(positions[1][0] - positions[0][0], 2) +
      Math.pow(positions[1][1] - positions[0][1], 2)
  ) +
    Math.sqrt(
      Math.pow(positions[3][0] - positions[1][0], 2) +
        Math.pow(positions[3][1] - positions[1][1], 2)
    ) +
    Math.sqrt(
      Math.pow(positions[2][0] - positions[3][0], 2) +
        Math.pow(positions[2][1] - positions[3][1], 2)
    )
);
distances.push(
  Math.sqrt(
    Math.pow(positions[2][0] - positions[0][0], 2) +
      Math.pow(positions[2][1] - positions[0][1], 2)
  ) +
    Math.sqrt(
      Math.pow(positions[1][0] - positions[2][0], 2) +
        Math.pow(positions[1][1] - positions[2][1], 2)
    ) +
    Math.sqrt(
      Math.pow(positions[3][0] - positions[1][0], 2) +
        Math.pow(positions[3][1] - positions[1][1], 2)
    )
);
distances.push(
  Math.sqrt(
    Math.pow(positions[2][0] - positions[0][0], 2) +
      Math.pow(positions[2][1] - positions[0][1], 2)
  ) +
    Math.sqrt(
      Math.pow(positions[3][0] - positions[2][0], 2) +
        Math.pow(positions[3][1] - positions[2][1], 2)
    ) +
    Math.sqrt(
      Math.pow(positions[1][0] - positions[3][0], 2) +
        Math.pow(positions[1][1] - positions[3][1], 2)
    )
);
distances.push(
  Math.sqrt(
    Math.pow(positions[3][0] - positions[0][0], 2) +
      Math.pow(positions[3][1] - positions[0][1], 2)
  ) +
    Math.sqrt(
      Math.pow(positions[1][0] - positions[3][0], 2) +
        Math.pow(positions[1][1] - positions[3][1], 2)
    ) +
    Math.sqrt(
      Math.pow(positions[2][0] - positions[1][0], 2) +
        Math.pow(positions[2][1] - positions[1][1], 2)
    )
);
distances.push(
  Math.sqrt(
    Math.pow(positions[3][0] - positions[0][0], 2) +
      Math.pow(positions[3][1] - positions[0][1], 2)
  ) +
    Math.sqrt(
      Math.pow(positions[2][0] - positions[3][0], 2) +
        Math.pow(positions[2][1] - positions[3][1], 2)
    ) +
    Math.sqrt(
      Math.pow(positions[1][0] - positions[2][0], 2) +
        Math.pow(positions[1][1] - positions[2][1], 2)
    )
);

console.log(Math.trunc(Math.min(...distances)));
