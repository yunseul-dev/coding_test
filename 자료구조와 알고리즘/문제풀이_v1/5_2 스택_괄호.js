/**괄호
 * '('와 ')'로만 이루어진 문자열이 있을 때, 정상적인 괄호 구조로 이루어져 있는지 판단해보자.
 * '()', '(())', '((()))'같은 경우는 괄호의 구조가 정상적으로 이루어져 있다.(O 출력)
 * 반면 '((', ')(', '((())' 같은 경우는 괄호의 구조가 정상적으로 이루어져 있지 않다.(X 출력)
 *
 * 입력: (()(()))((()))
 *      (()(((())()()(
 * 출력: O
 *      X
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
      // this.size == 0, this.getSize() == 0, this.isEmpty()
      this.top = newNode;
      this.size++;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  getTop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top.data;
  }

  pop() {
    let topData = this.getTop();
    this.top = this.top.next;

    this.size--;

    return topData;
  }

  print() {
    let cur = this.top;

    let ret = '';
    while (cur != null) {
      ret += cur.data + ' ';
      cur = cur.next;
    }
    console.log(ret);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.getSize();
  }
}

let arr1 = '(()(()))((()))';
let arr2 = '(()(((())()()(';

const stack = new Stack();

// 정상적인 괄호 구조면 true, 그렇지 않다면 false
let isNormal = true;

[...arr2].forEach((elem) => {
  if (stack.isEmpty()) {
    if (elem == ')') {
      // ')' -> '(' 이게 없다면 애초에 잘못된 비정상적인 괄호 구조
      isNormal = false;
    } else {
      stack.push(elem); // '(' -> 늘 push해도 상관없지만
    }
    return;
  }

  if (elem == ')') {
    // "(" 항상 "("이 열린 괄호밖에 존재하지 않는다. 그러기에 top이 "("가 아닌 모든 것은 정상적이지 않은 구조
    if (stack.getTop() == '(') {
      stack.pop();
    } else {
      isNormal = false;
      return;
    }
  } else {
    // '('
    stack.push(elem);
  }
});

// '((('
if (!stack.isEmpty()) {
  isNormal = false;
}

console.log('=== stack ===');
stack.print();
console.log(isNormal ? 'O' : 'X');
