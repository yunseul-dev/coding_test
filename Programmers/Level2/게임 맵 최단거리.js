function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  let queue = [[0, 0]];

  let visit = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );

  visit[0][0] = 1;

  while (queue.length) {
    let [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (
        0 <= ny &&
        ny < n &&
        0 <= nx &&
        nx < m &&
        maps[ny][nx] &&
        !visit[ny][nx]
      ) {
        visit[ny][nx] = visit[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  return visit[n - 1][m - 1] ? visit[n - 1][m - 1] : -1;
}
