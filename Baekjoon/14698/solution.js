const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input.shift());
const MOD = 1_000_000_007n;
let idx = 0;

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    while (i > 0) {
      let p = Math.floor((i - 1) / 2);

      if (this.heap[p] <= this.heap[i]) {
        break;
      }

      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (true) {
      let l = 2 * i + 1;
      let r = 2 * i + 2;
      let smallest = i;

      if (l < this.heap.length && this.heap[l] < this.heap[smallest]) {
        smallest = l;
      }
      if (r < this.heap.length && this.heap[r] < this.heap[smallest]) {
        smallest = r;
      }
      if (smallest === i) {
        break;
      }

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }

    return min;
  }

  size() {
    return this.heap.length;
  }
}

const results = [];

for (let t = 0; t < T; t++) {
  const N = Number(input[idx++]);
  const arr = input[idx++].split(' ').map(BigInt);

  if (N === 1) {
    results.push('1');
    continue;
  }

  const pq = new MinHeap();
  for (const a of arr) {
    pq.push(a);
  }

  let totalCost = 1n;

  while (pq.size() > 1) {
    const a = pq.pop();
    const b = pq.pop();
    const merged = a * b;
    totalCost = (totalCost * merged) % MOD;
    pq.push(merged);
  }

  results.push(totalCost.toString());
}

console.log(results.join('\n'));
