/**건축 시간
 * 집을 부수는 동안 선정된 시공사가 건축을 위해 N개의 건축 시간 및 비용을 제안했다.
 * 현재 의뢰인 측에서 남은 시간이 K시간 밖에 남지 않아 그 전에는 모두 마무리해야 한다 할 때
 * 시공사가 가장 많은 돈을 버는 금액이 얼마인지 구해보자.
 * (1 <= N <= 10000000, 1 <= K <= 20000, 건축 시간 및 비용은 동일)
 */

// let [N, K] = [9, 20];
// let arr = [4, 9, 7, 10, 15, 26, 34, 18, 22]; // 18

let [N, K] = [9, 20];
let arr = [4, 9, 7, 10, 21, 20, 19, 18, 22]; // 20
arr.sort((a, b) => a - b);
let [start, end] = [0, arr.length - 1];

let ans = 0;
while (start <= end) {
  // 의뢰인이 요구한 K 이하 시간을 만족하면서 가장 큰 값
  // arr[mid]가 K보다 작거나 같으면 start = mid + 1이 되고, 이때 ans에 가장 큰 값을 저장해주면 된다.
  // K보다 크면 end = mid - 1

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] <= K) {
    ans = Math.max(ans, arr[mid]);
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(ans);
