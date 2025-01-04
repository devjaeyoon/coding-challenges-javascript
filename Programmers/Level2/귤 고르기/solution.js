function solution(k, tangerine) {
  const tangerineDictionary = {};

  tangerine.map((size) => {
    tangerineDictionary[size] = (tangerineDictionary[size] || 0) + 1;
  });

  const sortedTangerineCounts = Object.values(tangerineDictionary).sort((a, b) => b - a);
  let answer = 1;

  for (const sortedTangerineCount of sortedTangerineCounts) {
    k -= sortedTangerineCount;

    if (k > 0) {
      answer += 1;
    }
  }

  return answer;
}
