/**최대 합
 * N개의 정수와 연속적인 범위를 나타내는 K가 주어질 때 합이 최대가 되는 값을 출력하자.
 *
 * 입력: 3 -2 -4 -9 0 3 7 13 8 -3
 *      2
 * 출력: 21
 */

class Deque {
  constructor() {
    this.deque = [];
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

  front() {
    if (this.isEmpty()) {
      return null;
    }

    return this.deque[0];
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

  rear() {
    if (this.isEmpty()) {
      return null;
    }

    return this.deque[this.getSize() - 1];
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

let arr = [3, -2, -4, -99, 0, 3, 7, 13, 8, -3];
let K = 2;

const deque = new Deque();
arr.forEach((elem) => deque.pushRear(elem));

let maxVal = 0;
while (deque.getSize() > K) {
  let val1 = deque.popFront();
  let val2 = deque.front();

  maxVal = Math.max(maxVal, val1 + val2);
}

console.log(maxVal);
