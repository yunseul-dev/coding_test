/**집 부수기
 * 건강 검진을 마치고 현장에 투입된 직원들은 재건축을 위해 집을 부셔야 한다. 이번에는 모든 집 중 몇 개만 부수고 재건축을 할 예정이다.
 * 출발 위치(항상 0), 끝 위치 E가 주어지고, 이 사이에 집이 N개 주어진다.
 * 이때 K개의 집을 부술 때 인접한 두 집 사이의 거리가 있을 때 그때 최소의 거리가 최대가 되도록 만들어보자.
 * (1 <= E <= 1000000, 0 < 집의 위치 < E)
 */

let [S, E, N, K] = [0, 30, 5, 2];
let houses = [3, 7, 11, 17, 24]; // 집의 위치
houses.push(E); // E: 실제 있는 집의 위치는 아니지만 하우스의 마지막 위치. 집의 마지막 위치와 끝의 위치 사이의 거리를 구하기 위해.
houses.sort((a, b) => a - b);
console.log(houses);

// K개의 집을 부술 때, 인접한 두 집 사이의 거리의 최솟값들이 나타나는데 이런 여러 케이스 중 최솟값의 최댓값을 구해보자
let answer = 0;
let start = S;
let end = E;

while (start <= end) {
  /**
   * mid: 두 위치 사이 거리의 최솟값으로 정의
   * dist: 두 집 사이의 거리들이 있을 때 그 중 최솟값
   * prevHouse: 두 집 사이의 거리를 계산하기 위한 이전 집의 위치
   * removeCnt: 집을 부순 수
   */
  let mid = Math.floor((start + end) / 2);
  let dist = Infinity;

  let prevHouse = 0;
  let removeCnt = 0;

  houses.forEach((house) => {
    let diff = house - prevHouse;

    // mid보다 두 집 사이 거리가 짧으면 집을 제거
    if (diff < mid) {
      removeCnt++;
    } else {
      // 그게 아니라면 이전 집을 갱신해주고, dist에 두 집 사이 거리 중 최솟값을 기록
      prevHouse = house;
      dist = Math.min(dist, diff);
    }
  });

  // 만약 mid 거리로 집을 모두 제거할 수 있었다면, 값의 범위를 줄여본다.
  if (removeCnt > K) {
    end = mid - 1;
  } else {
    start = mid + 1;
    if (removeCnt == K) {
      // answer는 집 사이 거리 중 최솟값을 기록한 dist 중 최댓값을 기록
      answer = Math.max(answer, dist);
    }
  }
}

console.log(answer);
