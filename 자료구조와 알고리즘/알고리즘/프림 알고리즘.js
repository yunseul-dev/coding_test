/**최소 신장트리 */

/**프림 알고리즘(Prim's Algorithm)
 * 하나의 시작점부터 시작점과 연결된 정점들에 대해 가장 가중치가 작은 간선부터 연결해주면서 최소 스패닝 트리를 만들어 나가는 알고리즘
 * 이때 가장 작은 간선부터 연결하되, 연결하는 도중 사이클이 생긴다면
 * 가중치가 작은 간선이어도 무시하고 다음 순서의 간선을 선택하며 최소 스패닝 트리를 만들어야 한다.
 *
 * 프림 알고리즘(Prim's Algorithm) 방법
 * 1. 첫 기준점을 잡는다.
 * 2. 현재 정점들과 연결된 간선의 가중치가 작은 것부터 선택하여 정점을 연결
 * 3. 이 때, 현재 간선을 선택했을 때 사이클이 발생하면 현재 간선이 아닌 그 다음 간선을 선택
 * 4. 2~3번 과정을 반복하여 최종적으로 최소 스패닝 트리 구성
 */

/**Q1. 정점의 수 N과 간선의 수 M이 주어질 때 모든 정점을 연결하는데 필요한 최소 비용을 구해보자.
 * (이때 간선의 정보는 a b c로 주어질 때, a와 b를 가중치 c로 연결한다는 의미이다.)
 * ( 1 <= N <= 1000, 1 <= M <= 100000)
 */

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log('=== heap ===');
    console.log(this.heap);
  }

  // data -> [to,val]
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

class Prim {
  constructor(N) {
    this.visit = Array.from({ length: N + 1 }, () => 0);
    this.pq = new PriorityQueue(N + 1);
    this.cost = 0;
  }

  getMST(start, graph) {
    this.visit[start] = 1;

    graph[start].forEach((elem) => {
      let [next, nextCost] = elem;
      this.pq.push([next, nextCost]);
    });

    while (!this.pq.empty()) {
      let [cur, curCost] = this.pq.pop();

      if (this.visit[cur]) {
        continue;
      }

      this.visit[cur] = 1;
      this.cost += curCost;

      graph[cur].forEach((elem) => this.pq.push(elem));
    }

    return this.cost;
  }
}

let [N, M] = [6, 9];
let input = [
  // from, to, val 순서
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

let graph = Array.from({ length: N + 1 }, () => []);
console.log(graph);

input.forEach((elem) => {
  let [from, to, val] = elem;

  graph[from].push([to, val]);
  graph[to].push([from, val]);
});
console.log(graph);

const prim = new Prim(N);
let mstCost = prim.getMST(1, graph);
console.log(mstCost);
