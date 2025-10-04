const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const initialBoard = input.map((line) => line.split(' ').map(Number));

let maxBlock = 0;

function findMax(board) {
  let currentMax = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] > currentMax) {
        currentMax = board[i][j];
      }
    }
  }

  return currentMax;
}

function move(board, direction) {
  const newBoard = JSON.parse(JSON.stringify(board));

  function processLine(line) {
    const filtered = line.filter((val) => val !== 0);
    const merged = [];

    for (let i = 0; i < filtered.length; i++) {
      if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
        merged.push(filtered[i] * 2);
        i++;
      } else {
        merged.push(filtered[i]);
      }
    }

    while (merged.length < N) {
      merged.push(0);
    }

    return merged;
  }

  if (direction === 2) {
    for (let i = 0; i < N; i++) {
      newBoard[i] = processLine(newBoard[i]);
    }
  } else if (direction === 3) {
    for (let i = 0; i < N; i++) {
      const reversedRow = newBoard[i].reverse();
      const processed = processLine(reversedRow);
      newBoard[i] = processed.reverse();
    }
  } else if (direction === 0) {
    for (let j = 0; j < N; j++) {
      const column = [];
      for (let i = 0; i < N; i++) {
        column.push(newBoard[i][j]);
      }
      const processed = processLine(column);
      for (let i = 0; i < N; i++) {
        newBoard[i][j] = processed[i];
      }
    }
  } else if (direction === 1) {
    for (let j = 0; j < N; j++) {
      const column = [];
      for (let i = 0; i < N; i++) {
        column.push(newBoard[i][j]);
      }
      const reversedColumn = column.reverse();
      const processed = processLine(reversedColumn);
      const finalColumn = processed.reverse();
      for (let i = 0; i < N; i++) {
        newBoard[i][j] = finalColumn[i];
      }
    }
  }

  return newBoard;
}

function dfs(board, moveCount) {
  if (moveCount === 5) {
    maxBlock = Math.max(maxBlock, findMax(board));
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nextBoard = move(board, i);
    dfs(nextBoard, moveCount + 1);
  }
}

dfs(initialBoard, 0);

console.log(maxBlock);
