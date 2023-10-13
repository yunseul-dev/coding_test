/**최단 경로
 * 방향 그래프가 주어지면 시작점에서 다른 모든 정점으로의 최단 경로를 구해보자.
 * 입력으로는 첫째줄에 정점의 수 V, 간선의 수 E, 시작점 S이 주어지고 두 번쨰 줄 부터는 간선의 수만큼 u,v,w가 주어진다.
 * (1 <= V <= 20000, 1 <= E <= 300000, 1 <= S <= V, 1 <= w <= 10000)
 */
class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    // Edge relaxation을 V-1번 하는데, V번째에도 갱신이 일어나면 음수 사이클이 존재!
    for (let cnt = 0; cnt < V; cnt++) {
      console.log('단계: ', cnt + 1);

      // 모든 간선에 대해서 최단거리를 갱신하는 과정
      for (let i = 1; i <= V; i++) {
        let [cur, curCost] = [i, this.dist[i]];

        graph[i].forEach((elem) => {
          let [next, nextCost] = [elem[0], elem[1] + curCost];

          if (this.dist[next] > nextCost) {
            this.dist[next] = nextCost;

            if (cnt === V - 1) {
              console.log('Minus Cycle Exists!');
              return;
            }
          }
        });
      }
    }

    return this.dist;
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

const bellmanFord = new BellmanFord(V, K);
let dist = bellmanFord.start(V, graph);
console.log(dist);
