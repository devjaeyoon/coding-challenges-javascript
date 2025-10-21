class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  enqueue(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].cost < this.heap[parentIndex].cost) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex].cost < this.heap[smallestIndex].cost
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex].cost < this.heap[smallestIndex].cost
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex !== index) {
        [this.heap[index], this.heap[smallestIndex]] = [
          this.heap[smallestIndex],
          this.heap[index],
        ];
        index = smallestIndex;
      } else {
        break;
      }
    }
  }
}

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const [A, B, C] = input[i].split(' ').map(Number);

  graph[A].push([B, C]);
  graph[B].push([A, C]);
}

const dist = Array(N + 1).fill(Infinity);
const parent = Array(N + 1).fill(null);
const pq = new MinPriorityQueue();

dist[1] = 0;
pq.enqueue({ cost: 0, node: 1 });

const recoveredEdges = [];

while (!pq.isEmpty()) {
  const { cost, node } = pq.dequeue();

  if (cost > dist[node]) {
    continue;
  }

  for (const [neighbor, edgeCost] of graph[node]) {
    const newCost = cost + edgeCost;

    if (newCost < dist[neighbor]) {
      dist[neighbor] = newCost;
      parent[neighbor] = node;
      pq.enqueue({ cost: newCost, node: neighbor });
    }
  }
}

for (let i = 2; i <= N; i++) {
  if (parent[i] !== null) {
    recoveredEdges.push([i, parent[i]]);
  }
}

console.log(recoveredEdges.length);
console.log(recoveredEdges.map((edge) => edge.join(' ')).join('\n'));
