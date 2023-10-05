/**힙 정렬(Heap Sort)이란?
 * 최대 힙 혹은 최소 힙을 통해 정렬을 하는 알고리즘
 * 최대값 혹은 최솟값을 빠르게 찾아내기 위해 고안된 완전 이진 트리를 기본으로 한 정렬 방법
 * 완전 이진 트리와의 차이점은 부모 노드와 자식 노드 간의 규칙이 존재하는 트리형 자료구조
 *
 * 최대 힙은 부모 노드가 자식 노드보다 항상 큰 값을 가져야 함
 * 최소 힙은 부모 노드가 자식 노드보다 항상 작은 값을 가져야 함
 *
 * 힙 정렬 방법
 * 1. N개의 원소를 순차적으로 삽입
 * 2. 삽입 할 때 완전 이진 트리의 가장 마지막 위치에 삽입한 후
 *    최대 힙인 경우에는 부모 노드와 비교하여 현재(자식) 노드보다 부모 노드 값이 작으면 swap
 *    최소 힙인 경우에는 부모 노드와 비교하여 현재(자식) 노드보다 부모 노드 값이 크면 swap
 *    현재 노드가 위치해야 할 곳으로 이동할 때까지 해당 과정을 반복
 * 3. 삭제 할 때 최대 힙인 경우에는 최댓값이 루트 노드에, 최소 힙은 경우에는 최솟값이 루트 노드에 존재
 *    이진 트리의 가장 마지막에 위치한 노드를 루트 노드로 위치시킨 후
 *    최대 힙인 경우에는 부모 노드와 비교하여 현재(부모) 노드보다 자식 노드 값이 크면 swap
 *    최소 힙인 경우에는 부모 노드와 비교하여 현재(부모) 노드보다 자식 노드 값이 작으면 swap
 *    현재 노드가 위치해야 할 곳으로 이동할 때까지 해당 과정을 반복
 */

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
    // 1번 인덱스부터 넣어야 하기에 ++cnt
    this.heap[++this.cnt] = data;

    // 자식과 부모관계 설정
    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    // 현재 위치보다 부모가 더 작으면 -> 최대힙 정의에 따라 스왑
    // (왜냐하면 늘 부모노드가 자식 서브트리보다 값이 커야함)
    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt == 0) {
      return -1;
    }

    // 루트 데이터를 pop
    let data = this.heap[1];
    //힙의 가장 마지막 데이터를 루트로 가져온다.
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;
      // 최대힙 정의에 따라 형제 자식 중 더 큰 값으로 선택
      if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
        child++;
      }

      // 더이상 swap 하지 않아도 되는 경우
      if (child > this.cnt || this.heap[cur] > this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}

const maxHeapSort = new HeapSort(100);

let arr = [29, 10, 14, 37, 8, 27];
arr.forEach((elem) => maxHeapSort.push(elem));
maxHeapSort.print();

arr.forEach((elem) => console.log(maxHeapSort.pop()));
