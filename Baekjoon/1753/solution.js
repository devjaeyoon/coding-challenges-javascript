const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }

    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex].cost <= this.heap[index].cost) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (
      left < this.heap.length &&
      this.heap[left].cost < this.heap[smallest].cost
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right].cost < this.heap[smallest].cost
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.sinkDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(graph, start, V) {
  const distance = new Array(V + 1).fill(Infinity);
  const priorityQueue = new PriorityQueue();

  distance[start] = 0;
  priorityQueue.enqueue({ node: start, cost: 0 });

  while (!priorityQueue.isEmpty()) {
    const { node: current, cost: currentCost } = priorityQueue.dequeue();

    if (distance[current] < currentCost) {
      continue;
    }

    for (const edge of graph[current]) {
      const nextCost = currentCost + edge.weight;

      if (nextCost < distance[edge.to]) {
        distance[edge.to] = nextCost;
        priorityQueue.enqueue({ node: edge.to, cost: nextCost });
      }
    }
  }

  return distance;
}

const [V, E] = input[0].split(' ').map(Number);
const K = parseInt(input[1]);
const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 2; i < input.length; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  graph[u].push({ to: v, weight: w });
}

const distances = dijkstra(graph, K, V);
let output = '';

for (let i = 1; i <= V; i++) {
  output += distances[i] === Infinity ? 'INF\n' : distances[i] + '\n';
}

console.log(output.trim());
