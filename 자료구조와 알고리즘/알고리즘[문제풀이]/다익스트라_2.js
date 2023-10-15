/**k번쨰 최단 경로
 * N개의 집, 집 사이에 존재하는 M개의 도로의 수, 몇 번째 최단 경로인 K가 주어질 때
 * 1번 도시에서 나머지 도시로 가는 모든 K번쨰 최단 경로를 출력해보자.
 * (1 <= N <= 1000, 0 <= M <= 1000000, 1 <= K <= 100)
 * (도로 정보 u,v,w는 u번 집에서 v번 집으로 갈 때 시간 w가 걸린다는 의미, 1 <= u,v <= n,  1 <= c <= 1000)
 * (i번 도시에서 i번 도시로 가는 최단경로는 0이지만, 일반적인 k번째 최단경로는 0이 아닐 수 있음에 유의한다.)
 */

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    // 1번 인덱스부터 넣는것이니 ++cnt
    this.heap[++this.cnt] = data;

    let cur = this.cnt; // 자식은 항상 마지막 노드
    let par = Math.floor(cur / 2);

    // max heap push 과정
    while (cur > 1 && this.heap[cur][1] > this.heap[par][1]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  top() {
    if (this.cnt === 0) {
      return null;
    }

    let data = this.heap[1][1]; // [1][1] -> cost

    return data;
  }

  pop() {
    if (this.cnt === 0) {
      return null;
    }

    let data = this.heap[1];

    this.heap[1] = this.heap[this.cnt--]; //가장 마지막에 있는 값을 root로 가져와서 재정렬

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;

      if (child < this.cnt && this.heap[child][1] < this.heap[child + 1][1]) {
        child++;
      }

      if (child > this.cnt || this.heap[cur][1] > this.heap[child][1]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  size() {
    return this.cnt;
  }

  empty() {
    return !this.cnt;
  }
}

class Dijkstra {
  start(graph, V, K) {
    const DUMMY = 0;
    let dist = Array.from({ length: V + 1 }, () => new PriorityQueue(V + 1));

    const pq = new PriorityQueue(V + 1);
    pq.push([1, 0]);

    while (!pq.empty()) {
      let [cur, cost] = pq.pop();

      graph[cur].forEach((elem) => {
        let [next, nextDist] = [elem[0], cost + elem[1]];

        if (dist[next].size() < K) {
          dist[next].push([DUMMY, nextDist]);
          pq.push([next, nextDist]);
        } else if (dist[next].top() > nextDist) {
          dist[next].pop();
          dist[next].push([DUMMY, nextDist]);

          pq.push([next, nextDist]);
        }
      });
    }

    return dist;
  }
}

let [V, E, K] = [5, 10, 2];
let input = [
  [1, 2, 2],
  [1, 3, 7],
  [1, 4, 5],
  [1, 5, 6],
  [2, 4, 2],
  [2, 3, 4],
  [3, 4, 6],
  [3, 5, 8],
  [5, 2, 4],
  [5, 4, 1],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

const dijkstra = new Dijkstra();
let ret = dijkstra.start(graph, V, K);

for (let i = 1; i <= V; i++) {
  console.log(ret[i].size() === K ? ret[i].top() : -1);
}

// dist[next]에 undefined이 들어와서 코드 실행 안됨. 강의랑 같이 구현했는데 왜 안되는지 모르겠음. 확인 필요
