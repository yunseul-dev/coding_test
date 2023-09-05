/**도시 지나가기
 * N개의 정수 쌍 u,v가 주어질 때 u -> v로 가는 간선들의 정보를 통해 도시를 연결하는 그래프를 만들고,
 * 각 도시별로 몇개의 도시를 지나가는지 알아보자.(자기 자신 포함, 사이클은 없다.)
 */
function dfs(graph, cur) {
  let ret = 0;
  graph[cur].forEach((next) => {
    ret += dfs(graph, next);
  });
  return ret + 1;
}

let N = 4;
let arr = [
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
];

let maxNode = 1;
arr.forEach((elem) => {
  maxNode = Math.max(maxNode, Math.max(elem[0], elem[1]));
});

let graph = Array.from({ length: maxNode + 1 }, () => []);
console.log(graph);
arr.forEach((elem) => graph[elem[0]].push(elem[1]));
console.log(graph);

for (let vertex = 1; vertex <= maxNode; vertex++) {
  let cities = dfs(graph, vertex);
  console.log(`${vertex}: ${cities}`);
}
