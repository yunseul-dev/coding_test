/**숨바꼭질
 * 영수와 철수가 숨바꼭질을 하고있다. 이때 철수는 N 위치에 있고, 영수는 K 위치에 있다.
 * 오늘은 철수가 영수를 찾아야 하는데 매초마다 X - 1, X + 1 혹은 X * 2 위치로 이동할 수 있다.
 * 이때 철수가 영수를 찾는 가장 빠른 시간이 ㅁㅊ 초 후인지, 가장 빠른 시간으로 찾는 방법이 몇 가지인지 구해보자.
 * (위치는 0 <= X <= 10000)
 *
 * 입력: 5 17
 * 출력: 4 2
 */

let [N, K] = [5, 17];

let minTime = null;
let timeMap = {};

// bfs 사용 -> N초 후라는 것이 BFS가 잘 나타낼 수 있다.
let queue = [];
queue.push([N, 0]);

while (queue.length) {
  let [cur, time] = queue.shift();

  // 휴리스틱, 프루닝: 정답에 필요없는 것들을 빠르게 제거함
  if (cur < 0 || cur > 10000) {
    continue;
  }

  if (minTime != null && time > minTime) {
    continue;
  }

  if (cur == K) {
    minTime = time;

    if (!timeMap.hasOwnProperty(minTime)) {
      timeMap[minTime] = 0;
    }
    timeMap[minTime]++;
  }

  queue.push([cur - 1, time + 1]);
  queue.push([cur + 1, time + 1]);
  queue.push([cur * 2, time + 1]);
}

console.log(minTime, timeMap[minTime]);
