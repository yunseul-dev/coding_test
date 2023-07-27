function solution(t, p) {
  let answer = 0;
  const target = +p;

  for (let i = 0; i <= t.length - p.length; i++) {
    const tmp = t.slice(i, i + p.length);
    if (tmp <= target) answer++;
  }

  return answer;
}
