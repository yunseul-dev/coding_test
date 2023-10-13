/**네트워크 전송
 * 1번부터 N번까지 적혀 있는 N개의 컴퓨터와 서로를 이어주는 M개의 네트워크 선 그리고 시작점 K가 있다.
 * 이때 M개의 선의 정보는 u,v,w는 u에서 v로 네트워크 선을 통해 데이터가 전송되는 시간 w와 같다.
 * 이때 모든 네트워크에 데이터가 퍼지기까지 최소 시간을 구해보자.
 * (1 <= N <= 15000, 1 <= M <= 3000, 경로가 없는 경우 -1로 출력)
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
            }
          }
        });
      }
    }

    return this.dist;
  }
}

// let [V, E, K] = [4, 3, 2];
// let input = [
//   [2, 1, 1],
//   [2, 3, 1],
//   [3, 4, 1],
// ];

let [V, E, K] = [3, 1, 2];
let input = [
  [1, 2, 2],
  [1, 3, 1],
  [3, 2, 4],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

const bellmanFord = new BellmanFord(V, K);
let dist = bellmanFord.start(V, graph);
dist.shift();
console.log(dist);

// 모든 네트워크에 데이터가 퍼지기까지 최소 시간을 구해보자, 이런 경우가 없으면 -1
let minTime = Math.max(...dist);
console.log(minTime == Infinity ? -1 : minTime);
