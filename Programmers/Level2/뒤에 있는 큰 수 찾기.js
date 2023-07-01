// 시간 초과
function solution(numbers) {
  const answer = new Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer[i] = numbers[j];
        break;
      }
    }
  }

  return answer;
}
