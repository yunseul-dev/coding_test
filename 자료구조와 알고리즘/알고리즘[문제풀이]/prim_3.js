/**너무 밝은 도시
 * 각 집사이마다 가로등이 여기저기 켜져 있는 너무 밝은 도시가 있다.
 * 가로등마다 비용이 다를 때, 이 도시의 모든 두 집 쌍에 대해 불이 켜진 길만으로 서로 다닐 수 있게 하면서
 * 가로등을 꺼서 얻을 수 있는 최대 비용을 구해보자
 * (집의 수 m, 길의 수 n, 1 <= m <= 100000, m-1 <= n <= 150000)
 */

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size + 1 }, () => 0);
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
    this.pq = new PriorityQueue(N);
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

      graph[cur].forEach((elem) => {
        let [next, nextCost] = elem;
        this.pq.push([next, nextCost]);
      });
    }

    return this.cost;
  }
}

let [N, M] = [7, 11];
let input = [
  [0, 1, 7],
  [0, 3, 5],
  [1, 2, 8],
  [1, 3, 9],
  [1, 4, 7],
  [2, 4, 5],
  [3, 4, 15],
  [3, 5, 6],
  [4, 5, 8],
  [4, 6, 9],
  [5, 6, 11],
];

let graph = Array.from({ length: N + 1 }, () => []);
let sum = 0;

input.forEach((elem) => {
  let [from, to, val] = elem;

  sum += val;

  graph[from].push([to, val]);
  graph[to].push([from, val]);
});

const prim = new Prim(N);
let mstCost = prim.getMST(1, graph);

console.log(sum - mstCost);
