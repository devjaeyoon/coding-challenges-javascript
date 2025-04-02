const N = Number(require('fs').readFileSync('/dev/stdin').toString());

function solution(weight) {
  if (weight % 5 === 0) {
    return weight / 5;
  }

  let copiedWeight = weight;
  let cnt = 0;

  while (copiedWeight % 5 !== 0) {
    if (copiedWeight <= 2) {
      return -1;
    }

    copiedWeight -= 3;
    cnt += 1;
  }

  cnt += copiedWeight / 5;

  return cnt;
}

console.log(solution(N));
