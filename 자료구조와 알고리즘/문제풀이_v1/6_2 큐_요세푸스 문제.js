/**요세푸스 문제
 * 1부터 N까지 N명의 사람이 원을 이루면서 앉아있고, K번째 사람을 제거한다.
 * 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
 * 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.
 * 이렇게 원에서 사람들이 제거되는 순서를 요세푸스 순열이라고 한다.
 * 이때 N과 K가 주어질 때 제거되는 순서대로 출력해보자.
 *
 * 입력: 7 3
 * 출력: 3 6 2 7 5 1 4
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;

    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data);

    if (this.size == 0) {
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

  isEmpty() {
    return !this.size;
  }

  getSize() {
    return this.size;
  }
}

let N = 7;
let K = 3;

let ret = [];

const queue = new Queue();

// for (let i = 0; i < N; i++) {
//   queue.push(i + 1);
// }

// while (N--) {
//   for (let i = 1; i < K; i++) {
//     queue.push(queue.getFront());
//     queue.pop();
//   }

//   answer.push(queue.getFront());
//   queue.pop();
// }

let arr = Array.from({ length: N }, (elem, idx) => idx + 1);

arr.forEach((elem) => queue.push(elem));
while (!queue.isEmpty()) {
  for (let i = 1; i < K; i++) {
    let val = queue.getFront();
    queue.pop();
    queue.push(val);
  }

  ret.push(queue.getFront());
  queue.pop();
}

console.log(ret);
