function solution(queries) {
  function dfs(generation, idx) {
    if (generation === 1) return 'Rr';
    const prve = dfs(
      generation - 1,
      Math.floor(idx / 4) + (idx % 4 !== 0 ? 1 : 0)
    );
    if (prve === 'RR') return 'RR';
    if (prve === 'rr') return 'rr';
    return ['RR', 'Rr', 'Rr', 'rr'][(idx - 1) % 4];
  }

  return queries.map(([n, m]) => dfs(n, m));
}

// function wandu(parent) {
//   const childWandu = {
//     RR: ['RR', 'RR', 'RR', 'RR'],
//     Rr: ['RR', 'Rr', 'Rr', 'rr'],
//     rr: ['rr', 'rr', 'rr', 'rr'],
//   };

//   return childWandu[parent];
// }

// function solution(queries) {
//   return queries.map(([n, m]) => {
//     let answer = [['Rr']];

//     for (let i = 1; i < n; i++) {
//       const parents = answer[i - 1];
//       let tmp = [];

//       for (const parent of parents) {
//         tmp.push(...wandu(parent));
//       }

//       answer.push(tmp);
//     }

//     return answer[n - 1][m - 1];
//   });
// }
// 실패 (signal: aborted (core dumped))

let arr1 = [[3, 5]];
let arr2 = [
  [3, 8],
  [2, 2],
];
let arr3 = [
  [3, 1],
  [2, 3],
  [3, 9],
];
let arr4 = [[4, 26]];

console.log(solution(arr3));

console.log(Math.floor(26 / 4) + (26 % 4 !== 0 ? 1 : 0));
