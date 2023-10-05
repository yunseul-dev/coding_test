class HeapSort {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log('=== Heap ===');
    console.log(this.heap);
  }

  push(data) {
    // 1번 인덱스부터 넣는게 힙의 원칙
    this.heap[++this.cnt] = data;

    // 자식과 부모 관계 설정
    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    // 현재 위치보다 부모가 더 크면 -> 최소힙 정의에 따라 스왑
    // 늘 부모노드는 자식 서브트리의 어떤 값보다 작아야 함
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

    // 루트 데이터 pop
    let data = this.heap[1];

    // 힙의 가장 마지막 데이터를 루트로 가져온다.
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;
      // 최소 힙 정의에 따라 형제 자식 중 더 작은 값으로 이동
      if (child < this.cnt && this.heap[child] > this.heap[child + 1]) {
        child++; // 오른쪽 값으로 이동하는 과정
      }

      // 더이상 swap하지 않아도 되는 경우
      if (child > this.cnt || this.heap[cur] < this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}

const minHeapSort = new HeapSort(10);

let arr = [29, 10, 14, 37, 8, 27];
arr.forEach((elem) => minHeapSort.push(elem));
minHeapSort.print();

arr.forEach((elem) => console.log(minHeapSort.pop()));
