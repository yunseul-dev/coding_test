function solution(k, dungeons) {
  var answer = -1;

  const permutaions = getPermutations(dungeons, dungeons.length);

  for (let i = 0; i < permutaions.length; i++) {
    const dungeon = permutaions[i];

    let count = 0;
    let fatigue = k; //현재 피로도
    for (let j = 0; j < dungeon.length; j++) {
      const [needFatigue, useFatigue] = dungeon[j]; //최소필요피로도, 소모피로도
      if (fatigue >= needFatigue) {
        count++;
        fatigue -= useFatigue; //현재피로도 - 소모피로도
      }
    }
    answer = Math.max(answer, count); //현재 answer 값이랑 count 값 중 더 큰 값을 저장.
  }

  return answer;
}

// 다른 풀이(순열)
const getPermutations = (arr, num) => {
  if (num === 1) return arr.map((v) => [v]); //원소를 배열로

  const results = [];
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutaions = getPermutations(rest, num - 1);
    const attached = permutaions.map((v) => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
};
