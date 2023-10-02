/**병합 정렬 원리
 * N개로 이루이진 수열 arr이 주어질 때, i < j이고 arr[i]>arr[j]인 것이 몇 개인지 구해보자.
 * (2 <= N <= 100000)
 */

var ans = 0;
let tmp = [];

function mergeSort(start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);

    let [left, right] = [start, mid + 1];
    let idx = start;

    while (left <= mid || right <= end) {
      if (right > end || (left <= mid && arr[left] < arr[right])) {
        tmp[idx++] = arr[left++];
      } else {
        ans += mid - left + 1;
        tmp[idx++] = arr[right++];
      }
    }

    for (let i = start; i <= end; i++) {
      arr[i] = tmp[i];
    }
  }

  return arr;
}

let N = 8;
let arr = [6, 2, 4, 8, 7, 5, 1, 3];

tmp = Array.from({ length: N + 1 }, () => 0);
arr = mergeSort(0, arr.length - 1);
console.log('sortedArr: ', arr);
console.log('answer: ', ans);
