/**모든 경우의 수
 * N개의 숫자가 주어질 때 + 혹은 -를 이용하여 K라는 값을 만들 때, 그러한 모든 경우의 수를 구해보자.
 * (1 <= N <= 10, 0 <= arr[i] <= 100, 0 <= K <= 1000)
 */

function calc(N, K, arr, cur, ans, expr) {
  console.log(
    `len: ${expr.length} ans: ${ans} ans === K: ${ans === K} expr: ${expr}`
  );

  let cnt = 0;

  if (expr.length === N && ans === K) {
    console.log(expr);
    return 1;
  }

  for (let i = cur; i < N; i++) {
    cnt += calc(N, K, arr, i + 1, ans + 1, [...expr, '+1']);
    cnt += calc(N, K, arr, i + 1, ans - 1, [...expr, '-1']);
    // expr.push('+1');
    // i++;
    // ans = ans + 1;
    // cnt += calc(N, K, arr, i, ans, expr);
    // ans = ans - 1;
    // i--;
    // expr.pop();
    // expr.push('-1');
    // i++;
    // ans = ans - 1;
    // cnt += calc(N, K, arr, i, ans, expr);
    // ans = ans + 1;
    // i--;
    // expr.pop();
  }

  return cnt;
}

let [N, K] = [5, 3];
let arr = [1, 1, 1, 1, 1];

let ret = calc(N, K, arr, 0, 0, []);
console.log(ret);
