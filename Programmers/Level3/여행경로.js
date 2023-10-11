function solution(tickets) {
  const flights = {};
  for (const [from, to] of tickets) {
    flights[from] = flights[from] ?? [];
    flights[from].push(to);
  }

  Object.values(flights).forEach((destinations) => destinations.sort());

  let path = ['ICN'];

  function dfs(city, ticketNum) {
    if (!ticketNum) return true;

    if (flights[city]) {
      for (let i = 0; i < flights[city].length; i++) {
        let nextCity = flights[city][i];
        flights[city].splice(i, 1);
        path.push(nextCity);
        // 만약 이 호출 결과 모든 티켓을 사용한 유효한 경로가 발견되면, 현재의 DFS 함수도 true를 반환하여 재귀 호출을 종료한다.
        if (dfs(nextCity, ticketNum - 1, flights, path)) return true;

        // dfs(nextCity,ticketNum,cities,path)가 false일 때, 즉 경우의 수 탐색 중 한 경우가 유효하지 않다면
        // path.pop(): 되돌아가기 위해(path tracking) 기록된 값을 지운다.
        flights[city].splice(i, 0, nextCity);
        path.pop();
      }
    }
  }

  dfs('ICN', tickets.length);

  return path;
}

// 시간 초과 에러 발생
// function solution2(tickets) {
//   const flights = {};

//   for (const [from, to] of tickets) {
//     flights[from] = flights[from] ?? [];
//     flights[from].push(to);
//   }

//   Object.values(flights).forEach((destinations) => destinations.sort());

//   let path = ['ICN'];

//   function dfs(city, ticketNum) {
//     if (!ticketNum) return true;

//     const destinations = flights[city];

//     while (destinations && destinations.length > 0) {
//       let nextCity = destinations.shift();
//       path.push(nextCity);

//       if (dfs(nextCity, ticketNum - 1)) return true;

//       destinations.unshift(nextCity);
//       path.pop();
//     }

//     return false;
//   }

//   dfs('ICN', tickets.length);

//   return path;
// }
