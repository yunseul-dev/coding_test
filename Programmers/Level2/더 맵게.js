// 효율성 테스트 fail -> 시간 초과
function solution(scoville, K) {
  let answer = 0;
  scoville.sort((a, b) => a - b);

  while (scoville[0] < K) {
    if (scoville.length < 2) {
      return -1;
    }

    scoville[1] = scoville[0] + scoville[1] * 2;
    scoville.shift();
    scoville.sort((a, b) => a - b);
    answer++;
  }

  return answer;
}
