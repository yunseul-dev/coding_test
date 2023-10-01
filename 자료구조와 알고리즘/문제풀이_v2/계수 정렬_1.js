// /**숫자 정렬하기
//  * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬해보자.
//  * (1 <= N <= 10000000)
//  */
// class CountingSort {
//   sort(data) {
//     const maxVal = Math.max(...data);
//     const countingArr = Array.from({ length: maxVal + 1 }, () => 0);

//     let len = data.length;
//     for (let i = 0; i < len; i++) {
//       countingArr[data[i]]++;
//     }

//     let idx = 0;
//     len = countingArr.length;
//     for (let i = 0; i < len; i++) {
//       if (countingArr[i] > 0) {
//         for (let j = 0; j < countingArr[i]; j++) {
//           data[idx++] = i;
//         }
//       }
//     }

//     return data;
//   }
// }

// let N = 10;
// let arr = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

// const countingSort = new CountingSort();
// console.log('arr: ', arr);
// let sortedArr = countingSort.sort(arr);
// console.log('sortedArr: ', sortedArr);

let N = 10;
let arr = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

let maxVal = Math.max(...arr);
console.log(maxVal);

let countArr = Array.from({ length: maxVal + 1 }, () => 0);
console.log(countArr);

arr.forEach((elem) => countArr[elem]++);
console.log(countArr);

let sortedArr = [];
countArr.forEach((elem, idx) => {
  while (elem > 0) {
    sortedArr.push(idx);
    elem--;
  }
});

console.log(sortedArr);
