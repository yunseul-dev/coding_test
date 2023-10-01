/**K만큼 다른 수
 * N개의 수와 K가 주어질 때, 아래 조건에 맞는 (i, j)의 쌍을 구해보자.
 * i<j 이고 |arr[i] - arr[j]| == k을 만족하는 모든 쌍
 * (1 <= N 10000000, 1 <= K < 100, 1 <= arr[i] <= 100)
 */

// let [N, K] = [4, 1];
// let arr = [1, 2, 2, 1];

let [N, K] = [5, 2];
let arr = [3, 2, 1, 5, 4];

let maxVal = Math.max(...arr);
let countArr = Array.from({ length: maxVal + 1 }, () => 0);
arr.forEach((elem) => countArr[elem]++);
console.log(countArr);

// i와 i + K 에 위치한 값들로 만들 수 있는 모든 쌍 => countArr[i] * countArr[i + K]
let ret = 0; // 전체 합
for (let i = 0; i + K <= maxVal; i++) {
  console.log('i: ', i, 'i+K: ', i + K);
  ret += countArr[i] * countArr[i + K];
  console.log(countArr[i], countArr[i + K]);
}

console.log(ret);
