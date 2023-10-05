/**이항 계수
 * 자연수 N과 정수 K가 주어질 때 이항 계수(NK)를 10007로 나눈 나머지를 구해보자
 * (1 <= N <= 1000, 0 <= K <= N)
 */

/**팩토리얼
 * C[n][k] = C[n-1][k-1] + C[n-1][k]
 */

// 공식: (nCk) = n! / (k! * (n-k)!)
// 5C2 = 10 -> 5 * 4 / (2 *1)   // => 해당 공식은 큰 수에 대해서는 적용할 수 없다. 따라서
// 파스칼의 삼각형
// nCr = n-1Cr-1 + n-1Cr
// dp[n][r] = dp[n-1][r-1] + dp[n-1][r]

const MOD = 10007;
// let [N, K] = [5, 2];
let [N, K] = [10, 3];

let dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }, () => 0)
);

dp[0][0] = 1;
dp[1][0] = 1;
dp[1][1] = 1;

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= K; j++) {
    if (j == 0 || j == i) {
      dp[i][j] = 1;
      continue;
    }

    dp[i][j] = (dp[i - 1][j - 1] % MOD) + (dp[i - 1][j] % MOD);
    dp[i][j] %= MOD;
  }
}

console.log(dp[N][K]);
