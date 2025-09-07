const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return top;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent[0] <= element[0]) {
        break;
      }

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    const length = this.heap.length;
    const element = this.heap[0];
    let index = 0;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];

        if (leftChild[0] < element[0]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];

        if (
          (swap === null && rightChild[0] < element[0]) ||
          (swap !== null && rightChild[0] < leftChild[0])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

const T = Number(input.shift());
let line = 0;

for (let i = 0; i < T; i++) {
  const [n, d, c] = input[line].split(' ').map(Number);
  const dependencies = [];

  for (let j = 0; j < d; j++) {
    dependencies.push(input[line + 1 + j].split(' ').map(Number));
  }

  line += d + 1;

  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b, s] of dependencies) {
    graph[b].push([a, s]);
  }

  const distances = Array(n + 1).fill(Infinity);
  const pq = new MinHeap();

  distances[c] = 0;
  pq.push([0, c]);

  while (pq.size() > 0) {
    const [currentTime, currentPC] = pq.pop();

    if (distances[currentPC] < currentTime) {
      continue;
    }

    for (const [nextPC, infectTime] of graph[currentPC]) {
      const newTime = currentTime + infectTime;
      if (newTime < distances[nextPC]) {
        distances[nextPC] = newTime;
        pq.push([newTime, nextPC]);
      }
    }
  }

  let infectedCount = 0;
  let maxTime = 0;

  for (let j = 1; j <= n; j++) {
    if (distances[j] !== Infinity) {
      infectedCount++;
      maxTime = Math.max(maxTime, distances[j]);
    }
  }

  console.log(`${infectedCount} ${maxTime}`);
}
