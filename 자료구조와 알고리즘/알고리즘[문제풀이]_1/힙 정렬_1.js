/**수 정렬하기
 * N개의 수가 주어졌을 때, 오름차순으로 정렬하라  => minHeap
 * (1 <= N <= 1000000, -1000000 <= arr[i] <= 1000000)
 */

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
      return null;
    }

    let data = this.heap[1];
    return data;
  }

  pop() {
    if (this.cnt == 0) {
      return null;
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

      [this.heap[child], this.heap[cur]] = [this.heap[cur], this.heap[child]];

      cur = child;
    }

    return data;
  }

  size() {
    return this.cnt;
  }

  empty() {
    return !this.size();
  }
}

let N = 10;
let arr = [10, 2, 4, 15, -1, 7, 3, 6, 30, 21];

let minHeap = new MinHeap(N + 1);

arr.forEach((elem) => minHeap.push(elem));

while (!minHeap.empty()) {
  console.log(minHeap.pop());
}
