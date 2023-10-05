/**최대 차이
 * N개의 +와 -로 이루어진 수식이 있을 때, 괄호를 적절하게 쳐서 이 식의 값이 최소가 되게 만들어보자
 */

let N = 4;
let calcs = ['55-50+40', '10+20+30+40', '9-9', '1-1-1'];

calcs.forEach((calc) => {
  console.log(calc);
  // -기준으로 문자열 분리
  let arr = calc.split('-').map((elem) =>
    elem
      .split('+')
      .map(Number)
      .reduce((sum, val) => sum + val, 0)
  );

  // 첫번쨰 원소에서 나머지 원소를 모두 뺄건데
  // 이때 첫번째 원소 *2를 한 이유는 reduce에서 첫 번째 원소를 포함해서 더해버리니 *2 처리를 통해 살린다.
  arr = arr[0] * 2 - arr.reduce((sum, val) => sum + val, 0);
  console.log(arr);
});
