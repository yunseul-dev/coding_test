/**최대 차이
 * N개의 수가 주어질 때, 정렬한 후, 인접한 두 수의 최대 차이를 구해보자
 * 3 6 9 1이면 -> 1 3 6 9로 정렬한 후 최대 차이는 3,6 혹은 6,9인 3이 된다.
 * (1 <= N <= 10^5, 0 <= 각 수의 값 <= 10^9)
 */

class RadixSort {
  getMaxDigit(data) {
    let maxDigit = 0;

    data.map((elem) => (maxDigit = elem.toString().split('').length));

    return maxDigit;
  }

  getDigit(num, i) {
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
  }

  sort(data) {
    const maxDigit = this.getMaxDigit(data);
    let len = data.length;

    for (let i = 0; i < maxDigit; i++) {
      let bucket = Array.from({ length: 10 }, () => []);

      for (let j = 0; j < len; j++) {
        let digit = this.getDigit(data[j], i);
        bucket[digit].push(data[j]);
      }

      data = bucket.flatMap((elem) => elem);
    }

    return data;
  }
}

let N = 4;
let arr = [3, 6, 9, 1];

const radixSort = new RadixSort();
console.log('beforeSort: ', arr);
let sortedArr = radixSort.sort(arr);
console.log('sortedArr: ', sortedArr);

let len = sortedArr.length;
let maxDiff = 0;
for (let i = 1; i < len; i++) {
  maxDiff = Math.max(sortedArr[i] - sortedArr[i - 1], maxDiff);
}

console.log('maxDiff: ', maxDiff);
