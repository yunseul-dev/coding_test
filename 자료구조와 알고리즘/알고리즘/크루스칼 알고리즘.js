/**신장 트리(Spanning Tree)
 * 연결 그래프에서 모든 정점을 연결하는 최소 연결 그래프
 * 연결 그래프가 주어졌을 때 신장 트리는 유일하지 ㅏㅇㄶ음을 알 수 있다.
 */
/**최소 신장 트리(Minimum Spanning Tree, MST)
 * 신장 트리 중 가중치의 합이 가장 작은 트리
 *
 * MST 특징
 * - 신장 트리들 중 간선의 가중치 합이 최소
 * - 최소 진장 트리는 최단 경로를 보장하지 않음
 *  -> N개의 정점을 갖는 간선 삭제 시 두 개의 서브트리가 됨
 * - 사이클이 존재하면 안됨
 *  -> 하나의 간선 추가시 바로 사이클이 생김
 */

/**크루스칼 알고리즘(Kruscal's Algorithm)
 * 모든 간선에 대해 가장 가중치가 작은 간선부터 연결해주면서 최소 스패닝 트리를 만들어 나가는 알고리즘
 * 이때 가장 작은 간선부터 간선을 연결하되, 연결하는 도중 사이클이 생긴다면
 * 가중치가 가장 작은 간선이어도 무시하고 다음 순서의 간선을 선택하며 최소 스패닝 트리를 만들어야 한다.
 *
 * 크루스칼 알고리즘(Kruscal's Algorithm) 방법
 * 1. 그래프 간선의 가중치를 오름차순으로 정렬
 * 2. 간선의 가중치가 작은 것부터 선택하여 정점을 연결
 * 3. 이 때, 현재 간선을 선택했을 때 사이클이 발생하면 현재 간선이 아닌 그 다음 간선을 선택
 * 4. 2~3번 과정을 반복하여 최종적으로 최소 스패닝 트리 구성
 */

/**Q1. 정점의 수 N과 간선의 수 M이 주어질 때 모든 정점을 연결하는데 필요한 최소 비용을 구해보자.
 * (이때 간선의 정보는 a b c로 주어질 때, a와 b를 가중치 c로 연결한다는 의미이다.)
 * (1 <= N <= 1000, 1 <= M <= 100000)
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
    console.log(`u: ${u} v: ${v}`);
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
  // u,v,val (a,b,c)
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

let unionFind = new UnionFind(N);

// 간선의 가중치가 작은 순으로 즉, 오름차순 정렬을 해준다.
console.log('전: ', input);
input.sort((a, b) => a[2] - b[2]);
console.log('후: ', input);

input.forEach((elem) => {
  unionFind.merge(elem[0], elem[1], elem[2]);
});

console.log(unionFind.cost);
