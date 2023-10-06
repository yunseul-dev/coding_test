/**입찰
 * 재건축에 필요한 시공사 선정을 위해 입찰하고자 한다.
 * 이때 1 ~ N번의 시공사가 입찰에 참여하였고 각 시공사마다 인력 규모가 나타나있다.
 * 이때 시공을 위해 K명이 필요할 때 해당하는 시공사를 찾아보자.
 * (1 <= N <= 500000000, 1 <= K <= 10000, 항상 정답은 존재)
 */

let [N, K] = [10, 27];
let arr = [1, 5, 30, 7, 10, 27, 15, 31, 26, 29]; // 6번 시공사 -> 6

arr = arr.map((elem, idx) => [idx + 1, elem]);
arr.sort((a, b) => a[1] - b[1]);
console.log(arr);

let [start, end] = [1, N];
let ans = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  console.log(`start: ${start} mid: ${mid} end: ${end} ans: ${ans}`);

  // mid가 찾고자 하는 값 K보다 크거나 같다면 mid 값의 크기를 줄인다.
  if (arr[mid][1] >= K) {
    if (arr[mid][1] === K) {
      ans = arr[mid][0];
    }
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(ans);
