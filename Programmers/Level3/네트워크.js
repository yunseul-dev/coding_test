function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  function dfs(i) {
    visited[i] = 1;
    for (let j = 0; j < n; j++) {
      if (computers[i][j] && !visited[j]) {
        dfs(j);
      }
    }
  }

  return answer;
}

let arr = [
  [1, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
];

let n = arr.length;

solution(n, arr);
