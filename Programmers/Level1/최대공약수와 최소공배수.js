function solution(n, m) {
  for (let i = Math.min(n, m); i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      return [i, (n * m) / i];
    }
  }
}

//다른사람 풀이
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
