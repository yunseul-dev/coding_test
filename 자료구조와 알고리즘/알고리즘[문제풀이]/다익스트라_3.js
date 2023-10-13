/**최단 경로 추적
 * N개의 도시와 도시 사이의 도로 M개가 주어질 때, A에서 B로 가는 최단 경로 및 경로를 출력해보자.
 * 정답이 여러 개인 경우 그 중 아무거나 하나를 출력한다.
 * (1 <= N <= 1000, 1 <= M <= 100000)
 * (M개의 도로 정보 u,v,w는 u에서 v로 갈 떄 걸리는 시간 w 1 <= w <= 100000)
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
      [this.heap[par], this.heap[cur]] = [this.heap[cur], this.heap[par]];

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
  constructor(N) {
    this.trace = Array.from({ length: N + 1 }, () => 0);
  }
  start(graph, src, V) {
    let dist = Array.from({ length: V + 1 }, () => Infinity);
    dist[src] = 0;

    const pq = new PriorityQueue(V + 1);

    pq.push([src, dist[src]]);

    while (!pq.empty()) {
      let [cur, cost] = pq.pop();

      graph[cur].forEach((elem) => {
        let [next, nextDist] = [elem[0], cost + elem[1]];

        if (dist[next] > nextDist) {
          dist[next] = nextDist;

          this.trace[next] = cur;

          pq.push([next, dist[next]]);
        }
      });
    }

    return dist;
  }
}

let [V, E, start, end] = [5, 8, 1, 5];

let input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

const dijkstra = new Dijkstra();
let dist = dijkstra.start(graph, start, V);

console.log(dist); // [ Infinity, 0, 2, 3, 1, 4 ]
console.log(dijkstra.trace); // [ <2 empty items>, 1, 1, 1, 4 ]
// 0,0,1,1,1,4 -> 5번째 정점 이전 정점 -> 4번 정점/ 4번째 정점 이전 정점 -> 1번 정점
// 5, 4, 1
// 1, 4, 5 (reverse 필요)

let trace = [];
let len = dijkstra.trace;

for (let i = end; i != start; i = dijkstra.trace[i]) {
  trace.push(i);
}
trace.push(start);

trace = trace.reverse();
console.log(dist[end]); // 최단경로
console.log(trace);
