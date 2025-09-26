const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const structureInfo = input.splice(0, N + M);
const Q = Number(input.shift());
const queries = input;
const fileSystem = new Map();

function ensureFolder(folderName) {
  if (!fileSystem.has(folderName)) {
    fileSystem.set(folderName, { folders: [], files: [] });
  }
}

for (const line of structureInfo) {
  const [parent, name, type] = line.split(' ');
  ensureFolder(parent);

  if (type === '1') {
    fileSystem.get(parent).folders.push(name);
    ensureFolder(name);
  } else {
    fileSystem.get(parent).files.push(name);
  }
}

const memo = new Map();

function getFilesRecursively(folderName) {
  if (memo.has(folderName)) {
    return memo.get(folderName);
  }

  const currentFolder = fileSystem.get(folderName);
  let allFiles = [...currentFolder.files];

  for (const subfolder of currentFolder.folders) {
    const subfolderFiles = getFilesRecursively(subfolder);
    allFiles.push(...subfolderFiles);
  }

  memo.set(folderName, allFiles);

  return allFiles;
}

const results = [];
for (const queryPath of queries) {
  const pathParts = queryPath.split('/');
  const targetFolder = pathParts[pathParts.length - 1];
  const files = getFilesRecursively(targetFolder);
  const uniqueFilesCount = new Set(files).size;
  const totalFilesCount = files.length;

  results.push(`${uniqueFilesCount} ${totalFilesCount}`);
}

console.log(results.join('\n'));
