/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  const buckets = new Map();
  const width = valueDiff + 1;

  const getBucketId = (num) => {
    return Math.floor(num / width);
  };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const bucketId = getBucketId(num);

    if (buckets.has(bucketId)) {
      return true;
    }

    if (
      buckets.has(bucketId - 1) &&
      Math.abs(num - buckets.get(bucketId - 1)) <= valueDiff
    ) {
      return true;
    }

    if (
      buckets.has(bucketId + 1) &&
      Math.abs(num - buckets.get(bucketId + 1)) <= valueDiff
    ) {
      return true;
    }

    buckets.set(bucketId, num);

    if (i >= indexDiff) {
      const expiredBucketId = getBucketId(nums[i - indexDiff]);
      buckets.delete(expiredBucketId);
    }
  }

  return false;
};
