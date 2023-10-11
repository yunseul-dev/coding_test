/**백트래킹(Backtracking) 개념
 * 해를 찾는 도중 지금의 경로가 해가 될 것 같지 않다면 그 경로를 더이상 가지 않고 되돌아가서 다시 해를 찾아가는 기법
 *
 * DFS는 모든 경로를 탐색하지만, 백트래킹에서는 불필요한 경로를 조기에 차단
 * 이러한 방법을 휴리스틱 알고리즘의 가지치기(Pruning) 기법이라 하며,
 * 불필요한 부분을 쳐내고 최대한 올바른 쪽으로 간다는 의미를 가짐
 *
 * 휴리스틱(heuristic)
 * 무엇인가를 보고 대충 이럴 것이라고 빠르게 판단을 내리는 추론 방법
 *
 * 실생활에서의 휴리스틱
 * - 혈액형이 A형이면 소심하다 -> 과학적으로 근거가 없음에도 불구하고 특정 고정관념으로 인해 해당 사람을 추론
 */

/**백트래킹(Backtracking) 방법
 *
 * Stack을 이용한 방법
 * 1. 루트 노드를 push
 * 2. Stack에서 하나의 노드를 pop
 * 3. Stack에서 꺼낸 노드가 아직 방문하지 않은 노드라면 방문 표시 후 현재 노드와 연결되어 있는 인접 노드를 push
 *  -> 단, 현재 노드가 해가 될 수 없는 경로라면 가지치기(Pluning)을 통해 해당 노드를 push하지 않음
 * 4. Stack이 빌 때까지 2,3단계를 계속해서 반복
 *
 * 재귀를 이용한 방법
 * 1. 루트 노드를 시작으로 함수 호출
 * 2. 현재 노드가 이미 방문한 노드인 경우 이미 탐색을 했는 노드이므로 return
 * 3. 현재 노드가 해가 될 수 없는 경로라면 가지치기(Pluning)을 통해 해당 노드를 push하지 않고 return
 * 4. 현재 노드가 방문하지 않은 노드인 경우 방문 표시
 * 5. 현재 노드와 연결되어 있는 인접 노드에 대해 재귀적으로 함수를 호출하며 탐색 진행
 */
/**Q1. 길이 N의 단어를 만들 때 다음과 같은 조건이 있을 때, 단어를 만들어보자.
 * 1. M개의 주어진 단어로 구성해야 한다.
 * 2. 반드시 최소 2개의 자음과 최소 1개의 모음이 있어야 한다.
 * 3. 이러한 단어를 사전순으로 나타내야 한다.
 */

// 최소 2개의 자음과 최소 1개의 모음이 있나요?
// function checkCondition(ans) {
//   let ja = 0;
//   let mo = 0;

//   ans.forEach((ch) => {
//     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//       mo++;
//     } else {
//       ja++;
//     }
//   });

//   return ja >= 2 && mo >= 1;
// }

// function backtracking(alpha, N, cur, ans) {
//   if (ans.length == N) {
//     if (checkCondition(ans)) {
//       console.log(ans);
//     }
//     return;
//   }

//   let len = alpha.length;
//   for (let i = cur; i < len; i++) {
//     ans.push(alpha[i]);
//     backtracking(alpha, N, i + 1, ans);
//     ans.pop();
//   }
// }

// let [N, M] = [4, 6];
// let alpha = ['a', 't', 'c', 'i', 's', 'w'];
// alpha = alpha.sort();

// backtracking(alpha, N, 0, []);

/**Q2. 자연수 N과 M이 주어질 때 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열을 모두 찾아보자. */
function backtracking(N, M, visit, ans) {
  // 수의 길이가 M일 때 출력
  if (ans.length == M) {
    console.log(ans);
    return;
  }

  // 1~N까지의 수
  for (let i = 1; i <= N; i++) {
    // 더이상 해가 될 수 없는 영역, 가지치기
    if (visit[i]) {
      // 12,13
      continue;
    }

    ans.push(i);
    visit[i] = 1; // 자기 자신을 포함하지 않기 위해
    backtracking(N, M, visit, ans);
    visit[i] = 0; // 다시 해당 숫자를 사용하기 위해
    ans.pop(i);
  }
}

let [N, M] = [4, 2];

// 중복해서 사용하는지 체크 visit
let visit = Array.from({ length: N + 1 }, () => 0);
backtracking(N, M, visit, []);
