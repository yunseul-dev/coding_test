function solution(clothes) {
  var answer = 0;

  let counts = new Map();

  for (let [name, type] of clothes) {
    counts.set(type, (counts.get(type) || 0) + 1); //같은 종류 찾아 1씩 count
    console.log(counts);
  }

  answer = [...counts.values()].reduce((accum, v) => accum * (v + 1), 1) - 1; //전체 경우의 수에서 다 벗은 거 빼기

  return answer;
}
