/**원시 값(primitive)이란?
 * Javascript에서 원시 값(primitive)이란 객체가 아니면서 메서드도 가지지 않는 데이터 타입
 * 원시 값 7 종류: string, number, bigint, boolean, undefined, symbol, null
 * 원시 값은 불변(immutable)이기에 변형 할 수 없다.
 */

/** Object의 구성
 * Object는 0개 이상의 속성(property)로 구성된 집합
 * property는 key와 value로 구성
 * Object에서 객체의 프로퍼티 값이 함수인 경우 메서드라고 한다.
 * Object는 reference로 저장된다.
 * 객체를 변수에 저장할 때, 객체는 메모리의 reference를 저장한다.
 * const obj = new Object();
 * console.log(new Object()); // {}
 * console.log(obj instanceof Object); // true
 * console.log(obj); // {}
 * console.log((obj['a'] = 1)); // 1
 * console.log(obj); // { a: 1 }
 * console.log(obj.hasOwnProperty('a')); // true
 * const items = { name: 'sword', damage: 5, type: 'crystal' };
 * console.log(Object.keys(items)); // [ 'name', 'damage', 'type' ]
 * console.log(Object.values(items)); // [ 'sword', 5, 'crystal' ]
 */

/**
 * Object는 for...in 방식으로만 순회가 가능하다.
 * Object property를 순회하려면 Object.entries()를 이용하면 된다.
 * Object.entries: Object의 key,value 배열로 이루어진 전체 property의 배열을 리턴
 *  */

/**Tips for using objects
 * 배열 초기화
 * const size = 5;
 * const arr = Array(size).fill(0);
 * console.log(arr); // [ 0, 0, 0, 0, 0 ]

 * arr[0] = 1;
 * console.log(arr); // [ 1, 0, 0, 0, 0 ]

 * const size = 5;
 * const arr = Array(size).fill([]);
 * console.log(arr); // [[],[],[],[],[]]

 * arr[0].push(1);
 * console.log(arr); //  [ [ 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1 ] ]
 */

/**Tips for using objects
 * 배열에 데이터 추가/삭제: splice()
 * splice 메서드는 원본 배열에 새로운 요소를 추가하거나 삭제할 수 있다.
 * var arr = [1, 2, 3, 4, 5];
 * arr.splice(2, 0, 10); // 두 번째에서 0 개를 제거하고 10을 추가하라.
 *세번째 인덱스는 생략 가능
 * console.log(arr); //[ 1, 2, 10, 3, 4, 5 ]
 */

/**Tips for using objects
 * spread operator
 * const obj1 = {
 *   bob: 1,
 *   jane: 2,
 * };

 * const obj2 = {
 *   alice: 3,
 *   khan: 4,
 * };

 * const obj3 = {
 *   brad: 5,
 *   janny: 6,
 * };

 * const obj = { ...obj1, ...obj2, ...obj3 };
 * console.log(obj); //{ bob: 1, jane: 2, alice: 3, khan: 4, brad: 5, janny: 6 }

 * const arr1 = [1, 2];
 * const arr2 = ['3', '4'];
 * const arr = [...arr2, ...arr1];

 * console.log(arr); // [ '3', '4', 1, 2 ]
 */

/**Tips for using objects
 * 중복 제거
 * const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
 * const uniqueArr = [...new Set(arr)]
 *
 * console.log(uniqueArr)  // [1, 2, 3, 4, 5]
 */

/**성능에 대한 고민
 * findIndex
 * index of
 * include
 */

/**
 * flat 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어 붙인 새로운 배열을 생성
 * flatMap 메서드는 map 메서드의 결과에 다시 falt 메서드를 적용한 결과를 리턴
 * reduce 메서드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 리턴
 */

// let fruit = 'banana';
// console.log(fruit); // banana

// fruit.toUpperCase();
// console.log(fruit); // banana: 원시값은 원본이 바뀌지 않는다.

// console.log(typeof fruit); // string -> 원시값

// let fruit2 = new String('banana');
// console.log(typeof fruit2); // object  -> 객체
// console.log(fruit2); //[String: 'banana']

// // 객체를 변수에 저장할 때, 객체는 메모리의 reference를 저장한다.
// let bob = { name: 'bob' };
// let jane = { name: 'jane' };

// console.log(bob === jane); // false

// bob = jane;

// console.log(bob); // { name: 'jane' }
// console.log(jane); // { name: 'jane' }

// bob.name = 'alice';

// console.log(bob); // { name: 'alice' }
// console.log(jane); // { name: 'alice' }  -> 값(value)의 복사가 아닌 참조 값(reference)의 복사

// object.keys()

const items = {
  name: 'sword',
  damage: 5,
  type: 'crystral',
};

console.log(Object.keys(items)); // [ 'name', 'damage', 'type' ]

console.log(typeof Object.keys(items)); // object

Object.keys(items).map((elem) => console.log(elem)); // name damage type
Object.keys(items).forEach((elem) => console.log(elem)); // name damage type

for (const item of Object.keys(items)) {
  console.log(item); // name damage type
}

for (const item in Object.keys(items)) {
  console.log(item); // 0 1 2
}

// values도 동일

// 배열 초기화
//  const size = 5;
//  const arr = Array(size).fill(0);
//  console.log(arr); // [ 0, 0, 0, 0, 0 ]

//  arr[0] = 1;
//  console.log(arr); // [ 1, 0, 0, 0, 0 ]

//  const size = 5;
//  const arr = Array(size).fill([]);  // fill 안에 동일한 object를 채움 (reference가 같다.)
//  console.log(arr); // [[],[],[],[],[]]

//  arr[0].push(1);
//  console.log(arr); //  [ [ 1 ], [ 1 ], [ 1 ], [ 1 ], [ 1 ] ]
