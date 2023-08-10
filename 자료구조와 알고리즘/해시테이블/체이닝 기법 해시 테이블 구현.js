// 해당 버킷의 인덱스에 리스트를 형성하여 삽입/조회/삭제를 하는 기법
// 충돌 시, 해당 인덱스의 리스트를 탐색하여 CRUD
// 계속 리스트를 형성하기 때문에 full인 상황이 존재하지 않는다. 무한히 데이터를 관리할 수 있다.
class HashMap {
  constructor() {
    this.bucket = [];
    this.size = 6;
    this.bucket.length = this.size;
    this.bucket = this.bucket.fill(null).map((elem) => []);

    //2번
    // this.size = 6;
    // this.bucket = Array.from({ length: this.size }, () => []);
  }

  set(key, value) {
    console.log(`[SET] key: ${key} value: ${value}`);

    let hash = this.hashing(key);
    this.bucket[hash].push({ name: key, phoneNumber: value });
  }

  get(key) {
    console.log(`[GET] key: ${key}`);

    let hash = this.hashing(key);

    let len = this.bucket[hash].length;
    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash][i].name, key)) {
        console.log(this.bucket[hash][i]);
        return;
      }
    }

    console.log('찾는 값이 없습니다.');
  }

  del(key) {
    console.log(`[DEL] key: ${key} `);

    let hash = this.hashing(key);

    let len = this.bucket[hash].length;
    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash][i].name, key)) {
        this.bucket[hash].splice(i, 1);
        return;
      }
    }

    console.log('지울 값이 없습니다.');
  }

  hashing(key) {
    // 각자리 ascii 값을 다 더해서 bucket size로 나눈 나머지가 hashing value
    let ret = 0;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      ret += key[i].charCodeAt();
    }

    ret = ret % this.size;

    return ret;
  }

  print() {
    console.log('=== print ===');
    console.log(this.bucket);
  }

  isEmpty(data) {
    return JSON.stringify(data) == JSON.stringify([]);
  }

  isSame(d1, d2) {
    return !this.isEmpty() && d1 == d2;
  }
}

const hashMap = new HashMap();

hashMap.set('john', 1);
// hashMap.print();
hashMap.set('brad', 2);
hashMap.set('kaiz', 3);
// hashMap.print();
hashMap.set('olivia', 4);
hashMap.set('lily', 5);
hashMap.set('zoe', 6);
hashMap.set('ava', 7);
hashMap.set('haily', 8);
hashMap.set('anna', 9);
hashMap.set('kane', 10);

hashMap.print();

hashMap.get('john');
hashMap.get('lily');
hashMap.get('tom');

hashMap.del('haily');
hashMap.print();

hashMap.del('kaiz');
hashMap.print();

hashMap.del('brad');
hashMap.print();

hashMap.del('zombie');
hashMap.print();
