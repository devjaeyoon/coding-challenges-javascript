const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const routes = [];
for (let i = 1; i <= N; i++) {
  const [S, E, C] = input[i].split(' ').map(Number);

  routes.push({ S, E, C });
}

routes.sort((a, b) => a.S - b.S);

const mergedRoutes = [];

let currS = routes[0].S;
let currE = routes[0].E;
let currC = routes[0].C;

for (let i = 1; i < N; i++) {
  const { S, E, C } = routes[i];

  if (S <= currE) {
    currE = Math.max(currE, E);
    currC = Math.min(currC, C);
  } else {
    mergedRoutes.push(`${currS} ${currE} ${currC}`);
    currS = S;
    currE = E;
    currC = C;
  }
}

mergedRoutes.push(`${currS} ${currE} ${currC}`);

console.log(mergedRoutes.length);
console.log(mergedRoutes.join('\n'));
