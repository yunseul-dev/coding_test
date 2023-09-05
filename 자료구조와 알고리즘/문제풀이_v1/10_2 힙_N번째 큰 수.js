/**N번째 큰 수
 * M개의 수가 있을 때 N번째로 큰 수를 찾아보자
 *
 * 입력: 25 5
 *      [ 12, 7, 9, 15, 5, 13, 8, 11, 19, 6, 21, 10, 26, 31, 16, 48, 14, 28, 35, 25, 52, 20, 32, 41, 49 ]
 * 출력: 35
 */

//최소 힙
const MAX = 101;
let heap = Array.from({ length: MAX }, () => 0);
let cnt = 0;

function push(data) {
  heap[++cnt] = data;

  let cur = cnt;
  let par = Math.floor(cur / 2);

  while (cur > 1 && heap[cur] < heap[par]) {
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
    if (child < cnt && heap[child] > heap[child + 1]) {
      cnt++;
    }

    if (child > cnt || heap[cur] < heap[child]) {
      break;
    }

    [heap[cur], heap[child]] = [heap[child], heap[cur]];

    cur = child;
  }

  return data;
}

// let [M, N] = [7, 3];
// let arr = [1, 2, 3, 4, 5, 6, 7];

let [M, N] = [25, 5];
let arr = [
  12, 7, 9, 15, 5, 13, 8, 11, 19, 6, 21, 10, 26, 31, 16, 48, 14, 28, 35, 25, 52,
  20, 32, 41, 49,
];

arr.forEach((elem) => {
  push(elem);
  if (cnt > N) {
    pop();
  }
});

console.log(pop());
