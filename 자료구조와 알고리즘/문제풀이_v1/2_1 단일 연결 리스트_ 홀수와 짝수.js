/**홀수와 짝수
 * 하나의 Array가 있을 때, 해당 리스트를 홀수와 짝수 리스트로 분리해보자
 */

/** 배열로 구현
let N = 7;

let oddNum = Array.from({ length: N }, (elem, idx) => idx + 1).filter(
  (elem) => elem % 2 == 1
);

let evenNum = Array.from({ length: N }, (elem, idx) => idx + 1).filter(
  (elem) => elem % 2 == 0
);

console.log('홀수: ', oddNum);
console.log('짝수: ', evenNum);
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    let newNode = new Node(data, null);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    //(h) ㅁ -> ㅁ -> ㅁ -> ㅁ -> ㅁ (t)
    this.tail.next = newNode;
    this.tail = newNode;
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

let arr = [1, 2, 3, 4, 5, 6, 7];
const oddLinkedList = new LinkedList();
const evenLinkedList = new LinkedList();

arr.filter((elem) => elem % 2 == 1).map((elem) => oddLinkedList.push(elem));
arr.filter((elem) => elem % 2 == 0).map((elem) => evenLinkedList.push(elem));

oddLinkedList.print();
evenLinkedList.print();
