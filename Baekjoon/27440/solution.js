const N = BigInt(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
    .toString()
);

if (N === 1n) {
  console.log(0);
} else {
  const queue = [[N, 0]];
  const visited = new Set();
  let head = 0;
  visited.add(N);

  let result = 0;

  while (head < queue.length) {
    const [currentNum, count] = queue[head];
    head++;

    const potentialNextNums = [];

    if (currentNum % 3n === 0n) {
      potentialNextNums.push(currentNum / 3n);
    }
    if (currentNum % 2n === 0n) {
      potentialNextNums.push(currentNum / 2n);
    }
    potentialNextNums.push(currentNum - 1n);

    let found = false;
    for (const nextNum of potentialNextNums) {
      if (nextNum < 1n || visited.has(nextNum)) {
        continue;
      }

      if (nextNum === 1n) {
        result = count + 1;
        found = true;
        break;
      }

      visited.add(nextNum);
      queue.push([nextNum, count + 1]);
    }

    if (found) {
      break;
    }
  }

  console.log(result);
}
