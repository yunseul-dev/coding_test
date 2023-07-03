// 시간초과
const isSosu = (num) => {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      answer += 1;
      if (answer > 2) {
        return false;
      }
    }
  }
  return true;
};

function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i++) {
    if (isSosu(i)) {
      answer += 1;
    }
  }
  return answer;
}
