/**삽입 정렬이란?
 * 새로운 원소를 이전까지 정렬된 원소 사이에 올바르게 삽입시키는 알고리즘
 *
 * i번째 원소를 정렬하기 위해 i-1번째부터 1번째까지 순차적으로 탐색하면서 자신에게 맞는 위치를 찾는 방식으로 정렬
 * 이 때, 두 번째 수부터 시작해 같은 작업을 반복하기 때문에 i번째 수를 삽입하고자 할 때는
 * 첫 번째부터 i-1번째는 수가 정렬된 상태이므로 정렬된 상태에서 i번째 수를 넣는 위치를 찾을 수 있음
 *
 * 삽입 정렬 방법
 *
 * 1회전
 * 두 번째 원소가 이미 정렬된 첫 번째 ~ 첫 번째 원소까지의 원소들과 비교하며 정렬 될 위치로 이동
 * 1회전을 수행하고 나면 두 번째까지의 원소가 정렬된 상태를 유지하게 됨
 *
 * 2회전
 * 세 번째 원소가 이미 정렬된 첫 번째 ~ 두 번째 원소까지의 원소들과 비교하며 정렬 될 위치로 이동
 * 2회전을 수행하고 나면 세 번쨰까지의 원소가 정렬된 상태를 유지하게 됨
 *
 * 3회전
 * 네 번째 원소가 이미 정렬된 첫 번째~ 세 번째 원소까지의 원소들과 비교하며 정렬 될 위치로 이동
 * 3회전을 수행하고 나면 네 번째까지의 원소가 정렬된 상태를 유지하게 됨
 */

class InsertionSort {
  sort(data) {
    let len = data.length;

    // 삽입 정렬은 두 번째 원소부터 시작
    for (let i = 1; i < len; i++) {
      let target = data[i];
      let targetIdx = i;

      // 이미 정렬된 0~i~1번 인덱스 사이에서
      // target data보다 배열 내의 j번째 데이터가 크면 한 칸씩 뒤로 밀기

      // target: 1
      // (targetIdx) 4 3 2
      for (let j = i - 1; j >= 0 && data[j] > target; j--) {
        targetIdx = j;
        data[j + 1] = data[j];
      }

      // 마지막으로 target data가 들어가야 할 위치에 데이터를 삽입하면서
      // 0 ~ targetIdx 까지 정렬이 완료
      data[targetIdx] = target;
    }
    return data;
  }
}

const insertSort = new InsertionSort();
let arr = [28, 10, 14, 37, 8, 27];
console.log('arr: ', arr);
let sortedArr = insertSort.sort(arr);
console.log('sortedArr: ', sortedArr);
