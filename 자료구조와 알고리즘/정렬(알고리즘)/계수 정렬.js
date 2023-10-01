/**계수 정렬이란(Counting Sort)?
 * 원소끼리 비교하지 않고 정렬을 하는 알고리즘
 *
 * 원소를 하나하나 비교하지 않고 각 숫자가 몇 개인지 세어 숫자에 해당하는 배열 인덱스에 저장하여 정렬
 * 이떄 배열 인덱스에 저장하여 정렬하는 방식이므로 정렬할 값이 정수일 때 사용 가능
 *
 * 계수정렬 방법
 * 1. 0부터 가장 큰 원소까지의 범위가 모두 담길 수 있는 배열을 생성
 * 2. 원소 값과 동일한 인덱스의 배열 값을 1씩 증가
 * 3. 배열을 순회하며 0인 값을 제외하고 해당 값만큼 인덱스를 출력
 */

class CountingSort {
  sort(data) {
    // data 배열에서 가장 큰 수를 찾아야 함
    const max = Math.max(...data);
    const countingArr = Array.from({ length: max + 1 }, () => 0);

    let len = data.length;
    // 현재 값을 토대로 countingArr의 인덱스 위치에 값을 +1 해준다.
    for (let i = 0; i < len; i++) {
      countingArr[data[i]]++;
    }

    // countingArr의 값이 1 이상일 때
    // 해당 인덱스 값을 data에 넣어주면 정렬 완료
    let idx = 0;
    len = countingArr.length;
    for (let i = 0; i < len; i++) {
      if (countingArr[i] > 0) {
        for (let j = 0; j < countingArr[i]; j++) {
          data[idx++] = i;
        }
      }
    }

    return data;
  }
}

const countingSort = new CountingSort();
let arr = [1, 2, 2, 3, 2, 8, 7, 9, 7, 9];
console.log('arr: ', arr);
let sortedArr = countingSort.sort(arr);
console.log('sortedArr: ', sortedArr);
