const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  enqueue(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  bubbleUp(index = this.heap.length - 1) {
    if (index < 1) {
      return;
    }

    const currentNode = this.heap[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.heap[parentIndex];

    if (parentNode.cost > currentNode.cost) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.bubbleUp(parentIndex);
    }
  }

  dequeue() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return root;
  }

  bubbleDown(index = 0) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const length = this.heap.length;
    let smallestIndex = index;

    if (
      leftIndex < length &&
      this.heap[leftIndex].cost < this.heap[smallestIndex].cost
    ) {
      smallestIndex = leftIndex;
    }
    if (
      rightIndex < length &&
      this.heap[rightIndex].cost < this.heap[smallestIndex].cost
    ) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.bubbleDown(smallestIndex);
    }
  }
}

const [N, E] = input.shift().split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < E; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);

  graph[a].push({ to: b, cost: c });
  graph[b].push({ to: a, cost: c });
}

const [v1, v2] = input[E].split(' ').map(Number);

const INF = Infinity;

function dijkstra(start) {
  const dist = Array(N + 1).fill(INF);
  dist[start] = 0;

  const pq = new MinHeap();
  pq.enqueue({ to: start, cost: 0 });

  while (pq.size() > 0) {
    const { to, cost } = pq.dequeue();

    if (dist[to] < cost) {
      continue;
    }

    for (const { to: nextNode, cost: nextCost } of graph[to]) {
      const newCost = cost + nextCost;
      if (newCost < dist[nextNode]) {
        dist[nextNode] = newCost;
        pq.enqueue({ to: nextNode, cost: newCost });
      }
    }
  }

  return dist;
}

const distFrom1 = dijkstra(1);
const distFromV1 = dijkstra(v1);
const distFromV2 = dijkstra(v2);

const path1 = distFrom1[v1] + distFromV1[v2] + distFromV2[N];
const path2 = distFrom1[v2] + distFromV2[v1] + distFromV1[N];

const result = Math.min(path1, path2);

console.log(result === INF ? -1 : result);
