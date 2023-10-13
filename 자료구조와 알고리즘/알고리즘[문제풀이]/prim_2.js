/**최소 비용 좌표
 * N개의 좌표 x,y가 주어질 때, 좌표를 모두 이을 수 있는 최소 비용을 구해보자.
 * 좌표의 거리는 맨하탄 거리로 계산한다.
 * (x1, y1) -> (x2, y2)까지의 거리: |x1 - x2| + |y1 - y2|
 * (1 <= N <= 100, 1 <= x,y <= 1000)
 */

class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size + 1 }, () => 0);
    this.cnt = 0;
  }

  //  data -> [to, val]
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

function getDist(u, v) {
  //  맨하탄 거리: |x1 - x2| + |y1 - y2|
  return Math.abs(u[0] - v[0]) + Math.abs(u[1] - v[1]);
}

let N = 5;
let input = [
  [0, 0], // 0
  [2, 2], // 1
  [3, 10], // 2
  [5, 2], // 3
  [7, 10], // 4
];

let arr = [];
let len = input.length;
for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    arr.push([i, j, getDist(input[i], input[j])]);
  }
}

let graph = Array.from({ length: N + 1 }, () => []);
arr.forEach((elem) => {
  let [from, to, val] = elem;

  graph[from].push([to, val]);
  graph[to].push([from, val]);
});

let prim = new Prim(N);
let mstCost = prim.getMST(1, graph);
console.log(mstCost);
