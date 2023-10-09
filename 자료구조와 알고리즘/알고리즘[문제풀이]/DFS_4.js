/** 조합
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구해보자.
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 오름차순으로 정렬
 * (1 <= N, M <= 8)
 */

function dfs(N, M, cur, ans) {
  if (ans.length === M) {
    console.log(ans);
    return;
  }

  for (let i = cur; i <= N; i++) {
    ans.push(i);
    dfs(N, M, i + 1, ans);
    console.log('pop 전: ', ans);
    ans.pop();
    console.log('pop 후: ', ans);
  }
}

let [N, M] = [4, 2]; //  1 ~ 4
dfs(N, M, 1, []);
