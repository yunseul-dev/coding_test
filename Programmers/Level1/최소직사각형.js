function solution(sizes) {
  var answer = 0;

  let a = [];
  let b = [];

  for (i = 0; i < sizes.length; i++) {
    a.push(sizes[i][0] > sizes[i][1] ? sizes[i][0] : sizes[i][1]);
    b.push(sizes[i][0] < sizes[i][1] ? sizes[i][0] : sizes[i][1]);
  }

  let aa = Math.max(...a);
  let bb = Math.max(...b);

  answer = aa * bb;

  return answer;
}
