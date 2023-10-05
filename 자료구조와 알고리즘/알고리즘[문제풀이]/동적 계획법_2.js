/**최소 점프
 * 제로는 N칸으로 이루어진 징검다리를 점프해서 마지막까지 가야한다.
 * 이때 i번째 징검다리에 쓰여 있는 수가 A[i]일 때 제로는 A[i] 이하만큼 오른쪽으로 점프 할 수 있다.
 * 예를 들어, k번째 칸에 쓰여 있는 수가 3이면 제로는 k+1, k+2, k+3번 칸 중 하나로 점프 할 수 있다.
 * 제로는 가장 왼쪽 징검다리에 있고 가장 오른쪽으로 가야 할 때, 최소 몇 번의 점프로 갈 수 있는지 구해보자.
 */

let N = 10;
let arr = [1, 2, 0, 1, 3, 2, 1, 5, 4, 2];

let dp = Array.from({ length: N + 1 }, () => Infinity);

dp[0] = 0;

for (let i = 0; i < N; i++) {
  let jump = arr[i];

  for (let j = 1; j <= jump; j++) {
    if (i + j > N) {
      continue;
    }

    dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
  }
}

console.log(dp);
console.log(dp[N]);
