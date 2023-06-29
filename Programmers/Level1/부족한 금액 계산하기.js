function solution(price, money, count) {
  const answer = ((count * (count + 1)) / 2) * price - money;

  return answer > 0 ? answer : 0;
}
