/**플로이드-워셜 알고리즘(Floyd-Warchall Algorithm)
 * 그래프에서 모든 정점 간의 최단 경로를 구하는 알고리즘
 *
 * 음의 가중치를 가지고 있는 경우여도 사용 가능한 알고리즘
 */

/**플로이드-워셜 알고리즘 방법
 * 1. 최단 거리를 저장하는 2차원 배열을 선언
 * 2. 자기 자신으로 가는 비용을 0으로 초기화, 그 외에는 모두 infinity로 초기화
 * 3. 특정 정점에서 다른 모든 정점으로 가는 간선에 따라 최단 거리를 저장하는 2차원 배열을 갱신
 * 4. 모든 정점을 차례대로 시작하여 해당 정점을 중간에 거쳐 가는 모든 노드 간의 최단 거리를 계산하여 2차원 배열에 갱신
 */

/**Q1. 방향 그래프가 주어질 떄, 시작점에서 다른 모든 정점까지의 최단 경로를 구하여보자.
 * 첫째줄에 V(1 <= V <= 300), E(1 <= E <= 1000)가 주어진다.
 * 그 다음줄부터는 E개의 줄에 걸쳐 각 간선을 나타내는 (U, V, W)가 주어진다.
 * 이는 가중치가 W인 U -> V로 가는 경로를 의미한다.
 */

let [V, E] = [5, 11];
let input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [3, 1, 8],
  [5, 1, 7],
  [5, 2, 4],
];

let graph = Array.from({ length: V + 1 }, () =>
  Array.from({ length: V + 1 }, () => Infinity)
);

input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from][to] = val;
});

for (let i = 1; i <= V; i++) {
  graph[i][i] = 0;
}

console.log(graph);

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
