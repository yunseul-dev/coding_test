let N = 30;

let divisior = Array.from({ length: N }, (elem, idx) => idx + 1);
// 어떤 수의 나머지가 0이 되게 하는 수 => 약수
divisior = divisior.filter((elem) => N % elem == 0);

console.log(`약수: ${divisior}`);

let decimal = Array.from({ length: N }, (elem, idx) => idx + 1);
decimal = decimal
  .filter((elem) => {
    // 1과 자기 자신 외에는 약수를 가지지 않는지 확인
    for (let i = 2; i < elem; i++) {
      if (elem % i == 0) {
        return false;
      }
    }
    return true;
  })
  .filter((elem) => elem != 1);

console.log(`소수: ${decimal}`);
