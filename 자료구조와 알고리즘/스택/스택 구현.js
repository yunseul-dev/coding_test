// 일반적인 방법
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
    let newNode = new Node(data, null);

    if (this.isEmpty()) {
      this.top = newNode;
      this.size++;

      return;
    }

    newNode.next = this.top;
    this.top = newNode;

    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    let cur = this.top;
    this.top = this.top.next;

    this.size--;
    console.log(cur.data);
  }

  // Last In First Out (LIFO)
  print() {
    let cur = this.top;

    console.log(`크기 :: ${this.getSize()}`);
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

const stack = new Stack();
stack.push(5);
// stack.print();
stack.push(4);
// stack.print();
stack.push(3);
// stack.print();
stack.push(2);
// stack.print();
stack.push(1);
// stack.print();

console.log('--------');
stack.pop();
stack.print();

console.log('--------');
stack.pop();
stack.print();

console.log('--------');
stack.pop();
stack.print();

console.log('--------');
stack.pop();
stack.print();

console.log('--------');
stack.pop();
stack.print();
