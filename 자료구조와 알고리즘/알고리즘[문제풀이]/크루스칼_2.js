/**별자리
 * N개의 별이 있고, 별들의 좌표(x,y)가 M개 주어질 때, 모든 별을 최소 거리로 이어 별자리를 만들어보자
 * (정답은 소수점 둘째자리까지 출력)
 * (1 <= N <= 100, 1 <= x,y <= 1000)
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
    this.cost += parseFloat(val);
  }
}

function getDist(u, v) {
  // root((x1 - x2)^2 + (y1 - y2)^2)
  return Math.sqrt((u[0] - v[0]) ** 2 + (u[1] - v[1]) ** 2);
}

let [N, M] = [3, 3];
let input = [
  [1.0, 1.0], // 0
  [2.0, 2.0], // 1
  [2.0, 4.0], // 2
];

let arr = [];
let len = input.length;
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    arr.push([i, j, getDist(input[i], input[j]).toFixed(2)]);
  }
}

// 간선 기준 오름차순 정렬
arr.sort((a, b) => a[2] - b[2]);

console.log(arr);

const unionFind = new UnionFind(N);
arr.forEach((elem) => {
  unionFind.merge(elem[0], elem[1], elem[2]);
});

console.log(unionFind.cost);
