/**마을의 수
 * N개의 집과 M개의 두 집을 연결하는 도로 정보가 주어질 때
 * 각각의 집이 도로로 연결되어 있으면 하나의 마을이라고 판단할 수 있다.
 * 이때 마을의 총 개수를 구해보자. (2 <= N <= 10000, 1 <= M <= N - 1)
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
    u = this.find(u);
    v = this.find(v);

    if (u == v) {
      return;
    }

    this.parent[v] = u;
  }
}

let [N, M] = [7, 5];
let input = [
  [1, 2],
  [1, 4],
  [3, 5],
  [2, 6],
  [7, 3],
];

const unionFind = new UnionFind(N);

input.forEach((elem) => {
  [u, v] = elem;
  unionFind.merge(u, v);
});

console.log(unionFind.parent);

let visit = Array.from({ length: N + 1 }, () => 0);
input.forEach((elem) => {
  [u, v] = elem;

  u = unionFind.find(u);
  v = unionFind.find(v);

  visit[u] = 1;
  visit[v] = 1;
});

console.log(visit);

let ans = visit.filter((elem) => elem === 1).length;
console.log(ans);
