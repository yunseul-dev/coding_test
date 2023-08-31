/**줄 세우기
 * N명의 학생이 있고 몇 번째 뒤에 줄을 세워야 하는지 정보가 있을 때 알맞게 줄을 세운 결과를 출력해보자
 */

/**
let N = 5;
let order = [1, 1, 1, 3, 2];

let answer = [];
for (let i = 0; i < N; i++) {
  answer.splice(order[i] - 1, 0, i + 1);
}

console.log(answer);
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
  }

  // 1,1,1,3,2
  push(idx, data) {
    let newNode = new Node(data, null);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    // ㅇ(h) -> ㅁ -> ㅁ
    if (idx == 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let cur = this.head;
    let prev = this.head;
    let count = 1;

    // k번째를 향하는 과정
    while (count < idx) {
      count++;
      prev = cur;
      cur = cur.next;
    }

    prev.next = newNode;
    newNode.next = cur;
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

let N = 5;
let arr = [1, 1, 1, 3, 2];

let linkedList = new LinkedList();
let len = arr.length;
for (let idx = 0; idx < len; idx++) {
  linkedList.push(arr[idx], idx + 1);
}

linkedList.print();
