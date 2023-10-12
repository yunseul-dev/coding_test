/**컴퓨터 연결
 * 무선으로 연결되어 있지 않은 N개의 컴퓨터가 있다.
 * 컴퓨터들끼리 연결된 선이 M개가 주어질 때 모든 컴퓨터를 연결하는데 필요한 최소 비용을 찾아보자.
 * (연결된 선 M개의 입력 a b c는 a와 b 컴퓨터가 비용 c로 연결되어 있다는 의미)
 * (1 <= N <= 1000, 1 <= M <= 100000, 1 <= c <= 10000)
 */

class UnionFind {
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (elem, idx) => idx);
    this.cost = 0;
  }

  find(u) {
    if (u == this.parent[u]) {
      return u;
    }

    return (this.parent[u] = this.find(this.parent[u]));
  }

  merge(u, v, val) {
    u = this.find(u);
    v = this.find(v);

    if (u == v) {
      return;
    }

    this.parent[v] = u;
    this.cost += val;
  }
}

let [N, M] = [6, 9];
let input = [
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
];

input.sort((a, b) => a[2] - b[2]);

const unionFind = new UnionFind(N);
input.forEach((elem) => {
  unionFind.merge(elem[0], elem[1], elem[2]);
});

console.log(unionFind.cost);
