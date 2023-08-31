/**정렬되지 않은 이중 연결 리스트
 * 하나의 이중 연결 리스트에 노드들이 이어져 있을 때 오름차순으로 정렬해보자
 * (Array가 아닌 이중 연결 리스트로 해결할 것)
 *
 * 입력: 2 5 7 10 6 4 1
 * 출력: 1 2 4 5 6 7 10
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
    this.head = null;
    this.tail = null;
  }

  push(data) {
    let newNode = new Node(data, null, null);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // 2(h) - 5 - 7 - 10 - 6 - 4 - 1(t)
  // 뒤에서부터 두개씩 비교
  sort() {
    let isSorted;

    do {
      isSorted = false;
      let cur = this.tail;
      while (cur.prev != null) {
        if (cur.prev.data > cur.data) {
          // swap 할 때 노드 자체를 swap하지 말고, data만 swap해주면 된다.
          [cur.prev.data, cur.data] = [cur.data, cur.prev.data];
          isSorted = true;
        }
        cur = cur.prev;
      }
    } while (isSorted);
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

let arr = [2, 5, 7, 10, 6, 4, 1];

const doubleLinkedList = new DoubleLinkedList();

arr.forEach((elem) => doubleLinkedList.push(elem));

doubleLinkedList.print();
doubleLinkedList.sort();
doubleLinkedList.print();
