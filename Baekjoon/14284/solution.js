const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = input.slice(1, m + 1).map((line) => line.split(' ').map(Number));
const [s, t] = input[m + 1].split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
for (const [a, b, c] of edges) {
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length <= 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return top;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[parentIdx][0] <= element[0]) {
        break;
      }

      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length && this.heap[leftIdx][0] < element[0]) {
        swap = leftIdx;
      }

      if (
        rightIdx < length &&
        this.heap[rightIdx][0] <
          (swap === null ? element[0] : this.heap[leftIdx][0])
      ) {
        swap = rightIdx;
      }

      if (swap === null) {
        break;
      }

      this.heap[idx] = this.heap[swap];
      idx = swap;
    }
    this.heap[idx] = element;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const dist = Array(n + 1).fill(Infinity);
dist[s] = 0;

const priorityQueue = new PriorityQueue();
priorityQueue.push([0, s]);

while (!priorityQueue.isEmpty()) {
  const [currentCost, u] = priorityQueue.pop();

  if (dist[u] < currentCost) {
    continue;
  }

  for (const [v, cost] of graph[u]) {
    const nextCost = currentCost + cost;

    if (nextCost < dist[v]) {
      dist[v] = nextCost;
      priorityQueue.push([nextCost, v]);
    }
  }
}

console.log(dist[t]);
