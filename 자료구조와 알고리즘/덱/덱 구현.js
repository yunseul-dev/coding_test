// 덱(디큐)이란? 큐와 스택의 기능이 합쳐진 자료구조
// push와 pop을 front에서도 back에서도 할 수 있는 자료구조
class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;

    this.size = 0;
  }

  pushFront(data) {
    let newNode = new Node(data, null, null);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;

      this.size++;
      return;
    }

    this.front.prev = newNode;
    newNode.next = this.front;
    this.front = newNode;
    this.size++;
  }

  pushRear(data) {
    let newNode = new Node(data, null, null);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;

      this.size++;
      return;
    }

    this.rear.next = newNode;
    newNode.prev = this.rear;
    this.rear = newNode;
    this.size++;
  }

  popFront() {
    let cur = this.front;

    if (this.isEmpty()) {
      console.log('덱이 비었습니다.');
      return;
    }

    if (this.getSize() == 1) {
      this.front = null;
      this.rear = null;

      this.size--;
      console.log(`Pop Front: ${cur.data}`);
      return;
    }
    this.front = this.front.next;
    this.size--;

    console.log(`Pop Front: ${cur.data}`);
  }

  popRear() {
    let cur = this.rear;

    if (this.isEmpty()) {
      console.log('덱이 비었습니다.');
      return;
    }
    if (this.getSize() == 1) {
      this.front = null;
      this.rear = null;

      this.size--;
      console.log(`Pop Rear: ${cur.data}`);
      return;
    }

    this.rear = this.rear.prev;
    this.rear.next = null;
    this.size--;

    console.log(`Pop Rear: ${cur.data}`);
  }

  print() {
    let cur = this.front;

    console.log(`크기: ${this.getSize()}`);
    while (cur != null) {
      console.log(cur.data + ' ');
      cur = cur.next;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }
}

const deque = new Deque();

deque.pushRear('화');
// deque.print();
deque.pushRear('수');
// deque.print();
deque.pushFront('월');
// deque.print();
deque.pushRear('목');
deque.pushRear('금');
deque.pushRear('토');
deque.pushRear('일');
deque.print();

deque.popFront();
deque.print();
deque.popRear();
deque.print();

deque.popFront();
deque.popRear();
deque.print();

deque.popFront();
deque.popRear();
deque.print();

deque.popFront();
deque.popRear();
deque.print();

deque.popFront();
deque.print();

deque.popRear();
deque.print();
