function solution(s) {
  return s
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');
}

// 다른사람 풀이
function solution(s) {
  return s.split('').sort().reverse().join('');
}
