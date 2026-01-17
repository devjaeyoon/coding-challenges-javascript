class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();

    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);

      if (this.heap[parentIdx] >= this.heap[index]) break;

      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];

      index = parentIdx;
    }
  }

  sinkDown() {
    const length = this.heap.length;
    let index = 0;

    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let swapIdx = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] > this.heap[index]) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swapIdx === null && this.heap[rightIdx] > this.heap[index]) ||
          (swapIdx !== null && this.heap[rightIdx] > this.heap[leftIdx])
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;

      [this.heap[index], this.heap[swapIdx]] = [
        this.heap[swapIdx],
        this.heap[index],
      ];

      index = swapIdx;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const stations = [];

for (let i = 0; i <= N; i++) {
  const [dist, fuel] = input[i].split(' ').map(Number);
  stations.push({ dist, fuel });
}

const [L, P] = input[N].split(' ').map(Number);

stations.sort((a, b) => a.dist - b.dist);

const pq = new MaxHeap();
let currentFuel = P;
let stopCount = 0;
let idx = 0;

while (currentFuel < L) {
  while (idx < N && stations[idx].dist <= currentFuel) {
    pq.push(stations[idx].fuel);
    idx++;
  }

  if (pq.isEmpty()) {
    console.log(-1);
    return;
  }

  currentFuel += pq.pop();
  stopCount++;
}

console.log(stopCount);
