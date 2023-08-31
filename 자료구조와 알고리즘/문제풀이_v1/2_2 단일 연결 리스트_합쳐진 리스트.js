/**합쳐진 리스트
 * 정렬된 두 Array가 있을 때, 오름차순으로 하나의 리스트로 합쳐보자
 */

/**
let A = [2, 5, 8, 10];
let B = [1, 3, 4, 9, 12];

const answer = [...A, ...B].sort((a, b) => a - b);
console.log(answer);
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data, null);
    if (this.size == 0) {
      this.head = newNode;
      this.tail = newNode;

      this.size++;
      return;
    }

    //(h) ㅁ -> ㅁ -> ㅁ -> ㅁ -> ㅁ (t)
    this.tail.next = newNode;
    this.tail = newNode;

    this.size++;
  }

  print() {
    let cur = this.head;
    let ret = [];

    while (cur != null) {
      ret.push(cur.data);
      cur = cur.next;
    }

    console.log(ret);
  }
}

let arr1 = [2, 5, 8, 10];
let arr2 = [1, 3, 4, 9, 12];

let idx1 = 0;
let idx2 = 0;

const linkedList = new LinkedList();

while (1) {
  if (idx1 >= arr1.length || idx2 >= arr2.length) {
    break;
  }
  if (arr1[idx1] > arr2[idx2]) {
    linkedList.push(arr2[idx2]);
    idx2++;
  } else {
    linkedList.push(arr1[idx1]);
    idx1++;
  }
}

while (idx1 < arr1.length) {
  linkedList.push(arr1[idx1]);
  idx1++;
}

while (idx2 < arr2.length) {
  linkedList.push(arr2[idx2]);
  idx2++;
}

linkedList.print();
