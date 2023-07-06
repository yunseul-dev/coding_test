function solution(a, b) {
  const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return days[months.slice(0, a - 1).reduce((acc, cur) => acc + cur, b) % 7];
}

// 다른 사람 풀이 (Date 객체 이용)  => 런타임 에러 발생!
function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}
