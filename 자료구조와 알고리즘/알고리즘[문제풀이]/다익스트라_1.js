/**최단 경로
 * 방향 그래프가 주어지면 시작점에서 다른 모든 정점으로의 최단 경로를 구해보자.
 * 입력으로는 첫째줄에 정점의 수 V, 간선의 수 E, 시작점 S이 주어지고 두 번쨰 줄 부터는 간선의 수만큼 u,v,w가 주어진다.
 * (1 <= V <= 20000, 1 <= E <= 300000, 1 <= S <= V, 1 <= w <= 10000)
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
    if (this.cnt == 0) {
      return null;
    }

    let data = this.heap[1];
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
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

    // 시작점 -> 시작점으로 가는 최단 거리는 0
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

let [V, E, K] = [6, 9, 1];
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

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

console.log(graph);

const dijkstra = new Dijkstra();
let ret = dijkstra.start(graph, K, V);
ret.shift();
console.log(ret);
