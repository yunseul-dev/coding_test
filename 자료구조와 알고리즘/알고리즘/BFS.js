/**BFS(Breadth First Search) 개념
 * 너비 우선 탐색이라고도 불리는 BFS는 그래프 전체를 탐색하는 방법 중 하나
 * BFS는 특정 노드에서 시작해서 인접한 노드들을 먼저 탐색하는 방법
 * 물 위에 돌멩이를 던지면 돌멩이가 떨어진 위치부터 모든 방향으로 파동이 퍼지는데 파동은 시작점 정보를 담고 있다.
 * 즉, 시작점인 루트 노드부터 인접한 위치로 퍼져나가는 방식이 BFS와 유사
 */
/**BFS(Breadth First Search) 방법
 * 1. 루트 노드를 큐에 push
 * 2. 큐에서 노드를 pop
 * 3. 이미 방문한 노드라면 continue, 그렇지 않다면 방문 표시를 해준다.
 * 4. 현재 노드와 인접한 노드를 큐에 push 해준다.
 * 5. 큐가 빌 때까지 2~4번 과정을 계속해서 반복한다.
 */

/**Q1. N과 M개의 정점의 쌍 u,v가 주어질 때 그래프를 만들어 BFS 탐색 순서를 나타내보자
 * (이때 u,v쌍은 u -> v로 가는 방향)
 */

// function bfs(graph, visit, start) {
//   let queue = [];
//   queue.push(start);

//   // queue가 빌 때 까지
//   while (queue.length) {
//     let cur = queue.shift();

//     // 만약 방문 했다면 continue
//     if (visit[cur]) {
//       continue;
//     }

//     // 방문 표시
//     visit[cur] = 1;
//     console.log(cur);

//     graph[cur].forEach((next) => queue.push(next));
//   }
// }

// let N = 12;
// let M = 13;
// let graph = Array.from({ length: M + 1 }, () => []);
// let visit = Array.from({ length: M + 1 }, () => 0);

// graph[1].push(2);
// graph[1].push(3);
// graph[1].push(4);
// graph[3].push(5);
// graph[3].push(6);
// graph[5].push(7);
// graph[5].push(8);
// graph[6].push(9);
// graph[9].push(10);
// graph[9].push(11);
// graph[10].push(12);
// graph[10].push(13);

// bfs(graph, visit, 1);

/**Q2. 영수와 철수가 숨바꼭질을 하고 있다. 이때 철수는 N 위치에 있고, 영수는 K 위치에 있다.
 * 오늘은 철수가 영수를 찾아야 하는데 매초마다 X-1, X+1 혹은 X*2 위치로 이동 할 수 있다.
 * 이때 철수가 영수를 찾는 가장 빠른 시간이 몇 초 후인지, 가장 빠른 시간으로 찾는 방법이 몇 가지인지 구해보자.
 * (위치는 0 <= X <= 10000)
 */
let [N, K] = [5, 17];

let minTime = null;
let timeMap = {};

let queue = [];
queue.push([N, 0]);

while (queue.length) {
  let [cur, time] = queue.shift();

  // 문제의 조건에 의한 휴리스틱
  if (cur < 0 || cur > 10000) {
    continue;
  }

  // 최소시간을 만족하지 못하는데 더 탐색할 필요가 없다에 대한 휴리스틱
  if (minTime != null && time > minTime) {
    continue;
  }

  if (cur == K) {
    minTime = time;

    if (!timeMap.hasOwnProperty(minTime)) {
      timeMap[minTime] = 0;
    }
    timeMap[minTime]++;
  }

  queue.push([cur - 1, time + 1]);
  queue.push([cur + 1, time + 1]);
  queue.push([cur * 2, time + 1]);
}

console.log(minTime, timeMap[minTime]);
