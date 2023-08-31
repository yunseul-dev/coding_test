/**요세푸스 문제
 * 1부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, K번째 사람을 제거한다.
 * 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
 * 이 과정은 N명의 사람이 모두 제거될 때가지 계속된다.
 * 이렇게 원에서 사람들이 제거되는 순서를 요세푸스 순열이라고 한다.
 * 이때 N과 K가 주어질 때 제거되는 순서대로 출력해보자.
 *
 * 입력: 7 3
 * 출력: 3 6 2 7 5 1 4
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
  removeByJosephus(K) {
    let cur = this.head;

    let ret = [];
    while (this.size > 0) {
      let count = 1;
      while (count < K) {
        count++;
        cur = cur.next;
      }

      cur.prev.next = cur.next;
      cur.next.prev = cur.prev;

      ret.push(cur.data);
      // 제거된 대상이 head가 가리키는 값이었다면 head도 next로 가게 해줘야 한다.
      if (this.head == cur) {
        this.head = this.head.next;
      }

      // 현재 제거된 대상을 cur가 가리키고 있으니, 그 다음 대상을 가리키게 해준다.
      cur = cur.next;
      this.size--;
    }

    console.log(ret);
  }

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
}

let N = 7;
let K = 3;
let arr = Array.from({ length: N }, (elem, idx) => idx + 1);

const circularLinkedList = new CircularLinkedList();
arr.forEach((elem) => circularLinkedList.push(elem));

circularLinkedList.removeByJosephus(K);
