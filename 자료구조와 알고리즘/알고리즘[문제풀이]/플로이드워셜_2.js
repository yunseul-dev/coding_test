/**사건의 순서
 * N개의 사건과 K개의 사건의 전후 관계의 개수가 있고, S개의 서로 다른 두 사건 A,B가 주어질 때,
 * A가 B보다 먼저 일어났다면 -1, A가 B보다 늦게 일어났다면 1, 알 수 없다면 0을 출력해보자.
 * (1 <= N <= 400, 1 <= K <= 50000, 1 <= S <= 10000)
 */

let [V, K, S] = [5, 5, 3];
let input = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [2, 4],
];

let query = [
  [1, 5],
  [2, 4],
  [3, 1],
];

input.forEach((elem) => elem.push(1));
console.log(input);

let graph = Array.from({ length: V + 1 }, () =>
  Array.from({ length: V + 1 }, () => Infinity)
);

console.log(graph);

input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from][to] = val;
});

for (let i = 1; i <= V; i++) {
  graph[i][i] = 0;
}

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

query.forEach((elem) => {
  let [A, B] = elem;

  if (graph[A][B] !== Infinity && graph[A][B] > 0) {
    console.log(-1);
  } else if (graph[B][A] !== Infinity && graph[B][A] > 0) {
    console.log(1);
  } else {
    console.log(0);
  }
});
