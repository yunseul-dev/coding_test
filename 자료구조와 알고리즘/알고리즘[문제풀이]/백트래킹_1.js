/**로또
 * N개의 수가 주어질 때, 주어진 수 중 6개만 이용하여 로또 번호를 만들어보자.
 */

function lotto(N, arr, cur, numbers) {
  // 백트래킹 -> 휴리스틱을 이용한 방법, 가지치기(프루닝 작업)
  if (numbers.length === 6) {
    console.log(numbers);
    return;
  }

  for (let i = cur; i < N; i++) {
    numbers.push(arr[i]);
    lotto(N, arr, i + 1, numbers);
    numbers.pop();
  }
}

let N = 8;
let arr = [1, 2, 3, 5, 8, 13, 31, 34];

lotto(N, arr, 0, []);
