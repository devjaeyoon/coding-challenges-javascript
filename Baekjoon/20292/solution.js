const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const output = [];
let readSet = new Set();
let writeSet = new Set();

for (let i = 0; i < input.length; i++) {
  const line = input[i];
  if (line === 'EXIT') {
    output.push(line);
    break;
  }

  const parts = line.split(/\s+/);
  const type = parts[0];

  if (type === 'READ') {
    const target = parts[1];

    if (writeSet.has(target)) {
      output.push('WAIT');
      readSet.clear();
      writeSet.clear();
    }

    readSet.add(target);
    output.push(line);
  } else if (type === 'WRITE') {
    const src = parts[1];
    const dest = parts[3];

    if (writeSet.has(src) || readSet.has(dest) || writeSet.has(dest)) {
      output.push('WAIT');
      readSet.clear();
      writeSet.clear();
    }

    readSet.add(src);
    writeSet.add(dest);
    output.push(line);
  }
}

console.log(output.join('\n'));
