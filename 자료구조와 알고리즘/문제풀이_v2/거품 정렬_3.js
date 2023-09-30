/**거품 정렬이란?
 * 거품 정렬 알고리즘을 나타내면 다음과 같다.
 * 다음과 같은 소스를 진행시켰을 때, 어떤 값이 출려고지는지 구해보자
 */

// let N = 5;
// let arr = [10, 1, 5, 2, 3];

// let changed = false;
// for (let i = 1; i <= N + 1; i++) {
//   changed = false;
//   for (let j = 1; j <= N - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       changed = true[(arr[j], arr[j + 1])] = [arr[j + 1], arr[j]];
//     }
//   }
//   if (changed == false) {
//     // 더이상 정렬하지 않을 때의 i 값을 출력한다.
//     console.log(i);
//     break;
//   }
// }

/**
 * 이 문제는 결국 버블 소트가 몇 단계를 거친지 묻는 문제
 *
 * 10 1 5 2 3을 볼 때
 *
 * 1단계
 * 10 1 5 2 3
 * 1 10 5 2 3
 * 1 5 10 2 3
 * 1 5 2 10 3
 * 1 5 2 3 10
 *
 * 2단계
 * 1 5 2 3 10
 * 1 2 5 3 10
 * 1 2 3 5 10
 *
 * 3단계
 * X
 * ...
 *
 * 즉, 단계가 지남에 따라 swap되는 값은 늘 왼쪽으로 한칸씩 이동하게 됨
 * 따라서 정렬 전 인덱스와 정렬 후 인덱스의 차이가 가장 큰 값이 정답
 * 답은 단계이므로 + 1
 *
 * -> 즉, 왼쪽으로 가장 많이 움직인 값이 버블 정렬에서 몇 단계를 거친지 알려주게 되는 것
 */

let N = 5;
let arr = [10, 1, 5, 2, 3];
arr = arr.map((elem, idx) => [elem, idx]);
console.log(arr);

arr.sort((a, b) => a[0] - b[0]);
console.log(arr);

let change = 0;

for (let i = 0; i < N; i++) {
  // arr[i][1] - i + 1 = 기존의 인덱스 값 - 현재 인덱스 값 + 1(단계에 대한 덧셈)
  change = Math.max(change, arr[i][1] - i + 1);
}

console.log(change);
