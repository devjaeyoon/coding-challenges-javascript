const A = Number(require('fs').readFileSync('/dev/stdin').toString());

const result = [];

for (let n = 1; n <= A; n++) {
    if (30 % (n + 1) === 0) {
        result.push(n)
    }
}

console.log(result.join('\n'));