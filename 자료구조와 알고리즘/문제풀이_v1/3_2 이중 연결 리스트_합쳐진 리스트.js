/**합쳐진 리스트
 * 이중 연결 리스트에서 중복된 값을 제거해보자
 *
 * 입력: 4,4,3,3,8,4,6,11,12,10,2
 * 출력: 4,3,8,6,11,12,10
 */

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  push(data) {
    let newNode = new Node(data, null, null);

    newNode.prev = this.tail.prev;
    newNode.next = this.tail;

    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  filter(countMap) {
    // 첫 더미노드 다음부터, 마지막 더미노드 전까지 filter해보자
    let cur = this.head.next;
    while (cur.data != null) {
      if (countMap[cur.data] > 1) {
        countMap[cur.data]--;
        cur.next.prev = cur.prev;
        cur.prev.next = cur.next;
      }
      cur = cur.next;
    }
  }

  print() {
    let cur = this.head;

    let ret = [];
    while (cur != null) {
      ret.push(cur.data);
      cur = cur.next;
    }

    console.log(ret);
  }
}

/**
 * 중복된 수를 먼저 카운트 한 후, 리스트에 push되어있는 값을 하나씩 뺄 예정
 */

let arr = [4, 4, 3, 3, 8, 4, 6, 11, 12, 10, 12];

const doubleLinkedList = new DoubleLinkedList();

arr.forEach((elem) => doubleLinkedList.push(elem));

let countMap = {};
arr.forEach((elem) =>
  countMap.hasOwnProperty(elem) ? countMap[elem]++ : (countMap[elem] = 1)
);

doubleLinkedList.print();
// 리스트에 push되어있는 값을 하나씩 뺄 예정
doubleLinkedList.filter(countMap);
doubleLinkedList.print();
