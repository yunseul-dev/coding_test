function solution(s) {
  const strCount = (str) =>
    [...s.toLowerCase()].filter((el) => el === str).length;

  return strCount('p') === strCount('y');
}

// 다른 사람 풀이
function numPY(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
