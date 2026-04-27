const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const maze = input.map((line) => line.split(''));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

class Node {
  constructor(r, c, keys, dist) {
    this.r = r;
    this.c = c;
    this.keys = keys;
    this.dist = dist;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(r, c, keys, dist) {
    const newNode = new Node(r, c, keys, dist);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;

    return node;
  }

  isEmpty() {
    return this.size === 0;
  }
}

function escapeMaze() {
  let startR = -1;
  let startC = -1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maze[i][j] === '0') {
        startR = i;
        startC = j;
        maze[i][j] = '.';
      }
    }
  }

  const queue = new Queue();
  queue.push(startR, startC, 0, 0);

  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => new Array(64).fill(false)),
  );
  visited[startR][startC][0] = true;

  while (!queue.isEmpty()) {
    const { r, c, keys, dist } = queue.shift();

    if (maze[r][c] === '1') {
      return dist;
    }

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= N || nc < 0 || nc >= M || maze[nr][nc] === '#') {
        continue;
      }

      const nextChar = maze[nr][nc];
      let nKeys = keys;

      if (nextChar >= 'a' && nextChar <= 'f') {
        const keyBit = 1 << (nextChar.charCodeAt(0) - 97);
        nKeys |= keyBit;
      }

      if (nextChar >= 'A' && nextChar <= 'F') {
        const doorBit = 1 << (nextChar.charCodeAt(0) - 65);
        if ((keys & doorBit) === 0) {
          continue;
        }
      }

      if (!visited[nr][nc][nKeys]) {
        visited[nr][nc][nKeys] = true;
        queue.push(nr, nc, nKeys, dist + 1);
      }
    }
  }

  return -1;
}

console.log(escapeMaze());
