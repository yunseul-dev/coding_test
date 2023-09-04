/**트리의 지름이란, 트리의 특정 두 노드를 선택하여 양쪽으로 당겼을 때 가중치의 합이
 * 최대가 되는 길이가 트리의 지름이다.
 * 이때 모든 간선의 가중치가 1일 때, 이진 트리의 지름을 구현해보자.
 * (입력은 부모, 왼쪽자식, 오른쪽자식 순서이고, 이때 항상 루트 노드는 "1"이다.)
 */

class Node {
  constructor(data, left = null, right = null, parent = null) {
    (this.data = data),
      (this.left = left),
      (this.right = right),
      (this.parent = parent);
  }
}

class Tree {
  add(parent, left, right) {
    if (left) {
      parent.left = left;
      left.parent = parent;
    }

    if (right) {
      parent.right = right;
      right.parent = parent;
    }
  }

  getLongestDistanceNodeFromRoot(start) {
    // BFS 알고리즘, 그래프를 탐색하기 위한 알고리즘이 필요
    let queue = [];
    queue.push([start, 0]);

    let maxDistance = 0;
    let maxDistanceNode = null;

    while (queue.length) {
      let [cur, curDistance] = queue.shift();

      let isLeafNode = true;
      if (cur.left) {
        queue.push([cur.left, curDistance + 1]);
        isLeafNode = false;
      }
      if (cur.right) {
        queue.push([cur.right, curDistance + 1]);
        isLeafNode = false;
      }

      // 리프노드면 => 올수 있는 가장 먼 노드로 왔다
      if (isLeafNode) {
        if (curDistance > maxDistance) {
          maxDistance = curDistance;
          maxDistanceNode = cur;
        }
      }
    }
    return [maxDistanceNode, maxDistance];
  }

  getLongestDistanceNode(start) {
    //부모까지 타고 올라가기
    let prev = start;
    let cur = start;
    let distance1 = 0;
    while (cur.parent) {
      prev = cur;
      cur = cur.parent;
      distance1 += 1;
    }

    // 현재 cur == root
    if (cur.left == prev) {
      cur.left = null;
    } else {
      cur.right = null;
    }

    let [node, distance2] = this.getLongestDistanceNodeFromRoot(cur);

    console.log(`distance1: ${distance1},  distance2: ${distance2}`);
    console.log(node);

    return distance1 + distance2;
  }
}

let arr = [
  ['1', '2', '3'],
  ['2', '4', '.'],
  ['3', '5', '6'],
];

let nodeMap = {};
const tree = new Tree();

arr.forEach((elem) => {
  if (elem[0] !== '.' && !nodeMap.hasOwnProperty(elem[0])) {
    let node = new Node(elem[0], null, null, null);
    nodeMap[elem[0]] = node;
  }
  if (elem[1] !== '.' && !nodeMap.hasOwnProperty(elem[1])) {
    let node = new Node(elem[1], null, null, null);
    nodeMap[elem[1]] = node;
  }
  if (elem[2] !== '.' && !nodeMap.hasOwnProperty(elem[2])) {
    let node = new Node(elem[2], null, null, null);
    nodeMap[elem[2]] = node;
  }

  tree.add(nodeMap[elem[0]], nodeMap[elem[1]], nodeMap[elem[2]]);
});

// 루트 -> 가장 먼 길이를 가진 노드(1)
let [node1, dist1] = tree.getLongestDistanceNodeFromRoot(nodeMap['1']);

// 가장 먼 노드(1) -> 가장 먼 길이를 가진 노드까지의 가중치의 합: 답
let distance = tree.getLongestDistanceNode(node1);
console.log(distance);
