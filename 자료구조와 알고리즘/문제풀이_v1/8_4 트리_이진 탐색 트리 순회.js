/**이진 탐색 트리 순회
 * 이진 탐색 트리를 순회한 결과가 있을 때, 중위 순회, 후위 순회한 결과를 만들어보자.
 *
 * 입력: 50 30 24 5 28 45 98 52 60
 *
 * 출력: 5 24 28 30 45 50 52 60 98
 *      5 28 24 45 30 60 52 98 50
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree
class BST {
  constructor() {
    this.root = null;
  }

  init(data) {
    this.root = new Node(data);
  }

  insert(cur, data) {
    if (cur == null) {
      return;
    }

    // 현재 바라보는 노드의 값보다, 넣고자 하는 값이 작으면 , 왼쪽으로 간다
    if (cur.data > data) {
      // 만약 왼쪽이 비어있다면 해당 왼쪽에 노드를 생성
      if (cur.left == null) {
        cur.left = new Node(data);
      } else {
        // 왼쪽이 비지 않았다면, 한 번 더 왼쪽으로 진입
        this.insert(cur.left, data);
      }
    } else {
      if (cur.right == null) {
        cur.right = new Node(data);
      } else {
        this.insert(cur.right, data);
      }
    }
  }

  preorder(cur) {
    if (cur == null) {
      return;
    }

    console.log(cur.data);
    this.preorder(cur.left);
    this.preorder(cur.right);
  }

  inorder(cur) {
    if (cur == null) {
      return;
    }

    this.inorder(cur.left);
    console.log(cur.data);
    this.inorder(cur.right);
  }

  postorder(cur) {
    if (cur == null) {
      return;
    }

    this.postorder(cur.left);
    this.postorder(cur.right);
    console.log(cur.data);
  }
}

let arr = [50, 30, 24, 5, 28, 45, 98, 52, 60];
const bst = new BST();

let isInit = true;
arr.forEach((elem) => {
  if (isInit) {
    isInit = false;
    bst.init(elem);
  } else {
    bst.insert(bst.root, elem);
  }
});

console.log('=== preorder === ');
bst.preorder(bst.root);

console.log('=== inorder === ');
bst.inorder(bst.root);

console.log('=== postorder === ');
bst.postorder(bst.root);
