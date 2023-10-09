/**트리의 부모 찾기
 * 루트가 1이고 N개의 노드를 가진 트리와 각 노드 사이의 정보 M개가 주어질 때,
 * 루트 노드를 제외한 각 노드의 부모를 구해보자. (ex) 2의 부모, 3의 부모, 4의 부모 ...)
 * (2 <= N <= 100000, u v 는 u->v를 의미)
 */
function dfs(cur, tree, ans) {
  let len = tree[cur].length;
  // console.log('len: ', len);

  for (let i = 0; i < len; i++) {
    ans[tree[cur][i]] = cur;
    // console.log('ans: ', ans);
    dfs(tree[cur][i], tree, ans);
  }
}

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
dfs(root, tree, ans);

console.log(ans);
