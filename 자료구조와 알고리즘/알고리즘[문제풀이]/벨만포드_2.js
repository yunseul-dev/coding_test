/**워프 게이트
 * N개의 집과 한 집에서 다른 집으로 갈 수 있는 워프 게이트 M개와 시작점 S, 도착점 E가 있다.
 * 이때 워프 게이트는 u,v,w로 나타내는데 집 u에서 집 v로 시간 w로 갈 수 있는 역할을 하고,
 * 이때 w>0이면 일반적인 이동, w=0이면 순간 이동, w<0이면 과거로의 시간 여행을 가는 경우이다.
 * 시작점과 도착점 사이를 워프 게이트를 통해 갈 수 있는 최단 거리를 구해보자.
 * (1 <= N <= 500, 1 <= M <= 6000, -10000 <= w <= 10000)
 */

class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    for (let cnt = 0; cnt < V; cnt++) {
      for (let i = 1; i <= V; i++) {
        let [cur, curCost] = [i, this.dist[i]];

        graph[i].forEach((elem) => {
          let [next, nextCost] = [elem[0], elem[1] + curCost];

          if (this.dist[next] > nextCost) {
            this.dist[next] = nextCost;

            if (cnt == V - 1) {
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

let [V, E, src, dst] = [5, 10, 1, 5];
let input = [
  [1, 2, 4],
  [1, 3, 3],
  [2, 3, -1],
  [3, 1, -2],
  [1, 4, 8],
  [4, 5, -3],
  [3, 5, -2],
  [2, 4, 6],
  [4, 3, 1],
  [2, 5, -6],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

const bellmanFord = new BellmanFord(V, src);
let dist = bellmanFord.start(V, graph);
console.log(dist);
console.log(dist[dst]);
