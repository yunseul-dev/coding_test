function solution(ability) {
  const n = ability.length;
  const m = ability[0].length;

  let maxSum = -Infinity;

  function backtrack(idx, curSum, used) {
    if (idx === m) {
      maxSum = Math.max(maxSum, curSum);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used.includes(i)) continue;

      used.push(i);
      backtrack(idx + 1, curSum + ability[i][idx], used);
      used.pop();
    }
  }

  backtrack(0, 0, []);

  return maxSum;
}

/**
 * arr 배열 대신 maxSum 변수를 사용하여 최대 합계 추적
 * 모든 조합을 생성X 최대 합계 계산
 */

/** 런타임 에러
 * getAvailable() 함수는 가능한 모든 조합을 생성하는 함수
 * 하지만 이러한 방식으로 모든 조합을 생성하고 계산하는 것은 입력이 큰 경우에 비효율적
 */

// function getAvailable(k, l) {
//   const arr = [];

//   function backtrack(cur, used) {
//     if (cur.length === l) {
//       arr.push([...cur]);
//       return;
//     }

//     for (let i = 0; i < k; i++) {
//       if (used.includes(i)) continue;

//       backtrack([...cur, i], [...used, i]);
//     }
//   }

//   backtrack([], []);

//   return arr;
// }

// function solution(ability) {
//   let arr = getAvailable(ability.length, ability[0].length);

//   const sumArr = arr.map((arr) => {
//     return arr.reduce((acc, val, i) => acc + ability[val][i], 0);
//   });

//   return Math.max(...sumArr);
// }

const arr1 = [
  [40, 10, 10],
  [20, 5, 0],
  [30, 30, 30],
  [70, 0, 70],
  [100, 100, 100],
];

const arr2 = [
  [20, 30],
  [30, 20],
  [20, 30],
];

console.log(solution(arr1));
console.log(solution(arr2));
