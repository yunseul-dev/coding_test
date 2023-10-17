function solution(n) {
  let answer = 0;
  let prev1 = 0;
  let prev2 = 1;

  for (let i = 2; i <= n; i++) {
    answer = (prev1 + prev2) % 1234567;
    prev1 = prev2;
    prev2 = answer;
  }

  return answer;
}

// 런타임 에러 발생 (Stack OverFlow -> Call Stack)
function solution(n) {
  const memo = {};

  function fib(n) {
    if (n <= 1) return n;

    if (memo[n]) return memo[n];

    memo[n] = fib(n - 1) + fib(n - 2);

    return memo[n] % 1234567;
  }

  return fib(n);
}
