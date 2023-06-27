function solution(brown, yellow) {
  var answer = [];

  let a = brown + yellow;
  var sqrt = Math.sqrt(a);

  for (let i = 3; i <= sqrt; i++) {
    //i는 너비, a/i는 높이
    if (a % i === 0) {
      if (yellow == (a / i - 2) * (i - 2) && a / i >= i) {
        //갈색이 위아래로 둘러싸기 때문에 옐로 = 높이 - 2 , 너비 - 2
        answer.push(a / i);
        answer.push(i);
      }
    }
  }

  return answer;
}
