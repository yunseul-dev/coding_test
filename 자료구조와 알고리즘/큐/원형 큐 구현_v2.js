// javascript의 array를 이용하여 원형 큐 구현

var size = 8;
var count = 0;
var front = 0;
var rear = 0;
var circularQueue = [];

function push(data) {
  if ((rear + 1) % size != front) {
    rear = (rear + 1) % size;
    circularQueue[rear] = data;
    count++;
  }
}

function pop(data) {
  if (front != rear) {
    front = (front + 1) % size;
    console.log(`결과: ${circularQueue[front]}`);
    circularQueue[front] = null;
    count--;
  }
}

function print(data) {
  console.log(`크기: ${count}`);
  console.log(circularQueue);
}

function getSize() {
  return size;
}

function isEmpty() {
  return !size;
}

circularQueue.length = size;
circularQueue.fill(null);

console.log(circularQueue);

push('월');
print();
push('화');
print();
push('수');
print();
push('목');
print();
push('금');
print();
push('토');
print();
push('일');
print();
push('홈');
print();

pop();
print();
pop();
print();

push('월');
print();
push('화');
print();

pop();
print();
pop();
print();
pop();
print();
pop();
print();
pop();
print();
pop();
print();
