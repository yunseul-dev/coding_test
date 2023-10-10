/**트리의 부모 찾기
 * 루트가 1이고 N개의 노드를 가진 트리와 각 노드 사이의 정보 M개가 주어질 때,
 * 루트 노드를 제외한 각 노드의 부모를 구해보자. (ex) 2의 부모, 3의 부모, 4의 부모 ...)
 * (2 <= N <= 100000, u v 는 u->v를 의미)
 */

let N = 7;
let root = 1;

let tree = Array.from({ length: N + 1 }, () => []);
tree[1].push(6);
tree[6].push(3);
tree[3].push(5);
tree[1].push(4);
tree[4].push(2);
tree[4].push(7);

let ans = Array.from({ length: N + 1 }, () => 0);

let queue = [root];

while (queue.length) {
  let cur = queue.shift();

  tree[cur].forEach((child) => {
    ans[child] = cur;

    queue.push(child);
  });
}

console.log(ans);
