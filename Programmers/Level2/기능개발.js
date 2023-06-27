if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

function solution(progresses, speeds) {
  var answer = [];

  let k = [];
  for (let i = 0; i < speeds.length; i++) {
    k.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  k.push(Number.MAX_SAFE_INTEGER);
  let stack = [];
  let count = 0;
  for (let j = 0; j < k.length; j++) {
    if (stack.isEmpty()) {
      stack.push(k[j]);
      count++;
    } else if (stack.peek() >= k[j]) {
      count++;
    } else if (stack.peek() < k[j]) {
      answer.push(count);
      stack.push(k[j]);
      count = 1;
    }
  }
  return answer;
}
