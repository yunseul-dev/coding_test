/**숫자 정렬하기
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬해보자.
 * (1<=N<=1000, 수의 범위는 -1000000 ~ 1000000)
 */

class SelectionSort {
  sort(data) {
    let len = data.length;

    for (let i = 0; i < len - 1; i++) {
      let minIdx = i;

      for (let j = i + 1; j < len; j++) {
        if (data[minIdx] > data[j]) {
          minIdx = j;
        }
      }
      [data[i], data[minIdx]] = [data[minIdx], data[i]];
    }

    return data;
  }
}

const selectionSort = new SelectionSort();
let N = 7;
let arr = [-500000, 3000, 40000, 1000000, 0, 500000, -1000000];
console.log(arr);
let sortedArr = selectionSort.sort(arr);
console.log(sortedArr);
