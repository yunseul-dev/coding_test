/**최소 비용 만들기
 * N개의 수가 주어질 때, 두개씩 합쳐서 1개로 만들기까지 드는 최소 비용을 구해보자.
 */

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
    if (child + 1 <= cnt && heap[child] > heap[child + 1]) {
      child++;
    }

    // 최소힙의 경우 부모가 자식보다 작거나 같아야한다.
    // 그런데 heap[cur] < heap[child] 이 경우에는 더이상 SWAP이 필요가 없다.
    if (child > cnt || heap[cur] < heap[child]) {
      break;
    }

    [heap[cur], heap[child]] = [heap[child], heap[cur]];

    cur = child;
  }

  return data;
}

function getSize() {
  return cnt;
}

let N = 4;
// let arr = [30, 50, 40, 100];
let arr = [120, 40, 100, 20];

arr.forEach((elem) => {
  push(elem);
});

let ret = 0;

while (getSize() != 1) {
  let first = pop();
  let second = pop();

  let sum = first + second;
  ret += sum;
  console.log(`first: ${first}, second: ${second}`);

  push(sum);
}

console.log(ret);
