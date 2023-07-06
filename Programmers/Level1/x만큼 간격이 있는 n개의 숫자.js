function solution(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

// 다른 풀이
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
