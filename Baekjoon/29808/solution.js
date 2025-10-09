const S = BigInt(require('fs').readFileSync('/dev/stdin').toString());

const postalCode = 4763n;

if (S % postalCode !== 0n) {
  console.log(0);
} else {
  const totalSum = S / postalCode;

  const solutions = new Set();
  const keFactors = [108n, 508n];
  const msFactors = [212n, 305n];

  for (let i = 0; i <= 200; i++) {
    const diffKE = BigInt(i);

    for (const keFactor of keFactors) {
      const value1 = diffKE * keFactor;

      if (value1 > totalSum) {
        continue;
      }

      const remainder = totalSum - value1;

      for (const msFactor of msFactors) {
        if (remainder % msFactor === 0n) {
          const diffMS = remainder / msFactor;

          if (diffMS >= 0n && diffMS <= 200n) {
            solutions.add(`${diffKE} ${diffMS}`);
          }
        }
      }
    }
  }

  const result = Array.from(solutions)
    .map((s) => s.split(' ').map(Number))
    .sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      }

      return a[1] - b[1];
    });

  console.log(result.length);
  result.forEach((sol) => {
    console.log(sol.join(' '));
  });
}
