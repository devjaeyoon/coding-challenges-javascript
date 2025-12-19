class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) {
        break;
      }

      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smaller =
        right < this.heap.length && this.heap[right] < this.heap[left]
          ? right
          : left;

      if (this.heap[index] <= this.heap[smaller]) {
        break;
      }

      [this.heap[index], this.heap[smaller]] = [
        this.heap[smaller],
        this.heap[index],
      ];
      index = smaller;
    }
  }
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const meetings = input.map((line) => line.split(' ').map(Number));

meetings.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

const minHeap = new MinHeap();

for (let i = 0; i < N; i++) {
  const [start, end] = meetings[i];

  if (minHeap.size() > 0 && minHeap.peek() <= start) {
    minHeap.pop();
  }

  minHeap.push(end);
}

console.log(minHeap.size());
