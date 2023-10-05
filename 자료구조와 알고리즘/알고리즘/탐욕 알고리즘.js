/**탐욕 알고리즘(Greedy Algorithnm)
 * 현재 상황에서 취할 수 있는 가장 최적을 선택하는 알고리즘
 *
 * 현재 순간에서 최적이라고 생각하는 것을 선택해 나가는 방식
 * 이러한 선택은 지역(local)적으로는 최적이지만, 전체(global)적으로 봤을 때 최적이라는 보장 없음
 * 매우 근시안적인 방법을 이용하는 알고리즘
 *
 * 탐욕 알고리즘이 적용되는 문제는 대부분
 * 탐욕스런 선택 조건(Greedy choice property)과
 * 최적 부분 구조 조건(Optimal subscructure)이라는 두가지 조건이 만족
 *
 * 탐욕스런 선택 조건은 앞의 선택이 이후의 선택에 영향을 주지 않음
 * 최적 부분 구조 조건은 문제에 대한 최적해가 부분 문제에 대해서도 역시 최적해
 */

/**탐욕 알고리즘(Greedy Algorithnm) 대표 예제
 * Minimum Spanning Tree에서의
 *  - Prim Algorithnm, Kruskal Algorithnm
 *
 * 최단 거리를 구해야 할 때
 *  - Dijkstra Algorithnm
 *
 * 거스름 돈 나누기
 *
 * 여러 물건이 있을 때, 특정한 조건을 만족하는 조합을 구해야 할 때
 *  - 냅색(Knapsack) 알고리즘
 */

/** Q.
 * 동전은 총 N종류이고, 각각의 동전은 무한히 있다.
 * 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 할 때, 필요한 동전 개수의 최솟값을 구해보자.
 *
 * 첫째 줄에 N과 K가 주어진다.
 * 두번째 줄에 동전의 금액이 오름차순으로 주어진다. (각 동전의 금액은 서로 배수/약수 관계를 가진다.)
 */

let [N, K] = [10, 4200];
// let [N, K] = [10, 4790];

let arr = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

let count = 0;
arr = arr.reverse();
arr.forEach((money) => {
  while (K - money >= 0) {
    K -= money;
    count++;
  }
});

console.log(count);
