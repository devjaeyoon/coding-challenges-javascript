class MinHeap {
  constructor() {
    this.heap = [];
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
    let idx = this.heap.length - 1;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx].cost <= this.heap[idx].cost) break;

      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;

    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let smallestIdx = idx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx].cost < this.heap[smallestIdx].cost
      ) {
        smallestIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx].cost < this.heap[smallestIdx].cost
      ) {
        smallestIdx = rightIdx;
      }
      if (smallestIdx === idx) break;
      [this.heap[idx], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[idx],
      ];
      idx = smallestIdx;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(input.shift());
const m = Number(input.shift());
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [from, to, cost] = input[i].split(' ').map(Number);
  graph[from].push({ to, cost });
}

const [startNode, endNode] = input[m].split(' ').map(Number);

const dist = Array(n + 1).fill(Infinity);
const prev = Array(n + 1).fill(0);

const pq = new MinHeap();

dist[startNode] = 0;
pq.push({ node: startNode, cost: 0 });

while (!pq.isEmpty()) {
  const { node: cur, cost: curCost } = pq.pop();

  if (curCost > dist[cur]) continue;

  for (const next of graph[cur]) {
    const nextCost = curCost + next.cost;

    if (nextCost < dist[next.to]) {
      dist[next.to] = nextCost;
      prev[next.to] = cur;
      pq.push({ node: next.to, cost: nextCost });
    }
  }
}

const path = [];
let cur = endNode;
while (cur !== 0) {
  path.push(cur);
  cur = prev[cur];
}
path.reverse();

console.log(dist[endNode]);
console.log(path.length);
console.log(path.join(' '));
