const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const cities = input.map((line) => line.split(' ').map(Number));

const houses = [];
const chickenShops = [];

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (cities[r][c] === 1) {
      houses.push([r, c]);
    } else if (cities[r][c] === 2) {
      chickenShops.push([r, c]);
    }
  }
}

let minCityChickenDistance = Infinity;

function findCombinations(startIndex, selectedShops) {
  if (selectedShops.length === M) {
    let currentCityDistance = 0;

    for (const house of houses) {
      let minDistanceToHouse = Infinity;

      for (const shop of selectedShops) {
        const distance =
          Math.abs(house[0] - shop[0]) + Math.abs(house[1] - shop[1]);
        minDistanceToHouse = Math.min(minDistanceToHouse, distance);
      }

      currentCityDistance += minDistanceToHouse;
    }

    minCityChickenDistance = Math.min(
      minCityChickenDistance,
      currentCityDistance
    );

    return;
  }

  for (let i = startIndex; i < chickenShops.length; i++) {
    selectedShops.push(chickenShops[i]);
    findCombinations(i + 1, selectedShops);
    selectedShops.pop();
  }
}

findCombinations(0, []);

console.log(minCityChickenDistance);
