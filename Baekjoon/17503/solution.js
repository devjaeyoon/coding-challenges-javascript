class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[index]) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let smallerChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) break;

      [this.heap[index], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[index],
      ];
      index = smallerChildIndex;
    }
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input.shift().split(' ').map(Number);
const beers = [];

for (let i = 0; i < K; i++) {
  const [v, c] = input[i].split(' ').map(Number);
  beers.push({ v, c });
}

beers.sort((a, b) => a.c - b.c);

const pq = new MinHeap();
let currentPreferenceSum = 0;

for (const beer of beers) {
  pq.push(beer.v);
  currentPreferenceSum += beer.v;

  if (pq.size() > N) {
    const minVal = pq.pop();
    currentPreferenceSum -= minVal;
  }

  if (pq.size() === N && currentPreferenceSum >= M) {
    console.log(beer.c);

    return;
  }
}

console.log(-1);
