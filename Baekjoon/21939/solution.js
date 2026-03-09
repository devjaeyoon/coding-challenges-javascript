class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return top;
  }

  peek() {
    return this.heap[0] || null;
  }

  bubbleUp(idx) {
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (this.compare(element, parent) >= 0) {
        break;
      }

      this.heap[idx] = parent;
      this.heap[parentIdx] = element;
      idx = parentIdx;
    }
  }

  sinkDown(idx) {
    const length = this.heap.length;
    const element = this.heap[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (this.compare(leftChild, element) < 0) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && this.compare(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIdx;
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

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

let lineIdx = 0;
const N = Number(input[lineIdx++].trim());

const minHeap = new PriorityQueue((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
});

const maxHeap = new PriorityQueue((a, b) => {
  if (a[0] === b[0]) {
    return b[1] - a[1];
  }

  return b[0] - a[0];
});

const currentDifficulty = new Int32Array(100001);

for (let i = 0; i < N; i++) {
  const [P, L] = input[lineIdx++].trim().split(/\s+/).map(Number);

  currentDifficulty[P] = L;

  minHeap.push([L, P]);
  maxHeap.push([L, P]);
}

const M = Number(input[lineIdx++].trim());
const output = [];

for (let i = 0; i < M; i++) {
  const parts = input[lineIdx++].trim().split(/\s+/);
  const cmd = parts[0];

  if (cmd === 'add') {
    const P = Number(parts[1]);
    const L = Number(parts[2]);

    currentDifficulty[P] = L;

    minHeap.push([L, P]);
    maxHeap.push([L, P]);
  } else if (cmd === 'solved') {
    const P = Number(parts[1]);

    currentDifficulty[P] = 0;
  } else if (cmd === 'recommend') {
    const x = Number(parts[1]);

    if (x === 1) {
      while (maxHeap.peek() !== null) {
        const top = maxHeap.peek();
        if (currentDifficulty[top[1]] !== top[0]) {
          maxHeap.pop();
        } else {
          break;
        }
      }
      output.push(maxHeap.peek()[1]);
    } else {
      while (minHeap.peek() !== null) {
        const top = minHeap.peek();

        if (currentDifficulty[top[1]] !== top[0]) {
          minHeap.pop();
        } else {
          break;
        }
      }
      output.push(minHeap.peek()[1]);
    }
  }
}

console.log(output.join('\n'));
