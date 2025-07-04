const [charSet, password] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function passwordAttempts(charSet, password) {
  const mod = 900528n;
  const base = BigInt(charSet.length);
  const charIndex = {};

  for (let i = 0; i < charSet.length; i++) {
    charIndex[charSet[i]] = BigInt(i);
  }

  let attempts = 0n;
  let pow = 1n;

  for (let i = 1; i < password.length; i++) {
    pow = (pow * base) % mod;
    attempts = (attempts + pow) % mod;
  }

  let pos = 0n;

  for (let i = 0; i < password.length; i++) {
    pos = (pos * base + charIndex[password[i]]) % mod;
  }

  attempts = (attempts + pos + 1n) % mod;

  return attempts.toString();
}

console.log(passwordAttempts(charSet, password));
