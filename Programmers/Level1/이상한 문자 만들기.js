function solution(s) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      answer += s[i].toLowerCase();
    } else {
      answer += s[i].toUpperCase();
    }
  }
  return answer;
}
