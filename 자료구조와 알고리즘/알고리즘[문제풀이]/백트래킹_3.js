/**알파벳 탐색
 * N*M으로 구성된 보드에서 각 칸에 대문자 알파벳이 적혀있고 말은 (1,1)에 위치해 있다.
 * 말은 인접한 상,하,좌,우 칸으로 이동 할 수 있을 때,
 * 알파벳을 중복으로 거치지 않으면서 가장 많이 이동하는 횟수를 구해보자.
 */

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

let [N, M] = [5, 5];
let arr = ['IEFCJ', 'FHFKC', 'FFALF', 'HFGCF', 'HMCHH'];
let visit = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
let alpha = {};
for (let i = 0; i < 26; i++) {
  const A = 'A'.charCodeAt();
  alpha[String.fromCharCode(i + A)] = 0;
}

let ans = 0;

function go(x, y, cnt, str) {
  console.log(`x: ${x} y: ${y} cnt: ${cnt} str: ${str}`);

  ans = Math.max(ans, cnt);

  for (let i = 0; i < 4; i++) {
    const [ny, nx] = [y + dy[i], x + dx[i]];

    if (!(0 <= nx && nx < N && 0 <= ny && ny < M)) {
      continue;
    }

    if (visit[nx][ny] === 0 && alpha[arr[nx][ny]] === 0) {
      visit[nx][ny] = 1;
      alpha[arr[nx][ny]] = 1;
      go(nx, ny, cnt + 1, str + arr[nx][ny]);
      alpha[arr[nx][ny]] = 0;
      visit[nx][ny] = 0;
    }
  }
}

go(-1, 0, 0, ''); // (0,0)을 밟을 때  : (-1,0)을 출발점으로 하여 (0,0)을 강제로 밟게 함
// go(0, 0, 0, '');  // (0,1)을 밟지 않을 때 -> (0,1) 혹은 (1,0)부터 밟음
// => 둘 중 더 큰 값을 찾아야함
console.log(ans);
