function solution(X, Y) {
  let answer = '';

  for (let i = 0; i < 10; i++) {
    const filteredX = [...X].filter((n) => +n === i).length;
    const filteredY = [...Y].filter((n) => +n === i).length;
    answer += (i + '').repeat(Math.min(filteredX, filteredY));
  }

  if (answer === '') return '-1';

  return +answer ? [...answer].sort((a, b) => b - a).join('') : '0';
}
