function solution(answers) {
  var answer = [];

  let number = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let tmp = [];

  for (let i = 0; i < number.length; i++) {
    let sum = 0;
    for (let j = 0; j < answers.length; j++) {
      if (number[i][j % number[i].length] === answers[j]) sum++;
    }
    tmp.push(sum);
  }

  let k = Math.max(...tmp);

  for (let i = 0; i < tmp.length; i++) {
    if (k === tmp[i]) answer.push(i + 1);
  }

  return answer;
}
