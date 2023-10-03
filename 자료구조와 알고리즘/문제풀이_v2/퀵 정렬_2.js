/**K번째로 작은 수
 * N개의 수가 있을 때 K번째로 작은 수를 찾아보자.
 * (1 <= N N= 1000000)
 */

function qsort(arr, start, end) {
  if (start === end) {
    return;
  }

  let left = start;
  let right = end;

  let pivot = arr[left];

  while (left < right) {
    while (arr[right] <= pivot && right > left) {
      right--;
    }

    arr[left] = arr[right];

    while (arr[left] >= pivot && left < right) {
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

let [N, K] = [25, 5];
let arr = [
  12, 7, 9, 15, 5, 13, 8, 11, 19, 6, 21, 10, 26, 31, 16, 48, 14, 28, 35, 25, 52,
  20, 32, 41, 49,
];

console.log('정렬 전: ', arr);
qsort(arr, 0, arr.length - 1);
console.log('정렬 후: ', arr);
console.log('K번째 값: ', arr[K - 1]);
