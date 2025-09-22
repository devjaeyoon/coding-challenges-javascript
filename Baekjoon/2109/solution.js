const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();

    return max;
  }

  heapifyDown() {
    const length = this.heap.length;
    let index = 0;

    while (this.getLeftChildIndex(index) < length) {
      const rightChildIndex = this.getRightChildIndex(index);
      let largerChildIndex = this.getLeftChildIndex(index);

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[largerChildIndex]
      ) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[index] < this.heap[largerChildIndex]) {
        this.swap(index, largerChildIndex);
        index = largerChildIndex;
      } else {
        break;
      }
    }
  }
}

function solve(n, lectures) {
  if (n === 0) {
    console.log(0);

    return;
  }

  lectures.sort((a, b) => b[1] - a[1]);

  const pq = new MaxHeap();
  const maxDeadline = lectures[0][1];
  let totalPay = 0;
  let lectureIndex = 0;

  for (let day = maxDeadline; day >= 1; day--) {
    while (lectureIndex < n && lectures[lectureIndex][1] === day) {
      pq.insert(lectures[lectureIndex][0]);
      lectureIndex++;
    }

    if (!pq.isEmpty()) {
      totalPay += pq.extractMax();
    }
  }

  console.log(totalPay);
}

const n = Number(input.shift());
const lectures = input.map((line) => line.split(' ').map(Number));

solve(n, lectures);
