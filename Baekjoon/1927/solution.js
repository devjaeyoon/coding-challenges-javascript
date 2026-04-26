class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] <= this.heap[currentIndex]) {
        break;
      }

      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return minValue;
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.heap.length;
    let smallestIndex = index;

    if (
      leftChildIndex < length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }
    if (
      rightChildIndex < length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }

  peek() {
    return this.heap[0];
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);

const minHeap = new MinHeap();
const output = [];

for (let i = 1; i <= N; i++) {
  const x = Number(input[i]);

  if (x === 0) {
    if (minHeap.size() === 0) {
      output.push(0);
    } else {
      output.push(minHeap.pop());
    }
  } else {
    minHeap.push(x);
  }
}

console.log(output.join('\n'));
