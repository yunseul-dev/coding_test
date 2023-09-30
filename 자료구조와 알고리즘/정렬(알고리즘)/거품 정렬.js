/**거품 정렬(Bubble Sort) 개념
 * 인접한 두 원소를 비교하여 정렬하는 알고리즘
 *
 * 인접한 2개의 원소를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환
 * 이때, 정렬 회차마다 가장 큰 값이 해당 회차에서 갈 수 있는 가장 오른쪽 끝으로 이동하는 과정을 반복
 */

// class BubbleSort {
//   sort(data) {
//     let len = data.length;
//     // 각 회전을 의미
//     for (let i = 0; i < len; i++) {
//       for (let j = 0; j < len - i - 1; j++) {
//         if (data[j] > data[j + 1]) {
//           // 이때 swap 방법은 javascript ES6 구조 분해 할당 구문
//           [data[j], data[j + 1]] = [data[j + 1], data[j]];
//         }
//       }
//     }

//     return data;
//   }
// }

class AdvancedBubbleSort {
  sort(data) {
    let len = data.length;
    let isSwap = false;
    // 만약 버블 정렬에서, 반복문 내에서 swap이 발생하지 않는다면
    // 즉 그 말은 모두 정렬된 것이나 마찬가지이므로 더이상 버블 소트를 진행하지 않아도 된다.

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
          isSwap = true;
        }
      }

      if (!isSwap) {
        break;
      }
    }

    return data;
  }
}

const advancedBubbleSort = new AdvancedBubbleSort();
// const bubbleSort = new BubbleSort();
let arr = [28, 10, 14, 37, 8, 27];
console.log(arr);
let sortedArr = advancedBubbleSort.sort(arr);
// let sortedArr = bubbleSort.sort(arr);
console.log(sortedArr);
