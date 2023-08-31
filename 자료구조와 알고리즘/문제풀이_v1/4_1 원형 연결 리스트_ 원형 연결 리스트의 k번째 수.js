/**원형 연결 리스트의 k번째 수
 * 입력된 순서대로 이루어진 원형 연결 리스트가 있을 때,
 * k번째에 있는 값이 무엇인지 찾아보자
 *
 * 입력: [3, 6, 9, 1, 2, 4, 7]
 *      k: 208
 * 출력: 2
 */

/**
let input = [3, 6, 9, 1, 2, 4, 7];
let k = 208;

let answer = input[(208 % input.length) - 1];
console.log(answer);
 */

/**
 * k번째를 모듈러를 통해 문제를 해결할 예정
 */

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data, null, null);
    if (this.head == null) {
      // this.size = 0
      this.head = newNode;
      this.head.next = this.head;
      this.head.prev = this.head;

      this.size++;

      return;
    }

    newNode.next = this.head;
    newNode.prev = this.head.prev;

    this.head.prev.next = newNode;
    this.head.prev = newNode;

    this.size++;
  }

  // 어떤 K 값이 와도 modular시 결국 0 ~ size - 1 값 안으로 귀결된다.
  print() {
    let cur = this.head;

    let isStart = false;

    let ret = [];
    while (!isStart || cur != this.head) {
      isStart = true;

      ret.push(cur.data);
      cur = cur.next;
    }

    console.log(ret);
  }

  search(K) {
    K = K % this.size;

    let cur = this.head;
    let count = 1;

    while (count < K) {
      count++;
      cur = cur.next;
    }

    console.log(cur.data);
  }
}

let arr = [3, 6, 9, 1, 2, 4, 7];
let K = 208;

const circularLinkedList = new CircularLinkedList();
arr.forEach((elem) => circularLinkedList.push(elem));

circularLinkedList.print();
circularLinkedList.search(K);
