/**건강 검진
 * 재건축을 위한 직원 N명이 현장에 투입되기 전 건강 검진을 기다리고 있고 검진을 해주는 의사 M명이 있다.
 * 이때 각각의 의사는 건강 검진을 하는 시간이 서로 다르게 걸린다.
 * 처음에는 모든 검진실이 비어있고, 한 검진실 당 한 명 씩 검진이 가능하다.
 * 이때 모든 사람이 검진을 받는데 걸리는 시간을 최소로 만들어보자.
 * (1 <= N <= 100000000, 1 <= M <= 10000, 1 <= 심사 시간 <= 10000)
 */

let [N, M] = [6, 2];
let times = [7, 12]; // 28
// let [N, M] = [7, 2];
// let times = [10, 10];  // 40

let answer = Infinity;
let [start, end] = [0, 100000000 * 10000];

while (start <= end) {
  // mid 시간 안에 해결 가능한가요?
  // 가능: 시간을 좀 더 줄여본다, 불가능: 시간을 좀 더 늘려본다.
  let mid = Math.floor((start + end) / 2);

  let sum = 0;
  times.forEach((time) => {
    let count = Math.floor(mid / time);
    sum += count;
  });

  if (sum >= N) {
    end = mid - 1;
    answer = Math.min(answer, mid);
  } else {
    start = mid + 1;
  }
}

console.log(answer);
