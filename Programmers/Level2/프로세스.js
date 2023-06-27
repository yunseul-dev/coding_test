function solution(priorities, location) {
  var answer = 0;

  let k = 0;
  while (priorities.length > 0) {
    //다 삭제할 때까지
    k = priorities.shift(); //제일 앞에 있는 값

    if (k < Math.max(...priorities)) {
      //뒤에 값이랑 비교
      priorities.push(k);
    } else {
      answer++;
      if (location == 0) {
        //location == 0 이면 내가 찾는 값임.
        return answer;
      }
    }
    //내가 찾는 위치 push 했으므로 위치 - 1
    location = location ? location - 1 : priorities.length - 1;
  }
  return answer;
}
