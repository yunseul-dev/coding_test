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
      return;
    }

    let cur = this.front;
    this.front = this.front.next;

    console.log(cur.data);

    this.size--;
  }

  print() {
    let cur = this.front;

    console.log(`크기: ${this.getSize()}`);
    while (cur != null) {
      console.log(cur.data);

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

const queue = new Queue();

queue.push('월');
queue.push('화');
queue.push('수');
queue.push('목');
queue.push('금');
queue.print();

console.log('-----------');
queue.pop();
queue.print();

console.log('-----------');
queue.pop();
queue.print();

console.log('-----------');
queue.pop();
queue.print();

console.log('-----------');
queue.pop();
queue.print();

console.log('-----------');
queue.pop();
queue.print();
