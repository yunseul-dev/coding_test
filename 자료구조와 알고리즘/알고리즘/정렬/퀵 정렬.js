/**퀵 정렬(Quick Sort)이란?
 * 정렬할 원소들을 pivot을 기준으로 나누고 각각 정렬한 후 합쳐 나가는 알고리즘
 * 하나의 큰 문제를 두 개의 작은 문제로 분할한 뒤 정렬을 한 후 합쳐나가며
 * 최종적으로 정렬을 완성하는 분할 정복 알고리즘(Divide and conquer algorithm)
 *
 * 퀵 정렬 방법
 * 1. 배열에 있는 원소 중 하나를 선택한다. 이때 선택한 원소를 pivot(피벗)이라고 한다.
 * 2. pivot을 기준으로 pivot보다 작은 원소들은 모두 pivot의 왼쪽으로 옮기고 pivot보다 큰 원소들은 모두 pivot의 오른쪽으로 옮긴다.
 * 3. pivot을 기준으로 왼쪽 배열과 오른쪽 배열을 분할하여 1번과 2번 작업을
 *    더이상 분할이 불가능 할 때까지 재귀적으로 반복한다.
 */

class QuickSort {
  sort(data, start, end) {
    if (start == end) {
      return;
    }

    let left = start;
    let right = end;

    let pivot = data[left];

    // 오른쪽 값이 pivot보다 작으면 pivot 왼쪽으로, 왼쪽 값이 pivot보다 크면 pivot 오른쪽으로
    while (left < right) {
      // 피벗값보다 right값이 큰 경우에는 right가 왼쪽으로 이동
      while (data[right] >= pivot && right > left) {
        right--;
      }
      // 그렇지 않은 경우에는 left 위치에 right값을 대입
      data[left] = data[right];

      while (data[left] <= pivot && left < right) {
        left++;
      }

      // 그렇지 않은 경우에는 right 위치에 left 값을 대입
      data[right] = data[left];

      // left와 right가 만나는 지점이 pivot 값이 들어가는 위치
      if (left == right) {
        data[left] = pivot;
        this.sort(data, start, right - 1);
        this.sort(data, left + 1, end);
      }
    }

    return data;
  }
}

const quickSort = new QuickSort();
let arr = [6, 2, 3, 8, 4, 5, 1, 7];

console.log('notSorted: ', arr);
let sortedArr = quickSort.sort(arr, 0, arr.length - 1);
console.log('sortedArr: ', sortedArr);
