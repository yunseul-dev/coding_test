/**순서대로 출연하기
 * N명의 가수와 M명의 PD가 있을 때, PD는 자신에게 주어진 K명의 가수들의 순서를 정해야 한다.
 * 각 PD들이 가수들의 순서를 정했을 때, 이를 조합하여 전체 가수 순서를 정해보자.
 * (여러 개의 순서가 나올 경우에는 아무거나 하나만 출력한다.)
 * (1 <= N <= 1000, 1 <= M <= 100)
 */

class TopologicalSort {
  constructor(N) {
    this.size = N + 1;
    this.graph = Array.from({ length: this.size }, () => []);

    this.indegree = Array.from({ length: this.size }, () => 0);
  }

  createGraph() {
    this.graph[1].push(4);
    this.indegree[4]++;
    this.graph[4].push(3);
    this.indegree[3]++;

    this.graph[6].push(2);
    this.indegree[2]++;
    this.graph[2].push(5);
    this.indegree[5]++;
    this.graph[5].push(4);
    this.indegree[4]++;

    this.graph[2].push(3);
    this.indegree[3]++;

    console.log('graph: ', this.graph);
    console.log('indegree: ', this.indegree);
  }

  sort() {
    let result = [];
    let queue = [];

    for (let v = 1; v <= this.size; v++) {
      if (this.indegree[v] == 0) {
        queue.push(v);
      }
    }
    console.log('queue: ', queue);

    for (let v = 1; v < this.size; v++) {
      if (queue.length == 0) {
        console.log('위상 정렬 불가');
        return;
      }

      let cur = queue.shift();

      result.push(cur);

      let len = this.graph[cur].length;
      for (let nv = 0; nv < len; nv++) {
        let next = this.graph[cur][nv];

        this.indegree[next]--;

        if (this.indegree[next] == 0) {
          queue.push(next);
        }
      }
    }

    return result;
  }
}

let [N, M] = [6, 3];

const topologicalSort = new TopologicalSort(N);
topologicalSort.createGraph();
console.log(topologicalSort.sort());
