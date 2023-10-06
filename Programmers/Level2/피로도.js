function solution(k, dungeons) {
  const permutations = getPermutations(dungeons);
  let answer = -1;

  for (const dungeon of permutations) {
    let count = 0;
    let fatigue = k; // 현재 피로도

    for (const [needFatigue, useFatigue] of dungeon) {
      //최소필요피로도, 소모피로도
      if (fatigue >= needFatigue) {
        count++;
        fatigue -= useFatigue; //현재피로도 - 소모피로도
      }
    }

    answer = Math.max(answer, count); //현재 answer 값이랑 count 값 중 더 큰 값을 저장.
  }

  return answer;
}

// 순열
function getPermutations(arr) {
  if (arr.length === 1) return [arr]; // 원소를 배열로

  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const fixed = arr[i];
    const rest = arr.filter((_, index) => index !== i);
    const permutations = getPermutations(rest);

    for (const permutation of permutations) {
      results.push([fixed, ...permutation]);
    }
  }

  return results;
}
