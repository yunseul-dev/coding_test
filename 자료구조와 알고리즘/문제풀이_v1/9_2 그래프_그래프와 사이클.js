/**그래프와 사이클
 * N개의 정수 쌍 u,v가 주어질 때 해당 간선들의 정보를 통해 그래프에 사이클이 존재하는지 확인해보자.
 * 출발은 사이클이 존재하면 Yes, 그렇지 않다면 No
 */

function bfs(graph, start, maxNode) {
  let queue = [];
  queue.push(start);

  // 노드를 방문한 적 있는지
  // 사이클일 경우 노드를 무한번 방문하게 됨 -> 2번 이상 방문이 확인될 시 사이클!
  // 1번 방문했는데 또 bfs에 와서 방문하려는 시도가 있는 경우
  let visit = Array.from({ length: maxNode + 1 }, () => 0);

  while (queue.length) {
    let cur = queue.shift();

    if (visit[cur] >= 1) {
      console.log('YES');
      return;
    }
    visit[cur] = 1;

    graph[cur].forEach((elem) => queue.push(elem));
  }

  console.log('NO');
}

let N = 5;
// let arr = [
//   [1, 3],
//   [3, 2],
//   [3, 4],
//   [4, 5],
//   [5, 3],
// ];

let arr = [
  [1, 3],
  [3, 2],
  [3, 4],
  [3, 5],
];

let maxNode = 1;
arr.forEach(
  (elem) => (maxNode = Math.max(maxNode, Math.max(elem[0], elem[1])))
);

let graph = Array.from({ length: maxNode + 1 }, () => []);
arr.forEach((elem) => graph[elem[0]].push(elem[1]));

console.log(graph);

bfs(graph, 1, maxNode);
