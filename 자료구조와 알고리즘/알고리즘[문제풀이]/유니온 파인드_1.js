/**친구 사이
 * N개의 A,B로 이루어진 친구 사이가 주어질 때 각 입력마다 입력된 두 사람의 친구 사이에 총 몇 명이 연결되어 있는지 알아보자
 * (1 <= N <= 100000)
 */

class UnionFind {
  constructor(N) {
    this.parent = Array.from({ length: N + 1 }, (elem, idx) => [idx, 1]);
  }

  find(u) {
    if (u == this.parent[u][0]) {
      return u;
    }

    return (this.parent[u][0] = this.find(this.parent[u][0]));
  }

  merge(u, v) {
    u = this.find(u);
    v = this.find(v);

    if (u == v) {
      return;
    }

    // v의 루트노드를 u가 되도록 설정
    this.parent[v][0] = u;
    // u의 집합에 v의 집합의 수를 더해준다.
    this.parent[u][1] += this.parent[v][1];

    console.log(this.parent[u][1]);
  }
}

// let N = 3;
// let input = [
//   ['John', 'Fred'],
//   ['Fred', 'Elise'],
//   ['Dany', 'Bred'],
// ];

let N = 3;
let input = [
  ['Fred', 'Bany'],
  ['Fred', 'Bred'],
  ['Jessy', 'Bany'],
];

let nameMap = {};
let id = 1;

input.forEach((elem) => {
  [u, v] = elem;

  if (!nameMap.hasOwnProperty(u)) {
    nameMap[u] = id;
    id++;
  }

  if (!nameMap.hasOwnProperty(v)) {
    nameMap[v] = id;
    id++;
  }
});

console.log(nameMap);

const unionFind = new UnionFind(id);

input.forEach((elem) => {
  [u, v] = elem;

  u = nameMap[u];
  v = nameMap[v];

  unionFind.merge(u, v);
});
