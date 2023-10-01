/**숫자 정렬하기
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬해보자.
 * (1<=N<=10000000, 수는 절댓값이 1000000보다 작거나 같은 정수)
 */

// O(NK)
class RadixSort {
  getMaxDigit(data) {
    let maxDigit = 0;

    data.forEach((elem) => {
      maxDigit = Math.max(maxDigit, elem.toString().split('').length);
    });

    return maxDigit;
  }

  getDigit(num, i) {
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
  }

  sort(data) {
    const maxDigit = this.getMaxDigit(data);

    for (let i = 0; i < maxDigit; i++) {
      let bucket = Array.from({ length: 10 }, () => []);

      let len = data.length;
      for (let j = 0; j < len; j++) {
        let digit = this.getDigit(data[j], i);
        bucket[digit].push(data[j]);
      }

      data = bucket.flatMap((elem) => elem);
    }
    return data;
  }
}

let N = 10;
let arr = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

const radixSort = new RadixSort();
console.log('notSortedArr: ', arr);
let sortedArr = radixSort.sort(arr);
console.log('sortedArr: ', sortedArr);
