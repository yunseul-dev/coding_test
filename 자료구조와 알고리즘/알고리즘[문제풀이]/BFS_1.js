/**화분에 물주기
 * N개의 화분과 K개의 물을 주는 시작점이 있다.
 * 화분에 물을 주면 물은 1초에 한번씩 인접한 위치로 퍼지게 된다.
 * 이때 모든 화분에 물을 주게 되는 최소 시간을 구해보자.
 */

function bfs(N, start) {
  let ans = 0;

  let visit = Array.from({ length: N + 1 }, () => 0);
  let queue = [];

  let len = start.length;
  for (let i = 0; i < len; i++) {
    queue.push([start[i], 1]);
  }

  while (queue.length) {
    let [cur, time] = queue.shift();

    if (visit[cur] || cur < 1 || cur > N) {
      continue;
    }

    visit[cur] = 1;
    ans = Math.max(ans, time);

    queue.push([cur - 1, time + 1]);
    queue.push([cur + 1, time + 1]);
  }

  return ans;
}

// let [N, K] = [5, 1];
// let start = [3];

// let [N, K] = [3, 3];
// let start = [1, 2, 3];

let [N, K] = [4, 1];
let start = [1];

let ans = bfs(N, start);
console.log(ans);
