/**숫자 정렬하기
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬해보자
 * (1 <= N <= 1000, 수의 범위는 -1000000 ~ 1000000)
 */

class InsertionSort {
  sort(data) {
    let len = data.length;

    for (let i = 1; i < len; i++) {
      let target = data[i];
      let targetIdx = i;

      for (let j = i - 1; j >= 0 && data[j] > target; j--) {
        targetIdx = j;
        data[j + 1] = data[j];
      }

      data[targetIdx] = target;
    }
    return data;
  }
}

let N = 7;
let arr = [-500000, 3000, 4000, 1000000, 0, 500000, -1000000];

const insertionSort = new InsertionSort();
console.log('arr: ', arr);
let sortedArr = insertionSort.sort(arr);
console.log('sortedArr: ', sortedArr);
