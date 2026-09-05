/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];

  const isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  };

  const backtrack = (start) => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (!isPalindrome(start, end)) {
        continue;
      }

      path.push(s.slice(start, end + 1));
      backtrack(end + 1);
      path.pop();
    }
  };

  backtrack(0);

  return result;
};
