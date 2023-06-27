function solution(numbers) {
  var answer = 0;

  const arr = new Array(numbers.length).fill(0).map((ele, idx) => numbers[idx]);
  console.log(arr);
  const set = new Set();
  console.log(set);

  for (let i = 1; i <= arr.length; i++) {
    //i개의 순열을 구함
    const result = getPermutations(arr, i);
    console.log(result);

    //i개 순열 순회
    result.forEach((ele) => {
      //문자열로 합침
      const num = parseInt(ele.join(''));
      let isPrime = true;

      console.log(num);

      //소수 판별
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          //소수가 있으면 false.
          isPrime = false;
          break;
        }
      }

      //소수가 없고 1보다 크면 set에 더하기
      if (isPrime && num > 1) set.add(num);
    });
  }

  console.log(set);
  answer = set.size;

  return answer;
}
