/**절댓값 정렬
 * N개의 수가 주어졌을 때, 절댓값을 기준으로 오름차순 정렬을 해보자.
 * 이때 절댓값이 같다면 실제 값이 작은 수가 더 앞선다.
 * (1 <= N <= 100000)
 */

// 최대 힙에 음수의 값, 최소 힙에 양수의 값을 저장

class MinHeap {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.heap[++this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] < this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  top() {
    if (this.cnt == 0) {
      return Infinity;
    }

    let data = this.heap[1];
    return data;
  }

  pop() {
    if (this.cnt == 0) {
      return Infinity;
    }

    let data = this.heap[1];
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;
      if (child < this.cnt && this.heap[child] > this.heap[child + 1]) {
        child++;
      }

      if (child > this.cnt || this.heap[cur] < this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];
    }

    return data;
  }
}

class MaxHeap {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.heap[++this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  top() {
    if (this.cnt == 0) {
      return Infinity;
    }

    let data = this.heap[1];
    return data;
  }

  pop() {
    if (this.cnt == 0) {
      return Infinity;
    }

    let data = this.heap[1];
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;

      if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
        child++;
      }

      if (child > this.cnt || this.heap[cur] > this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[par], this.heap[child]];

      cur = child;
    }

    return data;
  }
}

let N = 8;
let arr = [1, 2, 3, -4, 4, -5, 7, -1];

let minHeap = new MinHeap(N + 1);
let maxHeap = new MaxHeap(N + 1);

arr.forEach((elem) => {
  if (elem <= 0) {
    maxHeap.push(elem);
  } else {
    minHeap.push(elem);
  }
});

let sortedArr = [];
while (N--) {
  let data1 = maxHeap.top();
  let data2 = minHeap.top();

  if (Math.abs(data1) > Math.abs(data2)) {
    sortedArr.push(data2);
    minHeap.pop();
  } else {
    sortedArr.push(data1);
    maxHeap.pop();
  }
}

console.log(sortedArr);
