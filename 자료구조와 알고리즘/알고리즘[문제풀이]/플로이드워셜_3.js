/**진짜 친구
 * N명의 사람과 각 사람들에 대한 친구 관계가 주어질 때, 진짜 친구의 수를 모두 구해보자.
 * 진짜 친구란, 두 사람이 친구거나 A와 B가 친구며 B와 C가 친구면 A와 C는 진짜 친구이다.
 * 이때 A-B, B-C, C-D 관계로 친구인 경우, A와 D는 진짜 친구가 아니다.
 * (1 <= N <= 50, 각 사람이 친구면 T, 아니면 F가 주어진다.)
 */

// let V = 3;
// let input = ['FTT', 'TFT', 'TTF'];

let V = 5;
let input = ['FTFFF', 'TFTFF', 'FTFTF', 'FFTFT', 'FFFTF'];

let graph = Array.from({ length: V }, () =>
  Array.from({ length: V }, () => Infinity)
);

for (let i = 0; i < V; i++) {
  graph[i][i] = 0;
}

for (let i = 0; i < V; i++) {
  for (let j = 0; j < V; j++) {
    if (input[i][j] === 'T') {
      graph[i][j] = 1;
      graph[j][i] = 1;
    }
  }
}

console.log(graph);

// 경유지
for (let k = 0; k < V; k++) {
  // 시작점
  for (let x = 0; x < V; x++) {
    // 도착점
    for (let y = 0; y < V; y++) {
      if (graph[x][y] > graph[x][k] + graph[k][y]) {
        graph[x][y] = graph[x][k] + graph[k][y];
      }
    }
  }
}

console.log(graph);

let ans = 0;
for (let i = 0; i < V; i++) {
  for (let j = 0; j < V; j++) {
    if (graph[i][j] <= 2) {
      ans += graph[i][j];
    }
  }
}

console.log(ans);
