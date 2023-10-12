/**너무 밝은 도시
 * 각 집사이마다 가로등이 여기저기 켜져 있는 너무 밝은 도시가 있다.
 * 가로등마다 비용이 다를 때, 이 도시의 모든 두 집 쌍에 대해 불이 켜진 길만으로 서로 다닐 수 있게 하면서
 * 가로등을 꺼서 얻을 수 있는 최대 비용을 구해보자
 * (집의 수 m, 길의 수 n, 1 <= m <= 100000, m-1 <= n <= 150000)
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

let [N, M] = [7, 11];
let input = [
  [0, 1, 7],
  [0, 3, 5],
  [1, 2, 8],
  [1, 3, 9],
  [1, 4, 7],
  [2, 4, 5],
  [3, 4, 15],
  [3, 5, 6],
  [4, 5, 8],
  [4, 6, 9],
  [5, 6, 11],
];

input.sort((a, b) => a[2] - b[2]);

const unionFind = new UnionFind(N);
let sum = 0;
input.forEach((elem) => {
  sum += elem[2];
  unionFind.merge(elem[0], elem[1], elem[2]);
});

console.log(sum - unionFind.cost);
