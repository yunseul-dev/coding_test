/**누적 합
 * 숫자 N이 주어질 때, N*N의 배열에서 첫 행과 첫 열은 모두 1로 초기화한 후
 * 현재 위치의 왼쪽, 위 값의 합을 더해서 저장해보자
 */

let N = 5;

let arr = Array.from({ length: N }, (elem) =>
  Array.from({ length: N }, (elem) => 1)
);

let rowLen = arr.length; // 세로길이
for (let i = 1; i < rowLen; i++) {
  let colLen = arr[i].length;
  for (let j = 1; j < colLen; j++) {
    arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
  }
}

console.log(arr);
