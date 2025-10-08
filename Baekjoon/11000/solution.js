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
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const classes = input.map((line) => line.split(' ').map(Number));

classes.sort((a, b) => a[0] - b[0]);

const priorityQueue = new MinHeap();

priorityQueue.push(classes[0][1]);

for (let i = 1; i < N; i++) {
  const [currentStart, currentEnd] = classes[i];
  const earliestEnd = priorityQueue.peek();

  if (currentStart >= earliestEnd) {
    priorityQueue.pop();
    priorityQueue.push(currentEnd);
  } else {
    priorityQueue.push(currentEnd);
  }
}

console.log(priorityQueue.size());
