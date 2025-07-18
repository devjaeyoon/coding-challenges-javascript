const string = require('fs').readFileSync('/dev/stdin').toString().trim();

function isPalindrome(s) {
  const len = s.length;

  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

function longestNonPalindromeLength(s) {
  if (!isPalindrome(s)) {
    return s.length;
  }

  const firstChar = s[0];
  if (s.split('').every((c) => c === firstChar)) {
    return -1;
  }

  return s.length - 1;
}

console.log(longestNonPalindromeLength(string));
