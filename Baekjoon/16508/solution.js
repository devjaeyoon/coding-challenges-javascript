const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const T = input.shift();
const N = Number(input.shift());

const targetCount = new Array(26).fill(0);
for (let i = 0; i < T.length; i++) {
  targetCount[T.charCodeAt(i) - 65]++;
}

const books = [];

for (let i = 0; i < N; i++) {
  const [priceStr, title] = input.shift().split(' ');
  const price = Number(priceStr);

  const titleCount = new Array(26).fill(0);
  for (let j = 0; j < title.length; j++) {
    titleCount[title.charCodeAt(j) - 65]++;
  }

  books.push({ price, titleCount });
}

let minCost = Infinity;

function dfs(index, currentCost, currentCount) {
  if (index === N) {
    let isPossible = true;
    for (let i = 0; i < 26; i++) {
      if (currentCount[i] < targetCount[i]) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) {
      minCost = Math.min(minCost, currentCost);
    }

    return;
  }

  dfs(index + 1, currentCost, currentCount);

  const nextCount = [...currentCount];
  for (let i = 0; i < 26; i++) {
    nextCount[i] += books[index].titleCount[i];
  }
  dfs(index + 1, currentCost + books[index].price, nextCount);
}

dfs(0, 0, new Array(26).fill(0));

console.log(minCost === Infinity ? -1 : minCost);
