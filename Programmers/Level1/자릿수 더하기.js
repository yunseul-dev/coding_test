function solution(n) {
  return (n + '').split('').reduce((a, b) => +a + +b, 0);
}
