/**트리인듯 아닌듯
 * N개의 u -> v로 향하는 간선 정보인 정수 쌍 u,v가 주어질 때 해당 정보를 통해 트리인지 판단해보자.
 */

/**
 * 엣지 하나를 자르면 트리는 두 개로 분리된다 : 즉, 엣지 + 1 == 노드 수와 동일하다.
 */

let indegree = {};
let outdegree = {};
let node = {};
let edge = {};

// let arr = [
//   [6, 8],
//   [5, 3],
//   [5, 2],
//   [6, 4],
//   [5, 6],
// ];

let arr = [
  [3, 8],
  [6, 8],
  [6, 4],
  [5, 3],
  [5, 6],
  [5, 2],
];

// node, edge, indegree, outdegree 초기화
arr.forEach((elem) => {
  node[elem[0]] = 1;
  node[elem[1]] = 1;
  edge[[elem[0], elem[1]]] = 1;

  outdegree[elem[0]] = 0;
  outdegree[elem[1]] = 0;
  indegree[elem[0]] = 0;
  indegree[elem[1]] = 0;
});

// indegree, outdegree 카운트
arr.forEach((elem) => {
  outdegree[elem[0]]++;
  indegree[elem[1]]++;
});

console.log('indegree: ', indegree);
console.log('outdegree: ', outdegree);

let isTree = true;

// 1. 루트는 무조건 존재해야하며, 하나만 있어야 한다.
let rootCount = 0;
Object.entries(indegree).forEach((inElem) => {
  if (inElem[1] == 0) {
    // 진입차수가 없다는 것은, 루트가 될 가능성이 있다.
    rootCount++;
  }
});

console.log(rootCount);
if (rootCount > 1) {
  isTree = false;
}

// 2. 진입 차수가 2개 이상 있는 노드가 있으면 안된다.
Object.entries(indegree).forEach((elem) => {
  if (elem[1] >= 2) {
    console.log('진입차수가 2개 이상 있습니다: ', elem[1]);
    isTree = false;
  }
});

// 3. 엣지 + 1 == 노드 수와 동일하다.
console.log(
  `엣지: ${Object.entries(edge).length}, 노드: ${Object.entries(node).length}`
);

if (Object.entries(edge).length + 1 != Object.entries(node).length) {
  isTree = false;
}

console.log(isTree ? 'Tree' : 'Not Tree');
