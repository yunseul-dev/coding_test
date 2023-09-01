/**가장 큰 수
 * N자리 숫자가 주어질 때, k개를 지워 얻을 수 있는 가장 큰 수를 구해보자.
 *
 * 입력: 5477292842  4
 * 출력: 792842
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data);
    if (this.top == null) {
      this.top = newNode;
      this.size++;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  getTop() {
    if (this.top == null) {
      return null;
    } else {
      return this.top.data;
    }
  }

  pop() {
    let topData = this.getTop();
    this.top = this.top.next;

    this.size--;

    return topData;
  }

  print(isReverseRequired) {
    let cur = this.top;

    let ret = '';
    while (cur != null) {
      ret += cur.data;
      cur = cur.next;
    }

    if (isReverseRequired) {
      console.log(ret.split('').reverse().join(''));
    } else {
      console.log(ret);
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

let N = '5477292842'; // 4321
let K = 4; // 2

const stack = new Stack();

[...N].forEach((elem) => {
  if (stack.isEmpty()) {
    stack.push(elem);
  } else {
    while (!stack.isEmpty() && elem > stack.getTop() && K > 0) {
      stack.pop();
      K--;
    }
    stack.push(elem);
  }
});

while (K > 0) {
  stack.pop();
  K--;
}

stack.print(true);
