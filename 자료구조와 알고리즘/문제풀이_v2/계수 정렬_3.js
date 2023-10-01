/**과반수 찾기
 * N명의 반장(1번~N번) 후보자와 M명의 사람이 반장 투표를 참여했을 때 과반수가 넘는 사람을 찾아보자
 * 과반수가 넘는 사람이 있으면 해당 사람의 번호를, 없으면 -1을 출력
 * (1 <= N <= 10000000)
 */

// let [N, M] = [3, 16];
// let arr = [3, 1, 2, 2, 1, 1, 1, 1, 2, 1, 3, 2, 1, 1, 1, 2];

let [N, M] = [6, 11];
let arr = [6, 6, 6, 6, 6, 5, 4, 3, 2, 1];

let maxVal = Math.max(...arr);
let countArr = Array.from({ length: maxVal + 1 }, () => 0);

arr.forEach((elem) => countArr[elem]++);

let mid = Math.floor(M / 2);
let ret = -1;

for (let i = 1; i <= maxVal; i++) {
  if (countArr[i] > mid) {
    ret = i;
  }
}

console.log(ret == -1 ? 'N' : ret);
