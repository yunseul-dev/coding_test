// 하나의 루트 노드로 시작하여 자식 노드들을 반복적으로 가지는 자료구조
class Node {
  constructor(data) {
    this.data = data;
    this.child = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // targetData -> 부모노드 즉, 내가 어느 노드의 자식으로 insert 할건지 모르기에 targetData == parent를 찾아야 된다.
  // 그리고 그 parent 아래에 insert 하고자하는 데이터를 삽입한다.
  insert(parentData, data) {
    let newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    let parentNode = this.search(parentData);
    if (parentNode == null) {
      return;
    }

    parentNode.child.push(newNode);
  }

  search(targetData) {
    if (this.root == null) {
      return;
    }

    let curNode = this.root;
    let targetNode = null;

    let queue = [];
    queue.push(curNode);

    // BFS
    while (queue.length) {
      curNode = queue.shift();

      if (curNode.data == targetData) {
        targetNode = curNode;
        break;
      }

      let len = curNode.child.length;
      for (let i = 0; i < len; i++) {
        queue.push(curNode.child[i]);
      }
    }

    return targetNode;
  }

  remove(targetData) {
    if (this.root == null) {
      return;
    }

    // BFS
    let cur = this.root;
    let queue = [];
    queue.push(cur);

    while (queue.length) {
      cur = queue.shift();

      let targetIdx = -1; // A 노드의 자식 중 [B,C] 있을 때 B가 몇 번째에 있냐를 의미하고 있다.

      let len = cur.child.length;
      for (let i = 0; i < len; i++) {
        if (cur.child[i].data == targetData) {
          targetIdx = i;
          break;
        }
      }

      if (targetIdx != -1) {
        // A child: [B,C] -> B의 인덱스는 0 -> [C]
        cur.child.splice(targetIdx, 1);
        break;
      }

      len = cur.child.length;
      for (let i = 0; i < len; i++) {
        queue.push(cur.child[i]);
      }
    }
  }

  print() {
    console.log('=== print ===');

    let cur = this.root;
    let queue = [];
    queue.push(cur);

    while (queue.length) {
      cur = queue.shift();
      console.log('cur: ', cur);

      let len = cur.child.length;

      for (let i = 0; i < len; i++) {
        queue.push(cur.child[i]);
      }
    }
  }
}

const tree = new Tree();

tree.insert(null, 'A');
tree.insert('A', 'B');
tree.insert('A', 'C');
tree.insert('B', 'D');
tree.insert('B', 'E');
tree.insert('B', 'F');
tree.insert('C', 'G');

tree.print();

tree.remove('B');

tree.print();
