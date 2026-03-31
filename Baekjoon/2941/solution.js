const word = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim();

const croatianAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let result = word;

for (const alphabet of croatianAlphabets) {
  result = result.split(alphabet).join('*');
}

console.log(result.length);
