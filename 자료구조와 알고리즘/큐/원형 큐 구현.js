class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircularQueue {
  constructor() {
    this.front = null;
    this.rear = null;

    // (공백) 월 화 수 목 금 토 일
    this.size = 8;
    this.count = 0;

    // 연결 리스트의 빈 공간을 사전에 할당해야 원형 큐를 만들 수 있음.
    for (let i = 0; i < this.size; i++) {
      let newNode = new Node(null, null);

      if (i == 0) {
        // 첫번째 노드
        this.front = newNode;
        this.rear = newNode;
      } else if (i == this.size - 1) {
        //마지막 노드
        this.rear.next = newNode;
        this.rear = newNode;

        this.rear.next = this.front;
        this.rear = this.front;
      } else {
        // 그 외 노드
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  }

  push(data) {
    if (this.rear.next != this.front) {
      this.rear = this.rear.next;
      this.rear.data = data;
      this.count++;
    }
  }

  pop() {
    if (this.front != this.rear) {
      // if(!isEmpty())
      this.front = this.front.next;
      console.log(`pop 결과: ${this.front.data}`);
      this.front.data = null;
      this.count--;
    }
  }

  print() {
    let cur = this.front.next;

    console.log(`크기: ${this.count}`);
    while (cur != this.front) {
      console.log(cur.data);
      cur = cur.next;
    }
  }

  getSize() {
    return this.count;
  }

  isEmpty() {
    return this.front == this.rear; // this.count == 0
  }
}

const circularQueue = new CircularQueue();

circularQueue.push('월');
circularQueue.print();

circularQueue.push('화');
circularQueue.push('수');
circularQueue.push('목');
circularQueue.push('금');
circularQueue.push('토');
circularQueue.push('일');
circularQueue.push('홈');
circularQueue.print();

circularQueue.pop();
circularQueue.push('월');
circularQueue.print();

circularQueue.pop();
circularQueue.pop();
circularQueue.pop();
circularQueue.pop();
circularQueue.pop();
circularQueue.pop();
circularQueue.pop();
circularQueue.pop();
circularQueue.print();

circularQueue.push('토');
circularQueue.print();

circularQueue.push('일');
circularQueue.print();
