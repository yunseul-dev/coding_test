/**섬의 개수
 * N * M의 지도가 주어질 때, 섬의 개수를 구해보자.
 * 이때 0으로 된 부분은 바다, 1로 된 부분은 육지이며, 1이 인접하여 이어진 부분들의 모음을 섬이라 한다.
 */

let [N, M] = [5, 6];
let arr = [
  [1, 1, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1],
];

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

let visit = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
let queue = [];

let land = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visit[i][j] === 0 && arr[i][j] === 1) {
      land++;

      queue.push([i, j]);

      while (queue.length) {
        let [y, x] = queue.shift();

        // if (visit[y][x]) {
        //   continue;
        // }

        for (let i = 0; i < 4; i++) {
          let ny = y + dy[i];
          let nx = x + dx[i];

          if (
            0 <= ny &&
            ny < N &&
            0 <= nx &&
            nx < M &&
            arr[ny][nx] === 1 &&
            visit[ny][nx] === 0
          ) {
            visit[ny][nx] = 1;
            queue.push([ny, nx]);
          }
        }
      }
    }
  }
}

console.log(land);
