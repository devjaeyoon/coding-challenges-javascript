const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const extensionMap = new Map();

for (let i = 0; i < N; i++) {
  const extension = input[i].split('.')[1].trim();

  if (extensionMap.has(extension)) {
    extensionMap.set(extension, extensionMap.get(extension) + 1);
  } else {
    extensionMap.set(extension, 1);
  }
}

const sortedExtensions = [...extensionMap.keys()].sort();

let result = '';
sortedExtensions.forEach((ext) => {
  result += `${ext} ${extensionMap.get(ext)}\n`;
});

console.log(result.trim());
