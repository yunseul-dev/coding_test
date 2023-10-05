/**건물 짓기
 * N개의 건물을 짓는데 서로 다른 시간이 필요한데 어떤 건물을 짓기 위해 다른 건물을 먼저 지어야 하는 경우도 있다.
 * 이때 각 건물을 짓는데 걸리는 시간을 모두 출력해보자.
 * (1 <= N <= 1000, 건물을 짓는 순서 개수 K: 1 <= K <= 10000, 건물을 짓는데 걸리는 시간 T: 1 <= T <= 100000 )
 *
 * 예를 들어 A건물의 건설 시간이 10초, B건물의 건설 시간이 1초, C건물의 건설 시간이 100초, D건물의 건설 시간이 10초이고
 * B,C는 A를 지은 후 지을 수 있고 D는 B,C를 지은 후 지을 수 있다면
 * 결국 A,B,C,D 각 건물을 짓기 위해 걸리는 시간은 10, 11, 110, 120이 된다.
 */

class TopologicalSort {
  constructor(N) {
    this.size = N + 1;
    this.graph = Array.from({ length: this.size }, () => []);
    this.indegree = Array.from({ length: this.size }, () => 0);
    this.waiting = [];
  }

  createGraph() {
    this.waiting = [0, 10, 1, 100, 10];

    this.graph[1].push(3);
    this.indegree[3]++;
    this.graph[1].push(2);
    this.indegree[2]++;
    this.graph[2].push(4);
    this.indegree[4]++;
    this.graph[3].push(4);
    this.indegree[4]++;
  }

  sort() {
    let result = Array.from({ length: this.size }, () => 0);
    let queue = [];

    for (let v = 1; v <= this.size; v++) {
      if (this.indegree[v] === 0) {
        queue.push(v);
      }

      result[v] = this.waiting[v];
    }

    for (let v = 1; v < this.size; v++) {
      if (queue.length === 0) {
        console.log('위상 정렬 불가');
        return;
      }

      let cur = queue.shift();
      let len = this.graph[cur].length;

      for (let nv = 0; nv < len; nv++) {
        let next = this.graph[cur][nv];

        this.indegree[next]--;

        result[next] = Math.max(result[next], result[cur] + this.waiting[next]);

        if (this.indegree[next] == 0) {
          queue.push(next);
        }
      }
    }

    return result;
  }
}

let [N, M] = [4, 4];

const topologicalSort = new TopologicalSort(N);
topologicalSort.createGraph();
let result = topologicalSort.sort();

console.log(result);
