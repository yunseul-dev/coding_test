// 문자열을 길이 순으로 정렬하는 자바스크립트 정렬 비교 함수 생성하기
var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];
var mythicalObj = [
  { prop1: '', prop2: '' },
  { prop1: '', prop2: '', prop3: '' },
  { prop1: '', prop2: '' },
];

function sortComparator(a, b) {
  return a.length - b.length;
}

function sortComparatorA(a, b) {
  return a.indexOf('a') - b.indexOf('a');
}

function sortComparatorObj(a, b) {
  return Object.keys(a).length - Object.keys(b).length;
}

console.log(mythical.sort()); // 알파벳 순으로 정렬
console.log(mythical.sort(sortComparator)); // 문자열의 길이를 기준으로 정렬
console.log(mythical.sort(sortComparatorA)); // 알파벳 a의 위치를 기준으로 정렬
console.log(mythicalObj.sort(sortComparatorObj)); // 속성의 개수에 따라 객체 항목들을 정렬
