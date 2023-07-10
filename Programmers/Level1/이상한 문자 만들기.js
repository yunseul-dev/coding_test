function solution(s) {
  var sArr = s.split(' ');

  var answer = [];
  for (let i = 0; i < sArr.length; i++) {
    var tmp = '';
    for (let j = 0; j < sArr[i].length; j++) {
      if (j % 2) {
        tmp += sArr[i][j].toLowerCase();
      } else {
        tmp += sArr[i][j].toUpperCase();
      }
    }
    answer.push(tmp);
  }

  return answer.join(' ');
}

// 다른 사람 풀이(정규표현식 이용)
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
