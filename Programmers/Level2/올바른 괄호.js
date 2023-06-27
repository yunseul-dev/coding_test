if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}

function solution(s) {
  var answer = true;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(s[i]);
    } else if (s[i] == ')') {
      if (stack.isEmpty()) {
        return false;
      } else stack.pop();
    }
  }

  if (stack.isEmpty()) {
    return true;
  } else return false;

  return answer;
}
