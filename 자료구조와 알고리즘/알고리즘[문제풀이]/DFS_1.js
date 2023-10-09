/**경험치 모으기
 * N개의 몬스터가 존재하고 해당 몬스터를 잡을 때 소모되는 HP와 얻는 경험치가 존재한다.
 * 이때 HP가 100으로 시작하며, 0 또는 음수가 되면 죽게 되는데, 죽지 않으면서 최대 경험치를 얼마나 얻을 수 있는지 구해보자.
 * (1 <= N <= 20)
 */

function getMaxExp(N, cur, hp, damage, exp) {
  // cur번째 몬스터를 상대하고 있다.
  let maxExp = 0;

  for (let i = cur; i < N; i++) {
    // i를 0이 아닌 cur로 두는 이유는, 재귀로 돌 때 다시 0부터 for문을 도는 것을 방지
    if (hp - damage[i] <= 0) {
      continue;
    }

    maxExp = Math.max(
      maxExp,
      exp[i] + getMaxExp(N, i + 1, hp - damage[i], damage, exp)
    );
  }

  return maxExp;
}

// let N = 3;
// let damage = [1, 21, 79];
// let exp = [20, 30, 25];

let N = 8;
let damage = [100, 15, 1, 2, 3, 4, 6, 5];
let exp = [49, 40, 1, 2, 3, 4, 5, 4];

let ans = getMaxExp(N, 0, 100, damage, exp);
console.log(ans);
