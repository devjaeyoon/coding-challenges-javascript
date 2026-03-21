const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'example.txt')
  .toString()
  .trim()
  .split(/\r?\n/);

const folders = new Map();
const results = [];
const [N, M] = input[0].split(' ').map(Number);

let idx = 1;

function getFolder(name) {
  if (!folders.has(name)) {
    folders.set(name, { files: new Set(), subfolders: new Set() });
  }

  return folders.get(name);
}

getFolder('main');

for (let i = 0; i < N + M; i++) {
  const [P, F, C] = input[idx++].split(' ');
  const parentFolder = getFolder(P);

  if (C === '1') {
    parentFolder.subfolders.add(F);
    getFolder(F);
  } else {
    parentFolder.files.add(F);
  }
}

const K = parseInt(input[idx++], 10);

for (let i = 0; i < K; i++) {
  const [pathA, pathB] = input[idx++].split(' ');

  const partsA = pathA.split('/');
  const nameA = partsA[partsA.length - 1];
  const parentNameA = partsA[partsA.length - 2];

  const partsB = pathB.split('/');
  const nameB = partsB[partsB.length - 1];

  const folderA = getFolder(nameA);
  const folderB = getFolder(nameB);
  const parentFolderA = getFolder(parentNameA);

  if (parentFolderA) {
    parentFolderA.subfolders.delete(nameA);
  }

  for (const file of folderA.files) {
    folderB.files.add(file);
  }

  for (const sub of folderA.subfolders) {
    folderB.subfolders.add(sub);
  }

  folders.delete(nameA);
}

const Q = parseInt(input[idx++], 10);

for (let i = 0; i < Q; i++) {
  const queryPath = input[idx++];
  const parts = queryPath.split('/');
  const target = parts[parts.length - 1];
  const uniqueFiles = new Set();
  const stack = [target];

  let totalFiles = 0;

  while (stack.length > 0) {
    const curr = stack.pop();
    const folder = folders.get(curr);

    if (!folder) {
      continue;
    }

    totalFiles += folder.files.size;

    for (const f of folder.files) {
      uniqueFiles.add(f);
    }

    for (const sub of folder.subfolders) {
      stack.push(sub);
    }
  }

  results.push(`${uniqueFiles.size} ${totalFiles}`);
}

console.log(results.join('\n'));
