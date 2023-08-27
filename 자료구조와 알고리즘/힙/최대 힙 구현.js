/**힙이란?
 * 여러 값 중 최댓값 및 최솟값을 빠르게 찾아내기 위해 만들어진 자료구조
 * 우선순위 큐를 구현하기 위해 필수적인 자료구조
 */

/**힙(heap)의 특징
 * 완전 이진 트리의 형태를 띄는 자료 구조
 * 임의의 서브 트리에서 항상 부모 노드의 값 >= 자신 노드 값 (최대 힙 기준)
 * 형제 노드 사이에는 대소 관계가 없음
 * 힙을 통해 우선순위 큐(Priority Queue) 구현 가능
 * 힙에서는 중복된 값을 허용(이진 탐색 트리에서는 중복된 값 허용 X)
 * 최댓값 혹은 최솟값 탐색 시간 복잡도 : O(1)
 * 데이터 삽입, 삭제 시간 복잡도: O(log2 N)
 *      최악의 경우가 생겨도 힙은 완전 이진 트리이므로 항상 O(log2 N)
 * 최대 힙(max heap): 임의의 서브 트리에서 항상 부모 노드의 값 >= 자식 노드 값을 유지
 * 최소 힘(min heap): 임의의 서브 트리에서 항상 부모 노드의 값 <= 자식 노드의 값을 유지
 */

/** 실제로 힙은 어디서 쓰는 건가요?
 * 대표적인 예시로, 최소힙을 이용하여 최단거리(Dijkstra Algorithm)를 구하거나 최소 스패닝 트리(Prim Algorithm)를 구현 할 수 있다.
 *    최단거리: 홍대에서 강남까지 최단 거리
 *    최소 스패닝 트리: 모든 도시를 연결하면서 총 도로의 길이가 최소가 되도록 하려면?
 */

/**힙은 배열로 구현한다 !
 * k번 인덱스의
 *    왼쪽 자식 인덱스 : 2 * k
 *    오른쪽 자식 안덱스 : 2 * k +1
 */

class Heap {
  constructor(size) {
    this.size = size;
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0; // count(index)
  }

  print() {
    console.log('=== Max Heap ===');
    console.log(this.heap);
  }

  push(data) {
    // 딱 한 번 push -> cnt = 1 즉, 값이 힙에 1 개 있다.
    // 1번 인덱스부터 데이터를 넣을 예정
    this.heap[++this.cnt] = data;

    //자식과 부모에 대해 설정
    let cur = this.cnt;
    let par = Math.floor(cur / 2); // 현재 노드 인덱스의 *2 -> 왼쪽 자식 노드, 현재 노드 인덱스의 *2 +1 -> 오른쪽 자식 노드

    // 현재 위치보다 부모가 더 작은 값이면 -> 최대 힙의 정의에 따라 SWAP
    // 왜냐하면 늘 최대 힙은, 서브 트리에서 부모가 자식노드보다 크거나 같아야 함.
    while (cur > 1 && this.heap[cur] > this.heap[par]) {
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

    // 힙의 가장 마지막 값을 루트로 가져온다.
    // this.heap[1] = this.heap[this.cnt];
    // this.cnt--;

    this.heap[1] = this.heap[this.cnt--]; // 연산자 우선순위에 따라 위의 코드와 동일하게 동작한다

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;

      // 최대 힙 정의에 따라 형제 자식 중 더 큰 값으로 이동
      if (child < this.cnt && this.heap[child] < this.heap[child + 1]) {
        child++;
      }

      // 더이상 swap을 하지 않아도 되는 경우
      if (child > this.cnt || this.heap[cur] > this.heap[child]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }
}

const maxHeap = new Heap(11);

maxHeap.push(2);
maxHeap.push(1);
maxHeap.push(4);
maxHeap.push(3);
maxHeap.print();

console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
console.log(maxHeap.pop());
maxHeap.print();
maxHeap.push(4);
maxHeap.print();
