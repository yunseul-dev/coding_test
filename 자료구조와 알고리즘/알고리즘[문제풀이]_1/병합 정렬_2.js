/**배열 병합
 * 정렬되지 않은 N개의 수로 이루어진 수열 A와, M개의 수로 이루어진 수열 B가 있을 때,
 * A와 B를 정렬된 수열로 합쳐보자.
 * (0 <= N, M <= 200, -100000 <= A[i],B[i] <= 100000)
 */

let [N, M] = [6, 3];
let A = [7, 2, 3, 4, 2, 1];
let B = [1, 5, 8];

// 풀이 1
function merge(left, right) {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function sort(data) {
  if (data.length == 1) {
    return data;
  }

  const mid = Math.ceil(data.length / 2);
  const left = data.slice(0, mid);
  const right = data.slice(mid);

  return merge(sort(left), sort(right));
}

// let C = [...A, ...B];
// C = sort(C);  //  => sort([...A, ...B])
// console.log('sortedArr: ', C);

// 풀이 2
A = sort(A);
B = sort(B);

let C = [];

let [aIdx, bIdx] = [0, 0];
let [aLen, bLen] = [A.length, B.length];
while (aIdx < aLen && bIdx < bLen) {
  if (A[aIdx] < B[bIdx]) {
    C.push(A[aIdx]);
    aIdx++;
  } else {
    C.push(B[bIdx]);
    bIdx++;
  }
}

while (aIdx < aLen) {
  C.push(A[aIdx]);
  aIdx++;
}

while (bIdx < bLen) {
  C.push(B[bIdx]);
  bIdx++;
}

console.log(C);
