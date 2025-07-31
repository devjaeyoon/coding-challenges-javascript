const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const problems = input.map((line) => line.split(' ').map(Number));

problems.sort((a, b) => a[0] - b[0]);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  remove() {
    const root = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sinkDown();
    }

    return root;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const elem = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (elem >= parent) {
        break;
      }

      this.heap[idx] = parent;
      idx = parentIdx;
    }

    this.heap[idx] = elem;
  }

  _sinkDown() {
    const length = this.heap.length;
    const elem = this.heap[0];
    let idx = 0;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let swap = null;

      if (left < length && this.heap[left] < elem) {
        swap = left;
      }

      if (
        right < length &&
        this.heap[right] < (swap === null ? elem : this.heap[left])
      )
        swap = right;

      if (swap === null) {
        break;
      }

      this.heap[idx] = this.heap[swap];
      idx = swap;
    }
    this.heap[idx] = elem;
  }

  size() {
    return this.heap.length;
  }

  sum() {
    return this.heap.reduce((a, b) => a + b, 0);
  }
}

const heap = new MinHeap();

for (let [deadline, ramen] of problems) {
  heap.insert(ramen);

  if (heap.size() > deadline) {
    heap.remove();
  }
}

console.log(heap.sum());
