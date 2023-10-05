/**가장 최대인 정수
 * N개의 정수들을 붙였을 때 최대가 되도록 해보자.
 * (0 <= N <= 100, 0 <= arr[i] <= 10^9)
 */

/**
 * 3과 30이 있다면 330, 303으로 두 수를 join할 수 있고, 이때 330이 303보다 더 크기 때문에 3이 30보다 더 앞에 와야한다.
 * 34와 3이 있다면 343,334인데 이때는 34가 3보다 앞에 와함을 알 수 있다.
 */

class SelectionSort {
  sort(data) {
    let len = data.length;

    for (let i = 0; i < len - 1; i++) {
      let minIdx = i;
      let data1 = data[i]; //34

      for (let j = i + 1; j < len; j++) {
        let data2 = data[j];
        5;

        let data12 = parseInt('' + data1 + data2); // 345
        let data21 = parseInt('' + data2 + data1); // 534

        if (data12 < data21) {
          minIdx = j;
          data1 = data[j];
        }
      }

      [data[i], data[minIdx]] = [data[minIdx], data[i]];
    }
    return data;
  }
}

let N = 5;
let arr = [3, 30, 34, 5, 9];

const selectionSort = new SelectionSort();
let sortedArr = selectionSort.sort(arr);
console.log(sortedArr);
console.log(sortedArr.join(''));
