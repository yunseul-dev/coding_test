function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

function solution(arr, divisor) {
  const answer = arr.filter((n) => n % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
