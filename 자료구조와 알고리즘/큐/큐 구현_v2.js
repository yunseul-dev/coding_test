// javascript array를 이용한 queue 구현
let queue = [];

queue.push('월');
queue.push('화');
queue.push('수');
queue.push('목');
queue.push('금');

console.log(queue);

console.log(queue.shift()); // shift: 실제 원본 배열을 변경한다.
console.log(queue);

console.log(queue.shift());
console.log(queue);

console.log(queue.shift());
console.log(queue);

console.log(queue.shift());
console.log(queue);

console.log(queue.shift());
console.log(queue);
