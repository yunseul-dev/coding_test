function solution(s) {
  return s.toLowerCase().replace(/(^|\s)\S/g, (str) => str.toUpperCase());
}
