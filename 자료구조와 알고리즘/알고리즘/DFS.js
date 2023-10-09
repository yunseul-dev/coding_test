/**DFS(Depth First Search) 개념 (깊이 우선 탐색)
 * 깊이 우선 탐색이라고 불리는 DFS는 그래프 전체를 탐색하는 방법 중 하나
 * DFS는 특정 노드에서 시작해서 다음 분기(branch)로 넘어가기 전에
 * 해당 분기를 완벽하게 탐색하고 그 다음 분기로 넘어가는 방법
 *
 * 놀이공원 미로를 가게 되면 미로의 출구를 찾기 위해 선택한 방향으로 갈 수 있을 때까지 계속 가다가
 * 출구가 아니라 더 이상 갈 수 없게 되면 되돌아 오는 도중 다시 가장 가까운 갈림길(branch)에서부터
 * 다시 탐색을 진행하는 방법과 유사
 */

/**DFS(Depth Fist Search) 방법
 *
 * Stack을 이용한 방법
 * 1. 루트 노드를 push
 * 2. Stack에서 하나의 노드를 pop
 * 3. Stack에서 꺼낸 노드가 아직 방문하지 않은 노드라면 방문 표시 후 현재 노드와 연결되어 있는 인접 노드를 push
 * 4. Stack이 빌 때까지 2,3단계를 계속해서 반복
 *
 * 재귀를 이용한 방법
 * 1. 루트 노드를 시작으로 함수 호출
 * 2. 현재 노드가 이미 방문한 노드인 경우 이미 탐색을 했는 노드이므로 return
 * 3. 현재 노드가 방문하지 않은 노드인 경우 방문 표시
 * 4. 현재 노드와 연결되어 있는 인접 노드에 대해 재귀적으로 함수를 호출하며 탐색 진행
 */

/** DFS의 장/단점
 * 장점
 * - 현 경로상의 노드들만 기억하면 되므로 저장 공간을 많이 차지하지 않음
 * - 목표 노드가 깊은 단계에 있을 경우 해를 빨리 구할 수 있음
 * - 구현이 너비 우선 탐색(BFS)보다 간단함
 *
 * 단점
 * - 해가 없는 경로가 깊을 경우 탐색시간이 오래 걸릴 수 있음
 * - 얻어진 해가 최단 경로가 된다는 보장이 없음 (목표에 이르는 경로가 다수인 경우 얻어진 해가 최적이 아닐 수 있음)
 */

/**Q1. N개의 정점의 쌍 u,v과 정점의 수 M이 주어질 때 그래프를 만들어 DFS 탐색 순서를 나타내보자
 * (이때 u,v쌍은 u -> v로 가는 방향)
 */

// function dfs(graph, visit, cur) {
//   if (visit[cur]) {
//     return;
//   }

//   visit[cur] = 1;
//   console.log(cur);
//   graph[cur].forEach((next) => dfs(graph, visit, next));
// }

// let N = 12;
// let M = 13;
// let graph = Array.from({ length: M + 1 }, () => {
//   return [];
// });
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

// dfs(graph, visit, 1);

/**Q2. 자연수 N과 M이 주어질 때, 1번부터 N까지 자연수 중에서 M개를 고른 수열을 만들어보자.
 * (단, 중복되는 수열을 여러번 출력하면 안된다.)
 */

function dfs(N, M, ans) {
  if (ans.length == M) {
    console.log(ans); // [1,2]
    return;
  }

  for (let i = 1; i <= N; i++) {
    ans.push(i);
    dfs(N, M, ans);
    ans.pop();
  }
}

// 1~4까지의 자연수 중에서 2개를 뽑아 수열을 만들어달라.
// ex) 11,12,13,14 ~ 41,42,43,44
let [N, M] = [4, 2];

dfs(N, M, []);
