// 테스트케이스 다 안돌아감
function solution(s, skip, index) {
  var answer = '';

  let full = 'abcdefghijklmnopqrstuvwxyz';
  let turn = [];

  for (let i = 0; i < full.length; i++) {
    if (![...skip].includes(full[i])) turn.push(full[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (turn.indexOf(s[i]) + index > turn.length - 1) {
      answer += turn[turn.indexOf(s[i]) + index - turn.length];
    } else {
      answer += turn[turn.indexOf(s[i]) + index];
    }
  }

  return answer;
}
