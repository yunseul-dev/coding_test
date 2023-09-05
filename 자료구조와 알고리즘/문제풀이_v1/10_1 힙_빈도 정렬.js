/**빈도 정렬
 * 수가 주어지면 각 자릿수를 내림차순으로 정렬해보자
 */

// 최대힙 => 가장 큰 값이 가장 위에 있음
const Max = 101;
let heap = Array.from({ length: 100 }, () => 0);
let cnt = 0;

function print() {
  console.log('==== heap ====');
  console.log(heap);
}

function push(data) {
  // 현재노드 * 2 -> 왼쪽노드  /// 현재노드 * 2 + 1 -> 오른쪽노드
  heap[++cnt] = data;

  // 자식과 부모를 설정
  let cur = cnt;
  let par = Math.floor(cur / 2);

  while (cur > 1 && heap[cur] > heap[par]) {
    [heap[cur], heap[par]] = [heap[par], heap[cur]];

    cur = par;
    par = Math.floor(cur / 2);
  }
}

function pop() {
  if (cnt == 0) {
    return null;
  }

  const data = heap[1];
  heap[1] = heap[cnt--];

  let cur = 1;
  let child;

  while (1) {
    child = cur * 2;
    if (child < cnt && heap[child] < heap[child + 1]) {
      child++;
    }

    if (child > cnt || heap[cur] > heap[child]) {
      break;
    }

    [heap[cur], heap[child]] = [heap[child], heap[cur]];

    cur = child;
  }

  return data;
}

// let arr = '9999898';
// let arr = '2143';
let arr = '500613009';

arr = arr.split('');
arr.forEach((elem) => {
  push(Number(elem));
});

arr = [];
while (cnt) {
  arr.push(pop());
}
console.log(arr);
arr = arr.join('');
console.log(arr);
