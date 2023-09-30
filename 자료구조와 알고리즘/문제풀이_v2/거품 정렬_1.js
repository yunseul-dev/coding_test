/**숫자 정렬
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬해보자.
 * (1 <= N <= 1000, 수의 범위는 -1000000 ~ 1000000)
 */

class AdvBubbleSort {
  sort(data) {
    let len = data.length;
    // 현재 단계에서 swap이 되었는지
    let isSwap = false;

    // 1 2 3 4 5
    // 1단계 1 2 3 4 5
    // 2단계 1 2 3 4 5
    // ...
    for (let i = 0; i < len; i++) {
      isSwap = false;

      for (let j = 0; j < len - 1 - i; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
        isSwap = true;
      }

      if (!isSwap) {
        break;
      }
    }

    return data;
  }
}

// class BubbleSort {
//   sort(data) {
//     let len = data.length;

//     // 각 회전을 의미하는 for문
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len - i - 1; j++) {
//         if (data[j] > data[j + 1]) {
//           // javascript ES6의 구조 분해 할당 구문
//           [data[j], data[j + 1]] = [data[j + 1], data[j]];
//         }
//       }
//     }

//     return data;
//   }
// }

let N = 7;
let arr = [-500000, 3000, 4000, 1000000, 0, 500000, -1000000];
const advBubbleSort = new AdvBubbleSort();
console.log('input', arr);
let sortedArr = advBubbleSort.sort(arr);
console.log('output', sortedArr); // output [-1000000, -500000, 0, 3000, 4000, 500000, 1000000]
