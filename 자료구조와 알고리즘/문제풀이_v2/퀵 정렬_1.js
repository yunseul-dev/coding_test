/**수 정렬하기
 * N개의 수가 주어졌을 때, 오름차순으로 정렬해보자
 * (1 <= N <= 1000000, -1000000 <= arr[i] <= 1000000)
 */

function qsort(arr, start, end) {
  if (start === end) {
    return;
  }
  let left = start;
  let right = end;
  let pivot = arr[left];
  while (left < right) {
    while (arr[right] >= pivot && right > left) {
      right--;
    }
    arr[left] = arr[right];
    while (arr[left] <= pivot && left < right) {
      left++;
    }
    arr[right] = arr[left];
    if (left === right) {
      arr[left] = pivot;
      qsort(arr, start, right - 1);
      qsort(arr, left + 1, end);
    }
  }
  return arr;
}

let N = 10;
let arr = [10, 2, 4, 15, -1, 7, 3, 6, 30, 21];

console.log('정렬 전: ', arr);
qsort(arr, 0, arr.length - 1);
console.log('정렬 후: ', arr);
