function solution(s) {
  return s.length % 2
    ? s[parseInt(s.length / 2)]
    : s.substr(s.length / 2 - 1, 2);
}
