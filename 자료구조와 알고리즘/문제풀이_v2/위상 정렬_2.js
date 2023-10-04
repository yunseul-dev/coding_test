/**줄 세우기
 * N명의 학생들을 키 순서대로 줄을 세우려 할 때, 일부 학생들의 키를 비교한 M개의 횟수를 통해 최종적인 줄을 세워보자.
 * (키의 순서는 항상 정답이 보장되며, A B로 주어진 경우 A가 B보다 작다는 의미다.)
 * (1 <= N <= 10000, 1 <= M <= 100000)
 */

class TopologicalSort {
  constructor(N) {
    this.size = N + 1;
    this.graph = Array.from({ length: this.size }, () => []);

    this.indegree = Array.from({ length: this.size }, () => 0);
  }

  createGraph() {
    // this.graph[1].push(3);
    // this.indegree[3]++;
    // this.graph[2].push(1);
    // this.indegree[1]++;

    this.graph[4].push(2);
    this.indegree[2]++;
    this.graph[3].push(4);
    this.indegree[4]++;
    this.graph[3].push(1);
    this.indegree[1]++;
    this.graph[1].push(2);
    this.indegree[2]++;
    this.graph[1].push(4);
    this.indegree[4]++;

    console.log('graph: ', this.graph);
    console.log('indegree: ', this.indegree);
  }

  sort() {
    let result = [];
    let queue = [];

    for (let v = 1; v <= this.size; v++) {
      if (this.indegree[v] === 0) {
        queue.push(v);
      }
    }

    console.log('queue', queue);

    for (let v = 1; v < this.size; v++) {
      if (queue.length === 0) {
        console.log('위상 정렬 불가');
        return;
      }

      let cur = queue.shift();
      result.push(cur);

      let len = this.graph[cur].length;
      for (let nv = 0; nv < len; nv++) {
        let next = this.graph[cur][nv];

        this.indegree[next]--;

        if (this.indegree[next] === 0) {
          queue.push(next);
        }
      }
    }

    return result;
  }
}

// let [N, M] = [3, 2];
let [N, M] = [4, 5];

const topologicalSort = new TopologicalSort(N);
topologicalSort.createGraph();
let result = topologicalSort.sort();
console.log(result);
