class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    }

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

      if (parent >= element) {
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

        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const Q = Number(input[0]);
const map = new Map();
let totalCost = 0n;

for (let i = 1; i <= Q; i++) {
  const parts = input[i].trim().split(/\s+/);
  const type = parts[0];
  const name = parts[1];

  if (type === '1') {
    const k = Number(parts[2]);

    if (!map.has(name)) {
      map.set(name, new MaxHeap());
    }

    const heap = map.get(name);
    for (let j = 0; j < k; j++) {
      heap.push(Number(parts[3 + j]));
    }
  } else if (type === '2') {
    const b = Number(parts[2]);

    if (map.has(name)) {
      const heap = map.get(name);
      const count = Math.min(b, heap.size());

      for (let j = 0; j < count; j++) {
        totalCost += BigInt(heap.pop());
      }
    }
  }
}

console.log(totalCost.toString());
