const S = require('fs').readFileSync('/dev/stdin').toString().trim();

if (S === 'fdsajkl;' || S === 'jkl;fdsa') {
  console.log('in-out');
} else if (S === 'asdf;lkj' || S === ';lkjasdf') {
  console.log('out-in');
} else if (S === 'asdfjkl;') {
  console.log('stairs');
} else if (S === ';lkjfdsa') {
  console.log('reverse');
} else {
  console.log('molu');
}
