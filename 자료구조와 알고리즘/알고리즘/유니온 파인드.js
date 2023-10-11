/**유니온 파인드(Union Find, Dis joint set)란?
 * 노드가 서로 다른 집합에 있을 때, 두 집합의 노드를 같은 집합으로 묶어주거나
 * 서로 다른 두 노드가 같은 집합에 있는지 확인하는 알고리즘
 */
/**유니온 파인드(union find) 방법
 * 1. 각 노드들에 대해 서로소 집합을 만든다(make)
 * 2. 합치고자 하는 u노드의 루트 노드 U와 v노드의 루트 노드 V를 찾는다.(find)
 * 3. U를 가진 집합과 V를 가진 집합을 서로 합쳐준다.(union)
 */

/**Q1. N(1<=N<=1000000)개의 정점과 M(1<=M<=100000)개의 연산이 주어질 때 아래 조건에 맞게 문제를 풀어보자.
 *
 * 합집합은 0 u v 형태로 주어지고 이는 u가 포함되어 있는 집합과 v가 포함되어 있는 집합을 합친다는 의미다.
 * 두 집합이 같은 집합에 포함되어 있는지 확인하는 연산은 1 u v 형태로 주어진다.
 * 이때 같은 집합이면 Y, 다른 집합이면 N으로 나타낸다.
 */

class UnionFind {
  constructor(N) {
    // 3가지 과정 중 1번 make 초기화 과정
    // 자기자신이 부모 노드가 되게 만들어준다.
    // 1~N번까지 노드 생성 가능, 자기자신을 가리키도록 하는 과정
    this.parent = Array.from({ length: N + 1 }, (elem, idx) => idx);
  }

  find(u) {
    // 만약 루트 노드면 return u
    if (u == this.parent[u]) {
      return u;
    }

    // 그 외에는 부모 노드를 타고 올라가서 루트 노드를 찾으러 간다.
    return (this.parent[u] = this.find(this.parent[u]));
  }

  merge(u, v) {
    u = this.find(u);
    v = this.find(v);

    // 루트 노드가 같다면 이미 같은 트리(집합)
    if (u == v) {
      return;
    }

    // v의 루트 노드가 u가 되도록 설정
    this.parent[v] = u;
  }
}

let [N, M] = [7, 10];
let input = [
  [0, 1, 3],
  [1, 1, 7],
  [0, 7, 6],
  [1, 7, 1],
  [0, 3, 7],
  [0, 4, 2],
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 6],
  [1, 1, 4],
];

const unionFind = new UnionFind(N);

input.forEach((elem) => {
  [num, u, v] = elem;

  if (num == 0) {
    // 두 집합을 합치는 연상
    unionFind.merge(u, v);
  } else if (num == 1) {
    // 두 집합이 같은 집합인지 확인하는 연산
    u = unionFind.find(u);
    v = unionFind.find(v);

    console.log(u == v ? 'Y' : 'N');
  }
});
