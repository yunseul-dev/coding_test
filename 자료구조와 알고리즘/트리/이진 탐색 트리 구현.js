/** 다음과 같은 속성을 가진 이진 트리
 * 각 노드는 중복되지 않는 값을 가진다. (중복 서용 ok)
 * 부모 노드의 왼쪽 서브 트리에는 부모보다 항상 작은 값들을 지는 노드만 있다.
 * 부모 노드의 오른쪽 서브 트리에는 부모보다 항상 큰 값들을 지는 노드만 있다.
 * 좌우 모든 서브 트리도 이진 탐색 트리여야 한다.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  // Binary Search Tree
  constructor() {
    this.root = null;
  }

  // 현재 위치의 노드보다 타겟 노드(data)가
  // 작은 값이면, 타겟 노드는 왼쪽으로
  // 큰 값이면, 타겟 노드는 오른쪽으로 이동한다.
  insert(cur, data) {
    if (cur == null) {
      this.root = new Node(data);
      return;
    }

    // 현재 위치의 노드보다 타겟 노드가 작은 값이면, 타겟 노드는 왼쪽으로
    if (data < cur.data) {
      if (cur.left == null) {
        cur.left = new Node(data);
      } else {
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

  search(cur, data) {
    if (cur == null) {
      console.log(`[SEARCH] data not found`);
      return;
    }

    if (data < cur.data) {
      this.search(cur.left, data);
    } else if (data > cur.data) {
      this.search(cur.right, data);
    } else {
      console.log(`[SEARCH] data found!: ${cur.data}`);
    }
  }

  remove(cur, data) {
    if (cur == null) {
      console.log(`[REMOVE] data not found!`);
      return cur;
    }

    // 지금 바라보고 있는 노드의 데이터가 타겟 데이터보다 큰 경우
    // 왼쪽으로 이동
    if (data < cur.data) {
      cur.left = this.remove(cur.left, data);
    }
    // 지금 바라보고 있는 노드의 데이터가 타겟 데이터보다 작은 경우
    // 오른쪽으로 이동
    else if (data > cur.data) {
      cur.right = this.remove(cur.right, data);
    }
    // 내가 지우고자 한 데이터를 발견한 경우 (target을 찾았을 때)
    else {
      // 리프 노드일 때(단말 노드)
      if (cur.left == null && cur.right == null) {
        if (cur == this.root) {
          this.root = null;
        }

        return null;
      }

      // 왼쪽 서브트리만 존재할 때
      else if (cur.right == null) {
        // cur.left != null && cur.right == null
        return cur.left;
      }

      // 오른쪽 서브트리만 존재할 때
      else if (cur.left == null) {
        // cur.right != null && cur.left == null
        return cur.right;
      }

      // 서브트리가 양쪽 다 존재할 때
      else {
        // 최솟값 : 오른쪽 서브트리에서 가장 작은 값 -> 해당 값이 지우고자 하는 타겟 값과 가장 근사하다.
        let rightSubTreeNode = cur.right;
        while (rightSubTreeNode.left) {
          rightSubTreeNode = rightSubTreeNode.left;
        }

        cur.data = rightSubTreeNode.data;
        cur.right = this.remove(cur.right, cur.data);
      }
    }

    return cur;
  }

  /**
   *     P
   *   L   R    P->L->R
   */
  preorder(cur) {
    if (cur == null) {
      return;
    }

    console.log(cur.data);
    this.preorder(cur.left);
    this.preorder(cur.right);
  }

  /**
   *     P
   *   L   R    L->P->R
   */
  inorder(cur) {
    if (cur == null) {
      return;
    }

    this.inorder(cur.left);
    console.log(cur.data);
    this.inorder(cur.right);
  }

  /**
   *     P
   *   L   R    L->R->P
   */
  postorder(cur) {
    if (cur == null) {
      return;
    }

    this.postorder(cur.left);
    this.postorder(cur.right);
    console.log(cur.data);
  }
}

const bst = new BST();

bst.insert(bst.root, 20);
bst.insert(bst.root, 15);
bst.insert(bst.root, 13);
bst.insert(bst.root, 11);
bst.insert(bst.root, 14);
bst.insert(bst.root, 25);
bst.insert(bst.root, 22);
bst.insert(bst.root, 21);
bst.insert(bst.root, 24);
bst.insert(bst.root, 30);
bst.insert(bst.root, 32);

// console.log('=== preorder ===');
// bst.preorder(bst.root);
// console.log('=== inorder ===');
// bst.inorder(bst.root);
// console.log('=== postorder ===');
// bst.postorder(bst.root);

// 리프 노드일 때
bst.remove(bst.root, 11);
console.log('=== inorder ===');
bst.inorder(bst.root);

// 서브트리가 왼쪽에 하나 있을 때
bst.remove(bst.root, 15);
console.log('=== inorder ===');
bst.inorder(bst.root);

// 서브트리가 오른쪽에 하나 있을 때
bst.remove(bst.root, 30);
console.log('=== inorder ===');
bst.inorder(bst.root);

// 서브트리가 양쪽에 하나 있을 때
bst.remove(bst.root, 20);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 24);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 25);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 21);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 32);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 13);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 14);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 22);
console.log('=== inorder ===');
bst.inorder(bst.root);

bst.remove(bst.root, 22);
console.log('=== inorder ===');
bst.inorder(bst.root);

/**
 *
 *            20
 *      15         25
 *   13        22      30
 * 11  14    21  24       32
 */
