const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [B, C, D] = input.shift().split(' ').map(Number);
const burgerPrices = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const sideMenuPrices = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const beveragePrices = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let beforeSalePrice = 0;

beforeSalePrice += burgerPrices.reduce((acc, cur) => acc + cur, 0);
beforeSalePrice += sideMenuPrices.reduce((acc, cur) => acc + cur, 0);
beforeSalePrice += beveragePrices.reduce((acc, cur) => acc + cur, 0);

console.log(beforeSalePrice);

const minimumSaleUnit = Math.min(B, C, D);
let afterSalePrice = 0;

afterSalePrice += burgerPrices.reduce((acc, cur, idx) => {
  return idx < minimumSaleUnit ? acc + cur * 0.9 : acc + cur;
}, 0);
afterSalePrice += sideMenuPrices.reduce((acc, cur, idx) => {
  return idx < minimumSaleUnit ? acc + cur * 0.9 : acc + cur;
}, 0);
afterSalePrice += beveragePrices.reduce((acc, cur, idx) => {
  return idx < minimumSaleUnit ? acc + cur * 0.9 : acc + cur;
}, 0);

console.log(afterSalePrice);
