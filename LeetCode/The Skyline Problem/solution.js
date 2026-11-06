/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

var getSkyline = function (buildings) {
  const events = [];

  for (const [left, right, height] of buildings) {
    events.push([left, -height, right]);
    events.push([right, 0, 0]);
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const heap = [[0, Infinity]];

  const swap = function (i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  };

  const push = function (item) {
    heap.push(item);

    let index = heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (heap[parent][0] >= heap[index][0]) {
        break;
      }

      swap(parent, index);
      index = parent;
    }
  };

  const pop = function () {
    if (heap.length === 1) {
      return heap.pop();
    }

    const top = heap[0];
    heap[0] = heap.pop();

    let index = 0;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let largest = index;

      if (left < heap.length && heap[left][0] > heap[largest][0]) {
        largest = left;
      }

      if (right < heap.length && heap[right][0] > heap[largest][0]) {
        largest = right;
      }

      if (largest === index) {
        break;
      }

      swap(index, largest);
      index = largest;
    }

    return top;
  };

  const result = [];
  let prevHeight = 0;

  for (const [x, negHeight, right] of events) {
    while (heap[0][1] <= x) {
      pop();
    }

    if (negHeight !== 0) {
      push([-negHeight, right]);
    }

    const currentHeight = heap[0][0];

    if (currentHeight !== prevHeight) {
      result.push([x, currentHeight]);
      prevHeight = currentHeight;
    }
  }

  return result;
};
