/**다익스트라 알고리즘(Dijkstra Algorithm)
 * 음의 가중치가 없는 그래프에서 하나의 정점에서 다른 모든 정점으로 가는 최단 경로를 찾는 알고리즘
 *
 * 음의 가중치를 가진 간선이 없는 경우 사용 가능한 알고리즘
 * 현실 세계의 길(간선)의 가중치는 늘 양수 -> 현실 세계의 길 찾기 기본 알고리즘으로 사용 가능
 */

/**다익스트라 알고리즘(Dijkstra Algorithm)
 * 다익스트라 알고리즘은 다이나믹 프로그래밍과 그리디 방식을 가진 알고리즘
 *
 * BFS 방식으로 진행되는 다익스트라 알고리즘은 현재의 최단 경로를 선택하는데 있어
 * 현재 정점으로 부터 가장 거리가 짧은 간선을 그리디하게 선택하고
 *
 * 계산한 경로를 미리 저장해 두었다가 활용하며 중복되는 하위 문제들을 풀어나가는 다이나믹 프로그래밍 방식
 * -> A에서 Z로 가는 최단 거리를 구하기 위해서 결국 여러 개의 최단 거리를 통해 A에서 Z로의 최단 거리를 구할 수 있게 된다.
 */

/**다익스트라 알고리즘(Dijkstra Algorithm) 방법
 * 1. 출발 노드(src)를 설정
 * 2. 최단 거리를 기록하는 배열(dist)을 Infinity로 초기화
 * 3. dist[src] = 0으로 설정(출발 노드에서 출발 노드까지 최단 거리는 0)
 * 4. 출발 노드를 기준으로 인접한 각 노드의 최소 비용(최단 거리) 저장
 * 5. 현재 방문하지 않은 노드 중에서 가장 비용이 작은 노드를 선택
 * 6. 해당 노드를 거쳐 특정한 노드로 가는 경우를 고려하여 최소 비용 갱신
 * 7. 5번 6번 과정을 반복
 */

/**Q1. 방향 그래프가 주어질 때, 시작점에서 다른 모든 정점까지의 최단 경로를 구해보자.
 * 첫째줄에 V(1 <= V <= 20000), E(1 <= E <= 300000), 시작점 K가 주어진다.
 * 그 다음줄부터는 E개의 줄에 걸쳐 각 간선을 나타내는 (U,V,W)가 주어진다.
 * 이는 가중치가 W인 U -> V로 가는 경로를 의미한다.
 */

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.heap[++this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur][1] < this.heap[par][1]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt === 0) {
      return null;
    }

    let data = this.heap[1];

    this.heap[1] = this.heap[this.cnt--];

    let cur = 1; // cur은 루트
    let child;

    while (1) {
      child = cur * 2;

      if (child < this.cnt && this.heap[child][1] > this.heap[child + 1][1]) {
        child++;
      }

      if (child > this.cnt || this.heap[cur][1] < this.heap[child][1]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  empty() {
    return !this.cnt;
  }
}

class Dijkstra {
  start(graph, src, V) {
    // 최단거리 테이블을 무한으로 초기화
    let dist = Array.from({ length: V + 1 }, () => Infinity);

    // 시작점 -> 시작점 최단거리는 0
    dist[src] = 0;

    const pq = new PriorityQueue(V + 1);

    pq.push([src, dist[src]]);

    while (!pq.empty()) {
      let [cur, cost] = pq.pop();
      if (dist[cur] < cost) {
        continue;
      }

      graph[cur].forEach((elem) => {
        let [next, nextDist] = [elem[0], cost + elem[1]];
        if (dist[next] > nextDist) {
          dist[next] = nextDist;

          pq.push([next, nextDist]);
        }
      });
    }

    return dist;
  }
}

let [V, E, K] = [5, 6, 1];
let input = [
  [5, 1, 1],
  [1, 2, 2],
  [1, 3, 3],
  [2, 3, 4],
  [2, 4, 5],
  [3, 4, 5],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

console.log(graph);

const dijkstra = new Dijkstra();
let ret = dijkstra.start(graph, K, V);
console.log(ret); // dist
