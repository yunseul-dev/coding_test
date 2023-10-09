/** 섬의 개수
 * N*M의 지도가 주어질 때, 섬의 개수를 구해보자.
 * 이때 0으로 된 부분은 바다, 1로된 부분은 육지이며, 1이 인접하여 이어진 부분들의 모음을 섬이라 한다.
 */

function findLand(N, M, i, j, arr, visit) {
  if (!(0 <= i && i < N && 0 <= j && j < M)) {
    return; // Map 밖이기 때문에 의미없다. return
  }

  if (arr[i][j] === 0 || visit[i][j] === 1) {
    return; // 바다나 이미 방문한 곳은 다시 방문할 필요가 없다.
  }

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  visit[i][j] = 1;
  for (let t = 0; t < 4; t++) {
    findLand(N, M, i + dy[t], j + dx[t], arr, visit); // for문을 통해 동서남북으로 탐색해주겠다.
  }
}

let [N, M] = [5, 4];
let arr = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
]; // 3

// console.log(arr);

let visit = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
);

// console.log(visit);

let land = 0; // 총 섬의 수
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visit[i][j] !== 1 && arr[i][j] === 1) {
      console.log('---before---');
      console.log(visit);
      findLand(N, M, i, j, arr, visit);
      console.log('---after---');
      console.log(visit);
      land++;
      console.log(land);
    }
  }
}

console.log(land);
