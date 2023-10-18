function solution(n) {
  let answer = 0;
  let sum = 0;
  let start = 1;
  let end = 1;

  while (start <= n) {
    if (sum < n) {
      sum += end;
      end++;
    } else if (sum === n) {
      answer++;
      sum -= start;
      start++;
    } else {
      sum -= start;
      start++;
    }
  }

  return answer;
}

// 효율성 테스트 실패
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }

  return answer;
}
