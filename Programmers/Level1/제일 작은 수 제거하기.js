// 속도 더 빠름
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

function solution(arr) {
  return arr.length > 1 ? arr.filter((a) => a !== Math.min(...arr)) : [-1];
}
