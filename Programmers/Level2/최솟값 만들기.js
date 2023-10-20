function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((sum, val, idx) => sum + val * B[idx], 0);
}
