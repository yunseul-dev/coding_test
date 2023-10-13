/**벨만-포드 알고리즘(Bellman-Ford Algorithm)이란?
 * 그래프에서 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 찾는 알고리즘
 *
 * 매 단계마다 모든 간선을 확인하므로 음의 가중치를 가지고 있는 경우여도 사용 가능한 알고리즘
 */

/**벨만-포드 알고리즘 특징
 * 벨만-포드 알고리즘은 아래와 같은 최단 거리의 특성을 이용한다.
 *
 * D(s,v) = D(s,u) + W(u,v)
 * 즉, 시작 노드(s)에서 도착 노드(v)까지 이르는 최단 경로인 D(s,v)는
 * s에서 u까지의 최단경로 + u에서 v사이의 가중치를 더한 값인 D(s,u) + W(u,v)이다.
 *
 * 이렇게 벨만-포드 알고리즘은 s와 u사이의 최단 거리를 구할 때, 그래프 내 모든 edge에 대해서 edge relaxation을 수행하게 된다.
 *
 * 그렇다면 edge relaxation을 몇 번 수행해야 할까?
 * s,v 사이의 최단경로는 s에서 v로 가는 경로일 수 있고
 * v를 제외한 그래프의 모든 노드(V-1개)가 s,v 사이의 최단 경로를 구성 할 수 있다.
 * 따라서 벨만-포드 알고리즘은 모든 간선에 대한 edge-relaxation을 V-1회 수행한다.
 */

/**벨만-포드 알고리즘 방법
 * 1. 출발 노드를 설정
 * 2. 최단 거리를 저장하는 배열을 초기화
 * 3. 최단 거리를 저장하는 배열에서 출발 노드가 있는 위치의 값을 0으로 초기화
 *
 * 다음 과정을 (V-1)번 반복
 * 4. 모든 간선을 하나씩 확인하며 각 간선을 거쳐 다른 노드로 가는 최단 거리 배열을 갱신
 *
 * 5. 이때, 4번 과정을 한 번 더 수행하여 테이블이 갱신되는 경우, 음수 간선에 의한 사이클 발생
 */

/**Coding Time
 * Q1. 방향 그래프가 주어질 때, 시작점에서 다른 모든 정점까지의 최단 경로를 구해보자.
 * 첫째줄에 V(1 <= V <= 2000), E(1 <= E <= 30000), 시작점 K가 주어진다.
 * 그 다음 줄부터는 E개의 줄에 걸쳐 각 간선을 나타내는 (U,V,W)가 주어진다.
 * 이는 가중치가 W인 U -> V로 가는 경로를 의미한다.
 */

class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    // Edge relaxation을 V-1번 해야한다.
    // 그러나 우리는 사이클 여부를 판단하기 위해 V-1 + 1번 = V번 벨만포드 알고리즘을 돌려볼 예정
    // 이떄, V번쨰에도 갱신이 일어난다? -> 음수 사이클이 존재한다!
    for (let cnt = 0; cnt < V; cnt++) {
      // 모든 간선에 대해 최단 거리를 갱신하는 과정
      for (let i = 1; i <= V; i++) {
        let [cur, curCost] = [i, this.dist[i]];

        // 시작점부터 2번까지 가는데 최단거리: dist[2] -> curCost
        // nextCost란? 시작점부터 2번까지 가는데 최단거리 + 2번에서 3번까지 가는데 가중치 = curCost + elem[1]
        // next = 3
        graph[i].forEach((elem) => {
          let [next, nextCost] = [elem[0], elem[1] + curCost];

          if (this.dist[next] > nextCost) {
            this.dist[next] = nextCost;

            if (cnt === V - 1) {
              console.log('Minus Cycle Exists!!');
              return;
            }
          }
        });
      }
    }

    return this.dist;
  }
}

// let [V, E, K] = [5, 6, 1];
// let input = [
//   [5, 1, 1],
//   [1, 2, 2],
//   [1, 3, 3],
//   [2, 3, 4],
//   [2, 4, 5],
//   [3, 4, 6],
// ];

let [V, E, K] = [3, 3, 1];
let input = [
  [1, 2, 1],
  [2, 3, -20],
  [3, 1, 10],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

console.log(graph);

const bellmanFord = new BellmanFord(V, K);
let ret = bellmanFord.start(V, graph);
console.log(ret);
