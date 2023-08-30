/**Map
 * 기존 Object 메서드가 제한적인 요소들이 많았지만 ES6 문법인 Map Object에서는 prototype에 유용한 메서드가 구현되어 있는 클래스
 * 대표적으로
 * key-value 쌍으로 이루어져 있는 구조이며, key는 어떤 data type이어도 무관
 * key의 삽입 순서를 기억
 * Map의 크기를 나타내는 size 메서드를 가짐
 */

/**Object vs Map
 * Object: 순회 불가능, size property 없음, key는 반드시 string이거나 symbol, key의 순서를 보장하지 않음
 * Map: 순회 메서드가 존재, size property 존재, 모든 data type 가능, key가 삽입 순서대로 정렬
 */

var myMap = new Map();

console.log(myMap.set(1, 1));
console.log(myMap.set('2', 2));
console.log(myMap.set(new Array(), 3));

let arr = new Array(); // reference
console.log(myMap.set(arr, 4));

class a {}
console.log(myMap.set(a, 5));

console.log(myMap.set(undefined, 6));
console.log(myMap.set(null, 7));
console.log(myMap.set(NaN, 8));

console.log(myMap.get(NaN));
console.log(myMap.get(null));
console.log(myMap.get(undefined));
console.log(myMap.get(new Array())); // 새 reference이므로 존재하지 않음 -> undefined
console.log(myMap.get(arr));

console.log(myMap.has(undefined)); // true
console.log(myMap.has(new Array())); // false -> 같은 reference를 가진 것이 없음
console.log(myMap.has(arr)); // true

console.log(myMap.keys()); // [Map Iterator] { 1, '2', [], [], [class a], undefined, null, NaN }
console.log(myMap.values()); // [Map Iterator] { 1, 2, 3, 4, 5, 6, 7, 8 }
console.log(myMap.entries()); // [Map Entries] { [ 1, 1 ], [ '2', 2 ], [ [], 3 ],  [ [], 4 ],  [ [class a], 5 ],  [ undefined, 6 ],  [ null, 7 ],[ NaN, 8 ]}

let c = {};
console.log(c.size); // undefined -> property가 없음
console.log(myMap.size); // 8 -> property가 있음

console.log(myMap.delete(undefined)); // true
console.log(myMap); // Map(7) {1 => 1, '2' => 2, [] => 3, [] => 4, [class a] => 5, null => 7, NaN => 8}
myMap.clear();
console.log(myMap); // Map(0) {}
