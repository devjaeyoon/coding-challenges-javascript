const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.comparator = comparator;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.shiftUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    this.swap(0, this.size() - 1);
    const poppedValue = this.heap.pop();
    this.shiftDown();

    return poppedValue;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return i * 2 + 1;
  }

  rightChild(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  shiftUp() {
    let nodeIndex = this.size() - 1;

    while (
      nodeIndex > 0 &&
      this.comparator(this.heap[nodeIndex], this.heap[this.parent(nodeIndex)])
    ) {
      this.swap(nodeIndex, this.parent(nodeIndex));
      nodeIndex = this.parent(nodeIndex);
    }
  }

  shiftDown() {
    let nodeIndex = 0;

    while (
      (this.leftChild(nodeIndex) < this.size() &&
        this.comparator(
          this.heap[this.leftChild(nodeIndex)],
          this.heap[nodeIndex]
        )) ||
      (this.rightChild(nodeIndex) < this.size() &&
        this.comparator(
          this.heap[this.rightChild(nodeIndex)],
          this.heap[nodeIndex]
        ))
    ) {
      const greaterChildIndex =
        this.rightChild(nodeIndex) < this.size() &&
        this.comparator(
          this.heap[this.rightChild(nodeIndex)],
          this.heap[this.leftChild(nodeIndex)]
        )
          ? this.rightChild(nodeIndex)
          : this.leftChild(nodeIndex);

      this.swap(nodeIndex, greaterChildIndex);
      nodeIndex = greaterChildIndex;
    }
  }
}

const N = Number(input.shift());
const numbers = input.map(Number);

const maxHeap = new PriorityQueue((a, b) => a > b);
const minHeap = new PriorityQueue((a, b) => a < b);
const result = [];

for (const number of numbers) {
  if (maxHeap.size() === minHeap.size()) {
    maxHeap.push(number);
  } else {
    minHeap.push(number);
  }

  if (!minHeap.isEmpty() && maxHeap.peek() > minHeap.peek()) {
    const maxValue = maxHeap.pop();
    const minValue = minHeap.pop();

    maxHeap.push(minValue);
    minHeap.push(maxValue);
  }

  result.push(maxHeap.peek());
}

console.log(result.join('\n'));
