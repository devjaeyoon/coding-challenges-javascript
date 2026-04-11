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

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim());

function calculateMinimumCost() {
  if (input.length < 3) {
    return;
  }

  const N = Number(input[0]);
  const arr = input[1].split(' ').map((x) => (x === '10' ? 'A' : x));
  const startState = arr.join('');
  const targetState = [...arr].sort().join('');

  const M = Number(input[2]);
  const operations = [];

  for (let i = 0; i < M; i++) {
    let [l, r, c] = input[3 + i].split(' ').map(Number);

    l--;
    r--;

    if (l > r) {
      [l, r] = [r, l];
    }

    operations.push([l, r, c]);
  }

  const pq = new MinHeap();
  const dist = new Map();

  pq.push([0, startState]);
  dist.set(startState, 0);

  while (pq.size() > 0) {
    const [cost, state] = pq.pop();

    if (cost > dist.get(state)) {
      continue;
    }

    if (state === targetState) {
      console.log(cost);

      return;
    }

    for (let i = 0; i < M; i++) {
      const [u, v, c] = operations[i];
      const nextState =
        state.substring(0, u) +
        state[v] +
        state.substring(u + 1, v) +
        state[u] +
        state.substring(v + 1);
      const nextCost = cost + c;

      if (!dist.has(nextState) || nextCost < dist.get(nextState)) {
        dist.set(nextState, nextCost);
        pq.push([nextCost, nextState]);
      }
    }
  }

  console.log(-1);
}

calculateMinimumCost();
