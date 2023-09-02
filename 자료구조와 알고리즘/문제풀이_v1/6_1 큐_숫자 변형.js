/**숫자 변형
 * N자리 숫자가 주어질 때, 다음과 같이 행동을 K번 할 때 가장 앞에 있는 숫자가 무엇인지 알아보자.
 * 행동의 정의는 다음과 같다.
 * - 가장 첫번째 숫자를 버리고, 그 다음 숫자를 가장 뒤로 보낸다.
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// class Queue {
//   constructor() {
//     this.front = null;
//     this.rear = null;

//     this.size = 0;
//   }

//   push(data) {
//     const newNode = new Node(data);
//     if (this.size == 0) {
//       this.front = newNode;
//       this.rear = newNode;

//       this.size++;
//     }

//     this.rear.next = newNode;
//     this.rear = newNode;

//     this.size++;
//   }

//   getData(K) {
//     if (this.isEmpty()) {
//       return;
//     }

//     while (K--) {
//       let cur = this.front.next;
//       this.front = this.front.next.next;

//       this.rear.next = cur;
//       this.rear = cur;
//       this.size--;
//     }

//     console.log(this.front.data);
//   }

//   isEmpty() {
//     return !this.size;
//   }
// }

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;

    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;

      this.size++;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.front = this.front.next;
    this.size--;
  }

  getFront() {
    if (this.isEmpty()) {
      return null;
    }

    return this.front.data;
  }

  print() {
    let cur = this.front;

    let ret = [];
    while (cur != null) {
      ret.push(cur.data);
      cur = cur.next;
    }
    console.log(ret);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

let N = '126648';
let K = 3;

const queue = new Queue();
[...N].forEach((elem) => queue.push(elem));

// queue.getData(K);
queue.print();

while (K--) {
  queue.print();
  queue.pop();
  queue.push(queue.getFront());
  queue.pop();
  queue.print();
}

console.log(queue.getFront());
