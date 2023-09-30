/**선택 정렬
 * 각 회전마다 가장 작은 원소를 선택하여 정렬하는 알고리즘
 * 각 회차마다 원소를 넣을 위치가 정해져 있고, 그 위치에 어떤 원소를 넣을지 선택하여 정렬하는 알고리즘
 *
 * 1회전
 * 첫 번째 원소부터 N번째 원소까지 차례대로 비교하여 가장 작은 값을 찾아 첫 번째 값과 교환
 *
 * 1회전을 수행하고 나면 가장 작은 원소가 가장 앞으로 이동하게 됨
 *
 * 2회전
 * 두 번째 원소부터 N번째 원소까지 차례대로 비교하여 가장 작은 값을 찾아 두 번째 값과 교환
 *
 * 2회전을 수행하고 나면 두 번째로 작은 원소가 가장 앞 + 1로 이동하게 됨
 * ...
 */

class SelectionSort {
  sort(data) {
    let len = data.length;

    // 선택 정렬에서 N-1 ㅚ전이 종료되면 마지막 데이터도 자동 정렬이 완교되기에 N-1
    for (let i = 0; i < len - 1; i++) {
      let minIdx = i; // i회전에 i번째 원소가 최솟값임을 가정

      for (let j = i + 1; j < len; j++) {
        if (data[minIdx] > data[j]) {
          minIdx = j;
        }
      }
      // 최솟값이 있는 index를 찾으면 해당 minIdx와 현제 위치 i를 swap
      [data[i], data[minIdx]] = [data[minIdx], data[i]];
    }
    return data;
  }
}

const selectionSort = new SelectionSort();
let arr = [28, 10, 14, 37, 8, 27];
console.log(arr);
let sortedArr = selectionSort.sort(arr);
console.log(sortedArr);
