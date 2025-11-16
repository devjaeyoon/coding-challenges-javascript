const trees = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split('\n');

const totalTrees = trees.length;
const treeCounts = {};

for (const tree of trees) {
  treeCounts[tree] = (treeCounts[tree] || 0) + 1;
}

const sortedSpecies = Object.keys(treeCounts).sort();
const result = [];

for (const species of sortedSpecies) {
  const count = treeCounts[species];
  const percentage = ((count / totalTrees) * 100).toFixed(4);

  result.push(`${species} ${percentage}`);
}

console.log(result.join('\n'));
