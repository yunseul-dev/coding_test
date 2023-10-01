/**K번째 큰 수
 * N개의 수가 주어질 때, K번째 큰 수를 구해보자.
 * (1 <= K <= N <= 1000000, -1000 <= arr[i] <= 1000)
 */

class MinHeap {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  top() {
    if (this.cnt == 0) {
      return Infinity;
    }

    let data = this.heap[1];
    return data;
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

      cur = child;
    }

    return data;
  }

  size() {
    return this.cnt;
  }
}

let [N, K] = [10, 3];
let arr = [9, 1, 2, 3, 7, 8, 4, 10, 5, 6];

let minHeap = new MinHeap(N + 1);

arr.forEach((elem) => {
  if (minHeap.size() < K) {
    minHeap.push(elem);
  } else if (minHeap.size() == K && minHeap.top() < elem) {
    minHeap.pop();
    minHeap.push(elem);
  }
});

console.log(minHeap.top());
