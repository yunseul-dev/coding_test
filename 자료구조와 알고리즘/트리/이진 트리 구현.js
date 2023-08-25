/* 이진 트리란?
* 루트 노드 중심으로 두 개의 서브 트리로 나뉘는 구조
* 즉, 부모 노드 밑에는 2개 이하의 자식 노드가 존재

* 완전 이진 트리(Complete Binary Tree): 노드가 왼쪽부터 차곡차곡 쌓인 이진 트리 형태
* 포화 이진 트리(Perfect Binary Tree): 이진 트리의 모든 단말 노드의 깊이가 같은 형태 (이진 트리의 포화 상태)
* 정 이진 트리(Full Binary Tree): 이진 트리의 모든 노드에 자식 노드가 0개 혹은 2개로 찬 경우
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // 전위 순회
  // Parent -> left -> right
  preorder(cur) {
    if (cur == null) {
      return;
    }

    console.log(cur.data);
    this.preorder(cur.left);
    this.preorder(cur.right);
  }

  // 중위 순회
  // left -> parent -> right
  inorder(cur) {
    if (cur == null) {
      return;
    }

    this.inorder(cur.left);
    console.log(cur.data);
    this.inorder(cur.right);
  }

  // 후위 순회
  // left -> right -> parent
  postorder(cur) {
    if (cur == null) {
      return;
    }

    this.postorder(cur.left);
    this.postorder(cur.right);
    console.log(cur.data);
  }
}

const binaryTree = new BinaryTree();

binaryTree.root = new Node('A');
binaryTree.root.left = new Node('B');
binaryTree.root.right = new Node('C');
binaryTree.root.left.left = new Node('D');
binaryTree.root.left.right = new Node('E');
binaryTree.root.right.left = new Node('F');
binaryTree.root.right.right = new Node('G');
binaryTree.root.right.left.left = new Node('L');
binaryTree.root.right.left.right = new Node('M');

console.log('=== preorder ===');
binaryTree.preorder(binaryTree.root);
console.log('=== inorder ===');
binaryTree.inorder(binaryTree.root);
console.log('=== postorder ===');
binaryTree.postorder(binaryTree.root);
