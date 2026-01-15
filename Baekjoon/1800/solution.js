class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1;

    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);

      if (this.heap[parent][1] <= this.heap[idx][1]) {
        break;
      }

      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;

    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let small = idx;

      if (left < this.heap.length && this.heap[left][1] < this.heap[small][1]) {
        small = left;
      }
      if (
        right < this.heap.length &&
        this.heap[right][1] < this.heap[small][1]
      ) {
        small = right;
      }

      if (small === idx) {
        break;
      }

      [this.heap[idx], this.heap[small]] = [this.heap[small], this.heap[idx]];
      idx = small;
    }

    return min;
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, P, K] = input.shift().split(' ').map(Number);
const adj = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < P; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);

  adj[u].push([v, w]);
  adj[v].push([u, w]);
}

function check(mid) {
  const dist = new Array(N + 1).fill(Infinity);
  const pq = new MinHeap();

  dist[1] = 0;
  pq.push([1, 0]);

  while (pq.heap.length > 0) {
    const [curr, count] = pq.pop();

    if (dist[curr] < count) continue;

    for (const [next, weight] of adj[curr]) {
      const nextCount = count + (weight > mid ? 1 : 0);

      if (nextCount < dist[next]) {
        dist[next] = nextCount;
        pq.push([next, nextCount]);
      }
    }
  }

  return dist[N] <= K;
}

let low = 0;
let high = 1000000;
let answer = -1;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (check(mid)) {
    answer = mid;
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

console.log(answer);
