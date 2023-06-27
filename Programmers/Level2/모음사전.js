function solution(word) {
  var answer = 0;

  const words = ['A', 'E', 'I', 'O', 'U'];
  word.split('').map((el, i) => {
    if (el === 'A') answer += 1; //i == "A" 일땐 +1
    else {
      // "A"가 아닐 땐, 공비수열
      for (let j = 4; j > i; j--) {
        answer += 5 ** (j - i) * words.indexOf(el);
      }

      answer += words.indexOf(el) + 1;
    }
  });

  return answer;
}
