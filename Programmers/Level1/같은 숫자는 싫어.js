function solution(arr) {
  var answer = [];
  // let queue = []
  answer[0] = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] != arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
