function solution(k, m, score) {
  return (
    score
      .sort()
      .reverse()
      .filter((_, index) => (index + 1) % m === 0)
      .reduce((a, b) => a + b, 0) * m
  );
}
