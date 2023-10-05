/**절댓값 정렬
 * N개의 수가 주어졌을 때, 절댓값을 기준으로 오름차순 정렬해보자.
 * 이때 절댓값이 같아면 실제 값이 작은 수가 더 앞선다.
 * (1 <= N <= 100000, -100000 <= arr[i] <= 100000)
 */

function qsort(arr, start, end) {
  if (start == end) {
    return;
  }

  let left = start;
  let right = end;

  let pivot = arr[left];

  while (left < right) {
    while (Math.abs(arr[right]) >= Math.abs(pivot) && right > left) {
      right--;
    }

    arr[left] = arr[right];

    while (Math.abs(arr[left]) <= Math.abs(pivot) && left < right) {
      left++;
    }

    arr[right] = arr[left];
    if (left == right) {
      arr[left] = pivot;
      qsort(arr, start, right - 1);
      qsort(arr, left + 1, end);
    }
  }
}

let N = 8;
let arr = [2, 3, -4, 4, -5, 7, 1, -1];

console.log('정렬 전: ', arr);
qsort(arr, 0, arr.length - 1);
console.log('정렬 후: ', arr);

let len = arr.length;
for (let i = 1; i < len; i++) {
  if (arr[i - 1] === -arr[i] && arr[i - 1] > arr[i]) {
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
  }
}

console.log('answer: ', arr);
