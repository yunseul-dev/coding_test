/**가장 빠르 문자열
 * 주어진 문자 리스트를 순서대로 가장 앞 또는 가장 뒤에 놓을 수 있을 때 만들 수 있는 가장 빠르 문자열을 만들어보자
 *
 * 입력: BACABAC
 * 출력: AAABCBC
 */

class Deque {
  constructor() {
    this.deque = [];
  }

  front() {
    return this.deque[0];
  }

  pushFront(data) {
    this.deque.unshift(data);
  }

  popFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.deque.shift();
  }

  rear() {
    if (this.isEmpty()) {
      return null;
    }

    return this.deque[this.getSize() - 1];
  }

  pushRear(data) {
    this.deque.push(data);
  }

  popRear() {
    if (this.isEmpty()) {
      return null;
    }
    return this.deque.pop();
  }

  getSize() {
    return this.deque.length;
  }

  isEmpty() {
    return !this.getSize();
  }

  print() {
    console.log(this.deque);
  }
}

let arr = 'BACABAC';

const deque = new Deque();

[...arr].forEach((elem) => {
  if (deque.isEmpty()) {
    deque.pushRear(elem);
  } else {
    if (deque.rear() >= elem && deque.front() >= elem) {
      deque.pushFront(elem);
    } else {
      deque.pushRear(elem);
    }
  }

  deque.print();
});
