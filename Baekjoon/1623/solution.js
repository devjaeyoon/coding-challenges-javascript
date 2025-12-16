const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\s+/);

let lineIdx = 0;
const N = Number(input[lineIdx++]);

const scores = [0];
for (let i = 0; i < N; i++) {
  scores.push(Number(input[lineIdx++]));
}

const adj = Array.from({ length: N + 1 }, () => []);
for (let i = 2; i <= N; i++) {
  const boss = Number(input[lineIdx++]);
  adj[boss].push(i);
}

const order = [1];
let head = 0;
while (head < order.length) {
  const u = order[head++];
  for (const v of adj[u]) {
    order.push(v);
  }
}

const dp = Array.from({ length: N + 1 }, () => new Int32Array(2));

for (let i = N - 1; i >= 0; i--) {
  const u = order[i];

  dp[u][0] = 0;
  dp[u][1] = scores[u];

  for (const v of adj[u]) {
    dp[u][0] += Math.max(dp[v][0], dp[v][1]);
    dp[u][1] += dp[v][0];
  }
}

function getAttendees(startInclude) {
  const result = [];
  const stack = [{ u: 1, include: startInclude }];

  while (stack.length > 0) {
    const { u, include } = stack.pop();

    if (include) {
      result.push(u);
      for (const v of adj[u]) {
        stack.push({ u: v, include: false });
      }
    } else {
      for (const v of adj[u]) {
        if (dp[v][1] > dp[v][0]) {
          stack.push({ u: v, include: true });
        } else {
          stack.push({ u: v, include: false });
        }
      }
    }
  }

  return result.sort((a, b) => a - b);
}

const case1Members = getAttendees(true);
const case2Members = getAttendees(false);

const output = [];
output.push(`${dp[1][1]} ${dp[1][0]}`);
output.push(`${case1Members.join(' ')} -1`);
output.push(`${case2Members.join(' ')} -1`);

console.log(output.join('\n'));
