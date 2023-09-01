/**단어 뒤집기
 * 공백으로 이루어진 단어들의 리스트가 있을 때, 이 단어 리스트를 반대 순서로 뒤집어보자.
 *
 * 입력: JavaScript is the Programming Language for the Web
 * 출력: Web the for Language Programming the is JavaScript
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
  }

  push(data) {
    let newNode = new Node(data, null);

    if (this.top == null) {
      this.top = newNode;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
  }

  reverse() {
    let cur = this.top;

    let ret = '';
    while (cur != null) {
      ret += cur.data + ' ';

      cur = cur.next;
    }

    console.log(ret);
  }
}

const stack = new Stack();
const arr = [
  'JavaScript',
  'is',
  'the',
  'Programming',
  'Language',
  'for',
  'the',
  'Web',
];

arr.map((elem) => stack.push(elem));

stack.reverse();
