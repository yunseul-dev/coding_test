/**통나무 자르기
 * 집을 모두 부수고 나서 이제 나무로 된 집을 짓기 위해 통나무를 잘라야 한다.
 * 직원들은 서로 다른 N개의 통나무를 잘라 총 길이가 일정하면서 정확하게 M개를 만들어내야 한다.
 * 이때 M개를 만들면서 가능한 가장 길게 통나무를 잘라보자.
 * (1 <= N <= 10000, 1 <= M <= 100000, 1 <= 통나무 길이 <= 10000000 )
 */

let [N, M] = [4, 11];
let trees = [802, 743, 457, 539];

trees.sort((a, b) => a - b);

// mid값으로 잘라서 M개의 통나무를 얻을 수 있나?
let [start, end] = [1, Math.max(...trees)];

let ans = 0;

while (start <= end) {
  // mid: 통나무를 자를 길이
  let mid = Math.floor((start + end) / 2);

  console.log(`start: ${start}, mid: ${mid}, end: ${end}`);

  // 통나무를 mid로 잘랐을 때 얻을 수 있는 잘린 통나무의 합
  let count = 0;
  trees.forEach((tree) => (count += Math.floor(tree / mid)));

  if (count >= M) {
    start = mid + 1;
    if (count === M) {
      ans = Math.max(ans, mid);
      console.log(`ans: ${ans}`);
    }
  } else {
    end = mid - 1;
  }
}

console.log(ans);
