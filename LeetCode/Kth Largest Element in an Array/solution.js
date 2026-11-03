/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  const heap = [];

  const swap = function (i, j) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  };

  const push = function (value) {
    heap.push(value);

    let index = heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (heap[parent] <= heap[index]) break;

      swap(parent, index);
      index = parent;
    }
  };

  const pop = function () {
    if (heap.length === 1) {
      return heap.pop();
    }

    const min = heap[0];
    heap[0] = heap.pop();

    let index = 0;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left;
      }

      if (right < heap.length && heap[right] < heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) {
        break;
      }

      swap(index, smallest);
      index = smallest;
    }

    return min;
  };

  for (const num of nums) {
    push(num);

    if (heap.length > k) {
      pop();
    }
  }

  return heap[0];
};
