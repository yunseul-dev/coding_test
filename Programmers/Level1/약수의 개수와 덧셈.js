function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      sum -= i;
    } else {
      sum += i;
    }
  }
  return sum;
}
