/**집 짓기
 * 앞선 과정에서 얻어낸 통나무를 통해 이제 집을 지을 차례가 왔다.
 * 집을 지을 수 있는 N개의 땅이 있을 때 집을 K개를 설치하고자 한다.
 * 이때 가장 인접한 두 집 사이의 거리를 최대가 되도록 만들어보자.
 * (1 <= N <= 1000, 1 <= K < N)
 */

let [N, K] = [10, 4];
let home = [1, 2, 30, 25, 8, 14, 19, 38, 40, 50];

home.sort((a, b) => a - b);
console.log(home);

// 집의 최소/최대 거리를 정의
let start = 1;
let end = home[N - 1] - home[0];

let ans = 0;
while (start <= end) {
  // mid: 해당 거리를 최대로 하여 집을 지을 수 있나?
  let mid = Math.floor((start + end) / 2);

  // 집을 mid 거리로 설치해본다.
  let [s, e, cnt] = [0, 1, 1];

  while (e <= N - 1) {
    if (home[e] - home[s] >= mid) {
      cnt++;
      s = e;
    }
    e++;
  }

  // 만약 해당 거리 mid를 최대라고 가정하고 집 설치가 가능했다면,
  if (cnt >= K) {
    start = mid + 1;
    if (cnt === K) {
      ans = Math.max(ans, mid);
    }
  } else {
    end = mid - 1;
  }
}

console.log(ans);
