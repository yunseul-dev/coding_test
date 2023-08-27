class Heap {
  constructor(size) {
    this.size = size;
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log('=== Min Heap ===');
    console.log(this.heap);
  }

  push(data) {
    // 1번 인덱스부터 넣어야 하기에 ++cnt
    this.heap[++this.cnt] = data;

    // 자식과 부모의 노드 인덱스를 설정
    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    // 현재 위치(자식)보다 부모가 더 크면 -> 최소 힙 정의에 따라 SWAP
    // 왜냐면 늘, 서브 트리에서 부모가 더 작거나 같아야 함
    while (cur > 1 && this.heap[cur] < this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt == 0) {
      return null;
    }
    // 루트 데이터를 pop
    const data = this.heap[1];

    // 힙의 가장 마지막 데이터를 가장 위로(루트로) 가져온다.
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;

      // 최소 힙 정의에 따라 형제 자식 중 더 작은 값으로 이동
      if (child < this.cnt && this.heap[child] > this.heap[child + 1]) {
        child++;
      }

      // 더이상 swap을 하지 않아도 되는 경우
      if (child > this.cnt || this.heap[cur] < this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}

const minHeap = new Heap(11); // 0번 인덱스부터 시작하기에 11로 해야 10개의 공간을 준 것과 동일

minHeap.push(5);
minHeap.print();
minHeap.push(2);
minHeap.print();
minHeap.push(2);
minHeap.print();
minHeap.push(1);
minHeap.print();

console.log(minHeap.pop());
minHeap.print();
console.log(minHeap.pop());
minHeap.print();
console.log(minHeap.pop());
minHeap.print();
console.log(minHeap.pop());
minHeap.print();
console.log(minHeap.pop());
minHeap.print();

minHeap.push(9);
minHeap.print();
