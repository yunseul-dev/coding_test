/**수 정렬하기
 * N개의 수가 주어졌을 때, 내림차순으로 정렬해보자
 * (1 <= N <= 1000000, -1000000 <= arr[i] <=1000000)
 */

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
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

let N = 5;
let arr = [1, 2, 3, 4, 5];

arr = sort(arr);
console.log(arr);
