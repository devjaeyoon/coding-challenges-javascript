const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, D] = input.shift().split(' ').map(Number);
const shortcuts = [];

for (let i = 0; i < N; i++) {
  const [start, end, len] = input[i].split(' ').map(Number);

  if (end <= D && len < end - start) {
    shortcuts.push({ start, end, len });
  }
}

const distance = Array.from({ length: D + 1 }, (_, i) => i);

for (let i = 1; i <= D; i++) {
  distance[i] = Math.min(distance[i], distance[i - 1] + 1);

  for (const shortcut of shortcuts) {
    if (shortcut.end === i) {
      const costViaShortcut = distance[shortcut.start] + shortcut.len;
      distance[i] = Math.min(distance[i], costViaShortcut);
    }
  }
}

console.log(distance[D]);
