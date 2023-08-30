/**셋이란?
 * ES6 문법인 Set Object에서는 prototype에 유용한 메서드가 구현되어 있는 클래스
 * 대표적으로
 * value collection으로 이루어져 있는 구조이며, value는 어떤 data type이어도 무관
 * value의 삽입 순서를 기억
 * Set의 크기를 나타내는 size 메서드를 가짐
 */

/**집합 구현
 * 합집합: union
 *  -> 집합 A의 원소와 집합 B의 원소를 모두 갖는 집합
 * 교집합: intersection
 *  -> 집합 A,B에 대하여, A, B의 양쪽에 속하는 요소 전체로 이루어지는 집합
 * 차집합: difference
 *  -> 두 집합에서, 하나의 집합에 포함되고 다른 집합에는 포함되지 않는 모든 원소의 집합
 * 대칭 차집합: symmetric difference
 *  -> 둘 중 한 집합에는 속하지만 둘 모두에는 속하지는 않는 원소들의 집합
 * 확대집합: superset
 *  -> 집합 A의 모든 원소가 B에도 속하는 집합 혹은 그 반대
 */

const A = new Set([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4]);
console.log(A); // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

const B = new Set([3, 4, 5, 6, 7, 2, 3, 4, 5]);
console.log(B); // Set(6) { 3, 4, 5, 6, 7, 2 } -> 삽입한 순서대로 출력

// 합집합
const union = new Set([...A, ...B]);
console.log(union); // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

// 교집합
const intersection = new Set([...A].filter((x) => B.has(x)));
console.log(intersection); // Set(6) { 2, 3, 4, 5, 6, 7 }

// 차집합 : 집합 A - 집합 B
const diffAB = new Set([...A].filter((x) => !B.has(x)));
console.log(diffAB); // Set(2) { 1, 8 }

// 차집합 : 집합 B - 집합 A
const diffBA = new Set([...B].filter((x) => !A.has(x)));
console.log(diffBA); // Set(0) {}

// 대칭 차집합
const symmetric = new Set([...diffAB, ...diffBA]);
console.log(symmetric); // Set(2) { 1, 8 }

// 확대집합
const isSuperSet = true;
for (let elem of B) {
  if (!A.has(elem)) {
    isSuperSet = false;
    break;
  }
  if (isSuperSet) {
    console.log('A는 B의 superset입니다.');
  } else {
    console.log('A는 B의 superset이 아닙니다.');
  }

  isSuperSet = true;
  for (let elem of A) {
    if (!B.has(elem)) {
      isSuperSet = false;
      break;
    }
  }
  if (isSuperSet) {
    console.log('B는 A의 superset 입니다.');
  } else {
    console.log('B는 A의 superset이 아닙니다.');
  }
}
