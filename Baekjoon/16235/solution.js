const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input.shift().split(' ').map(Number);
const A = input.splice(0, N).map((row) => row.split(' ').map(Number));
const land = Array.from({ length: N }, () => Array(N).fill(5));
const trees = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => [])
);

input.forEach((line) => {
  const [x, y, z] = line.split(' ').map(Number);
  trees[x - 1][y - 1].push(z);
});

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

for (let year = 0; year < K; year++) {
  const dead = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => [])
  );

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (trees[r][c].length === 0) {
        continue;
      }

      trees[r][c].sort((a, b) => a - b);
      const survived = [];

      for (const age of trees[r][c]) {
        if (land[r][c] >= age) {
          land[r][c] -= age;
          survived.push(age + 1);
        } else {
          dead[r][c].push(age);
        }
      }

      trees[r][c] = survived;
    }
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      for (const age of dead[r][c]) {
        land[r][c] += Math.floor(age / 2);
      }
    }
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      for (const age of trees[r][c]) {
        if (age % 5 === 0) {
          for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < N && nc >= 0 && nc < N) {
              trees[nr][nc].unshift(1);
            }
          }
        }
      }
    }
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      land[r][c] += A[r][c];
    }
  }
}

let result = 0;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    result += trees[r][c].length;
  }
}

console.log(result);
