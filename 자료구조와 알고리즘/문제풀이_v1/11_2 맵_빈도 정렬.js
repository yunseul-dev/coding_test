/**빈도 정렬
 * 수열의 두 수 X와 Y가 있을 때, X가 Y보다 수열에서 많이 등장하는 경우에는 X가 Y보다 앞에 있어야 한다.
 * 만약 등장하는 횟수가 같다면, X와 Y중에 작은 값이 앞에 있어야 한다.
 * 이때 주어진 수열이 있을 때 빈도 정렬을 해보자.
 *
 * 입력: [11, 33, 11, 77, 54, 11, 25, 25, 33]
 * 출력: [11, 11, 11, 25, 25, 33, 33, 54, 77]
 */

function getMapValue(map, key) {
  return map.get(key) || 0;
}

let arr = [11, 33, 11, 77, 54, 11, 25, 25, 33];
let map = new Map();

arr.forEach((key) => map.set(key, getMapValue(map, key) + 1));
console.log(map);

let sortedData = [...map.entries()].sort();
console.log(sortedData);

let ret = [];
sortedData.forEach((pair) => {
  for (let i = 0; i < pair[1]; i++) {
    ret.push(pair[0]);
  }
});

console.log(ret);
