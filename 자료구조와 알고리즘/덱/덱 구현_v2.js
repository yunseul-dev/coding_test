// javasript의 array를 이용해서 덱 구현
let deque = [];

function pushFront(data) {
  deque.unshift(data);
}

function pushRear(data) {
  deque.push(data);
}

function popFront() {
  if (isEmpty()) {
    console.log('덱이 비었습니다.');
    return;
  }

  let ret = deque.shift();
  console.log(`popFront: ${ret}`);
}

function popRear() {
  if (isEmpty()) {
    console.log('덱이 비었습니다.');
    return;
  }

  let ret = deque.pop();
  console.log(`popRear: ${ret}`);
}

function print() {
  console.log(`크기: ${getSize()}`);
  console.log(deque);
}

function getSize() {
  return deque.length;
}

function isEmpty() {
  return !deque.length;
}

pushFront('화');
print();
pushRear('수');
print();
pushFront('월');
print();
pushRear('목');
pushRear('금');
pushRear('토');
pushRear('일');
print();

popFront();
print();
popRear();
print();

popFront();
popRear();
print();

popFront();
popRear();
print();

popFront();
popRear();
print();

popFront();
print();
