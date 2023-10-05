/**기수 정렬(Radix Sort)이란?
 * 각 자릿수끼리 비교해서 정렬하는 알고리즘
 *
 * 맨 뒤에 있는 자릿수부터 해당 자릿수를 기준으로 정렬한 뒤,
 * 한 자리씩 앞으로 이동하며 각 자릿수를 기준으로 정렬하여 최종적으로 가장 높은 자릿수를 기준으로 정렬하는 방법
 *
 * 기수 정렬 방법
 * 1. 0~9까지의 Bucket(Queue)을 준비한다.
 * 2. 모든 원소들의 i 회전마다 i번째 자릿수에 해당하는 Bucket에 차례대로 원소를 추가한다.
 * (1회전 때는 첫 번째 자릿수, 2회전 때는 두 번째 자릿수, ...)
 * 3. 0부터 차례대로 버킷에서 원소를 다시 가져온다.
 * 4. 자릿수를 한 자리씩 증가시키며 2번 3번 과정을 반복한다.
 */

class RadixSort {
  // 최대 자릿수를 찾는 함수
  getMaxDigit(data) {
    let maxDigit = 0;
    // 3221 -> '3221' -> ['3','2','2','1'] -> 4
    data.map(
      (elem) =>
        (maxDigit = Math.max(maxDigit, elem.toString().split('').length))
    );

    return maxDigit;
  }

  // getDigit(3221,0) -> 1 (첫 번째 값)
  // getDigit(3221,1) -> 2 (두 번째 값)
  // getDigit(3221,2) -> 2 (세 번째 값)
  // getDigit(3221,3) -> 3 (네 번째 값)
  // getDigit(3221,4) -> 0 (다섯 번째 값) (03321)

  getDigit(num, i) {
    // 3221,2 경우
    // 3221 / 10^2 = 32
    // 32 % 10 = 2 (나머지)
    // 자바스크립트 소수점 연산 시 오류로 인해 소수점을 내림해줘야 함
    // ex) 0.1 + 0.2 를 입력하면 0.3이 아닌 0.30000000004가 출력
    // 따라서 Math.floor가 필요
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
  }

  sort(data) {
    const maxDigit = this.getMaxDigit(data);

    // 0 ~ 최대 자릿수만큼 반복
    for (let i = 0; i < maxDigit; i++) {
      // 정수 0~9를 담을 수 있는 버킷(Queue) 생성
      let bucket = Array.from({ length: 10 }, () => []);

      const len = data.length;
      // 데이터들을 순회하면서 해당 값의 자릿수를 가져와서 bucket에 넣어준다.
      for (let j = 0; j < len; j++) {
        let digit = this.getDigit(data[j], i);
        bucket[digit].push(data[j]);
      }

      // flatMap을 통해 data를 정렬시켜준다.
      // flatMap 이용시 [[1], [2,5], [4]]
      // 큐에 담아둔 아이들을 풀어준다.
      data = bucket.flatMap((elem) => elem);
    }
    return data;
  }
}

const radixSort = new RadixSort();
let arr = [3221, 1, 10, 960, 577, 9420, 7, 522];
console.log('arr: ', arr);
let sortedArr = radixSort.sort(arr);
console.log(sortedArr);
