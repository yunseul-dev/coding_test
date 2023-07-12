function solution(citations) {
  let answer = 0;

  for (let i = 0; i < Math.max(...citations); i++) {
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= i) {
        count++;
      }
    }
    if (count >= i) {
      answer = i;
    }
  }

  return answer;
}
