/**최단 경로
 * 방향 그래프가 주어지면 모든 정점간의 최단 경로를 구해보자.
 * 입력으로는 첫째줄에 정점의 수 V, 간선의 수 E, 시작점 S이 주어지고 두번째 줄부터는 간선의 수만큼 u,v,w가 주어진다.
 * (1 <= V <= 100, 1 <= E <= 3000, 1 <= S <= V. -10000 <= w <= 10000 )
 */

let [V, E] = [5, 14];
let input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [3, 5, 10],
  [3, 1, 8],
  [1, 4, 2],
  [5, 1, 7],
  [3, 4, 2],
  [5, 2, 4],
];

let graph = Array.from({ length: V + 1 }, () =>
  Array.from({ length: V + 1 }, () => Infinity)
);

for (let i = 1; i <= V; i++) {
  graph[i][i] = 0;
}

input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from][to] = val;
});

// 경유지
for (let k = 1; k <= V; k++) {
  // 시작점
  for (let x = 1; x <= V; x++) {
    // 도착점
    for (let y = 1; y <= V; y++) {
      if (graph[x][y] > graph[x][k] + graph[k][y]) {
        graph[x][y] = graph[x][k] + graph[k][y];
      }
    }
  }
}

console.log(graph);
