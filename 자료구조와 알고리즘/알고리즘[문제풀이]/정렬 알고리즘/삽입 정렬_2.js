/**삽입 정렬 횟수 세기
 * N개의 수가 주어질 때 삽입 정렬을 하고자 한다.
 * 이때 삽입 정렬동안 얼마나 이동하는지 계산해보자
 */

class InsertionSort {
  sort(data) {
    let count = 0;
    let len = data.length;

    for (let i = 1; i < len; i++) {
      let targetIdx = i;
      let target = data[i];

      for (let j = i - 1; (j >= 0) & (data[j] > target); j--) {
        targetIdx = j;
        data[j + 1] = data[j];
        count++;
      }

      data[targetIdx] = target;
    }

    return [data, count];
  }
}

let N = 4;
let arr = [20, 40, 30, 10];
// let N2 = 3;
// let arr2 = [-1, 1, 0];

const insertionSort = new InsertionSort();
console.log('arr: ', arr);
let [sortedArr, count] = insertionSort.sort(arr);
console.log('sortedArr: ', sortedArr);
console.log('count: ', count);
