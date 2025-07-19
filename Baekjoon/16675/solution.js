const [mL, mR, tL, tR] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

function determineWinner(mL, mR, tL, tR) {
  if (tL === 'R' && tR === 'R') {
    if (mL === 'S' && mR === 'S') {
      return 'TK';
    }
    if (mL === 'P' || mR === 'P') {
      return 'MS';
    }
  }
  if (tL === 'P' && tR === 'P') {
    if (mL === 'R' && mR === 'R') {
      return 'TK';
    }
    if (mL === 'S' || mR === 'S') {
      return 'MS';
    }
  }
  if (tL === 'S' && tR === 'S') {
    if (mL === 'P' && mR === 'P') {
      return 'TK';
    }
    if (mL === 'R' || mR === 'R') {
      return 'MS';
    }
  }
  if (mL === 'R' && mR === 'R') {
    if (tL === 'S' && tR === 'S') {
      return 'MS';
    }
    if (tL === 'P' || tR === 'P') {
      return 'TK';
    }
  }
  if (mL === 'P' && mR === 'P') {
    if (tL === 'R' && tR === 'R') {
      return 'MS';
    }
    if (tL === 'S' || tR === 'S') {
      return 'TK';
    }
  }
  if (mL === 'S' && mR === 'S') {
    if (tL === 'P' && tR === 'P') {
      return 'MS';
    }
    if (tL === 'R' || tR === 'R') {
      return 'TK';
    }
  }
  return '?';
}

console.log(determineWinner(mL, mR, tL, tR));
