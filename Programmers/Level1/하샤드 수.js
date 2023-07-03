function solution(x) {
  let sum = 0;
  for (let i = 0; i < String(x).length; i++) {
    sum += +String(x)[i];
  }
  return !(x % sum);
}
