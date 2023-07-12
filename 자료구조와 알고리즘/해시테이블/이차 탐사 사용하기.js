function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw 'hash table is full';

  var hashedIndex = this.hash(key),
    squreIndex = 1;

  // 이차탐사
  while (this.keys[hashedIndex % this.size] != null) {
    hashedIndex += Math.pow(squreIndex, 2);

    squreIndex++;
  }

  this.keys[hashedIndex % this.size] = key;
  this.values[hashedIndex % this.size] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  var hashedIndex = this.hash(key),
    squreIndex = 1;

  while (this.keys[hashedIndex % this.size] != key) {
    hashedIndex += Math.pow(squreIndex, 2);

    hashedIndex = hashedIndex % this.size;
    squreIndex++;
  }

  return this.values[hashedIndex % this.size];
};

HashTable.prototype.hash = function (key) {
  // 키가 정수인지 확인한다.
  if (!Number.isInteger(key)) throw 'must be int';
  return key % this.size;
};

HashTable.prototype.initArray = function (size) {
  var array = [];
  for (var i = 0; i < size; i++) {
    array.push(null);
  }
  return array;
};

var exampletable = new HashTable(13);
exampletable.put(7, 'hi');
exampletable.put(20, 'hello');
exampletable.put(33, 'sunny');
exampletable.put(46, 'weather');
exampletable.put(59, 'wow');
exampletable.put(72, 'forty');
exampletable.put(85, 'happy');
exampletable.put(98, 'sad');

console.log(exampletable);
