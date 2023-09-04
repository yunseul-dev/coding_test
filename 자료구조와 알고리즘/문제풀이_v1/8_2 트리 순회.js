/**트리 순회
 * N개의 부모 노드와, 왼쪽 자식 노드, 오른쪽 자식 노드가 쌍으로 주어질 때
 * 전위 순회(preorder), 중위 순회(inorder), 후위 순회(postorder)를 해보자.
 * ('.'은 자식 노드가 없음을 의미, 'A'가 항상 루트 노드)
 */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  add(parent, left, right) {
    if (left) {
      parent.left = left;
    }

    if (right) {
      parent.right = right;
    }
  }

  // 전위순회: 부모 -> 왼쪽 -> 오른쪽
  preorder(cur) {
    if (cur == null) {
      return;
    }

    console.log(cur.data);
    this.preorder(cur.left);
    this.preorder(cur.right);
  }

  // 중위순회: 왼쪽 -> 부모 -> 오른쪽
  inorder(cur) {
    if (cur == null) {
      return;
    }

    this.inorder(cur.left);
    console.log(cur.data);
    this.inorder(cur.right);
  }

  // 후위순회: 왼쪽 -> 오른쪽 -> 부모
  postorder(cur) {
    if (cur == null) {
      return;
    }

    this.postorder(cur.left);
    this.postorder(cur.right);
    console.log(cur.data);
  }
}

let arr = [
  ['A', 'B', 'C'],
  ['B', 'D', '.'],
  ['C', 'E', 'F'],
  ['E', '.', '.'],
  ['F', '.', 'G'],
  ['D', '.', '.'],
  ['G', '.', '.'],
];

let nodeMap = {};
const tree = new Tree();

arr.forEach((elem) => {
  // nodeMap에 node 알파벳과 정보를 입력
  if (elem[0] !== '.' && !nodeMap.hasOwnProperty(elem[0])) {
    let node = new Node(elem[0], null, null);
    nodeMap[elem[0]] = node;
  }
  if (elem[1] !== '.' && !nodeMap.hasOwnProperty(elem[1])) {
    let node = new Node(elem[1], null, null);
    nodeMap[elem[1]] = node;
  }
  if (elem[2] !== '.' && !nodeMap.hasOwnProperty(elem[2])) {
    let node = new Node(elem[2], null, null);
    nodeMap[elem[2]] = node;
  }

  tree.add(nodeMap[elem[0]], nodeMap[elem[1]], nodeMap[elem[2]]);
});

console.log('=== preorder ===');
tree.preorder(nodeMap['A']);

console.log('=== inorder ===');
tree.inorder(nodeMap['A']);

console.log('=== postorder ===');
tree.postorder(nodeMap['A']);
