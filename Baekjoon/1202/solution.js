const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const jewels = input
  .slice(0, N)
  .map((line) => {
    const [m, v] = line.split(' ').map(Number);

    return { weight: m, value: v };
  })
  .sort((a, b) => a.weight - b.weight);

const bags = input
  .slice(N)
  .map(Number)
  .sort((a, b) => a - b);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length !== 0) {
      this.heap[0] = end;
      this._sinkDown();
    }

    return max;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (element <= parent) {
        break;
      }

      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  _sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swap === null && this.heap[rightIdx] > element) ||
          (swap !== null && this.heap[rightIdx] > this.heap[leftIdx])
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) {
        break;
      }

      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }
}

const maxHeap = new MaxHeap();
let result = 0;
let jewelIndex = 0;

for (let i = 0; i < K; i++) {
  const capacity = bags[i];

  while (jewelIndex < N && jewels[jewelIndex].weight <= capacity) {
    maxHeap.insert(jewels[jewelIndex].value);
    jewelIndex++;
  }

  const best = maxHeap.extractMax();

  if (best !== null) {
    result += best;
  }
}

console.log(result);
