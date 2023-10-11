/**사이클 끊기
 * N개의 서로 연결된 정점 u,v 쌍이 주어질 때 이때 그래프에서 트리로 만들기 위해 끊어야 할 간선을 선택해보자.
 * 이때 A와 B 정점 사이의 간선을 끊어야 한다면 정답을 A B로 출력한다.
 * (정점의 수 V == N, 1 <= V, N <= 10000, 여러 개의 정답이 있다면 아무거나 하나를 출력)
 */

class UnionFind {
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (elem, idx) => idx);
  }

  find(u) {
    if (u == this.parent[u]) {
      return u;
    }

    return (this.parent[u] = this.find(this.parent[u]));
  }

  merge(u, v) {
    let [oriU, oriV] = [u, v];
    u = this.find(u);
    v = this.find(v);

    if (u == v) {
      console.log(oriU, oriV);
      return;
    }

    this.parent[v] = u;
  }
}

let N = 3;
let input = [
  [1, 2],
  [1, 3],
  [2, 3],
];

// let N = 5;
// let input = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 4],
//   [1, 5],
// ];

const unionFind = new UnionFind(N);

input.forEach((elem) => {
  [u, v] = elem;

  unionFind.merge(u, v);
});
