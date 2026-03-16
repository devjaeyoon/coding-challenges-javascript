const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v, c] = input[i].split(' ').map(Number);

  graph[v].push([u, c]);
}

const interviewers = input[M + 1].split(' ').map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node, cost) {
    let idx = this.heap.length - 1;
    this.heap.push([node, cost]);

    while (idx > 0) {
      const parentIdx = (idx - 1) >> 1;
      if (this.heap[parentIdx][1] <= this.heap[idx][1]) {
        break;
      }

      const temp = this.heap[idx];
      this.heap[idx] = this.heap[parentIdx];
      this.heap[parentIdx] = temp;
      idx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;
    const len = this.heap.length;

    while (true) {
      const left = (idx << 1) + 1;
      const right = left + 1;
      let smallest = idx;

      if (left < len && this.heap[left][1] < this.heap[smallest][1]) {
        smallest = left;
      }
      if (right < len && this.heap[right][1] < this.heap[smallest][1]) {
        smallest = right;
      }

      if (smallest === idx) {
        break;
      }

      const temp = this.heap[idx];
      this.heap[idx] = this.heap[smallest];
      this.heap[smallest] = temp;
      idx = smallest;
    }

    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const dist = new Float64Array(N + 1).fill(Infinity);
const pq = new MinHeap();

for (const start of interviewers) {
  dist[start] = 0;
  pq.push(start, 0);
}

while (!pq.isEmpty()) {
  const [curr, currentCost] = pq.pop();

  if (currentCost > dist[curr]) {
    continue;
  }

  for (let i = 0; i < graph[curr].length; i++) {
    const [next, cost] = graph[curr][i];
    const nextCost = currentCost + cost;

    if (nextCost < dist[next]) {
      dist[next] = nextCost;
      pq.push(next, nextCost);
    }
  }
}

let maxNode = 0;
let maxDist = -1;

for (let i = 1; i <= N; i++) {
  if (dist[i] !== Infinity && dist[i] > maxDist) {
    maxDist = dist[i];
    maxNode = i;
  }
}

console.log(maxNode);
console.log(maxDist);
