/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  const n = nums.length;

  if (n < 2) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;

  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  if (min === max) {
    return 0;
  }

  const gap = Math.ceil((max - min) / (n - 1));
  const bucketCount = Math.floor((max - min) / gap) + 1;

  const bucketMin = Array(bucketCount).fill(Infinity);
  const bucketMax = Array(bucketCount).fill(-Infinity);
  const used = Array(bucketCount).fill(false);

  for (const num of nums) {
    const index = Math.floor((num - min) / gap);

    bucketMin[index] = Math.min(bucketMin[index], num);
    bucketMax[index] = Math.max(bucketMax[index], num);
    used[index] = true;
  }

  let answer = 0;
  let previousMax = min;

  for (let i = 0; i < bucketCount; i++) {
    if (!used[i]) {
      continue;
    }

    answer = Math.max(answer, bucketMin[i] - previousMax);
    previousMax = bucketMax[i];
  }

  return answer;
};
