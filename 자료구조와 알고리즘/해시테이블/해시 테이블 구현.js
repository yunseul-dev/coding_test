// 해싱이란? key를 통해 값을 만들어 내는 과정이다.
// 해싱 값이 같으면 충돌(collision)이 발생한다.
// 해시 테이블 내에 균등하게 분포되지 않고 특정 주소로 모이게 되는 것을 클러스터링(Clustering)이라 한다. (최대한 방지하는 것이 좋음)

class HashMap {
  constructor() {
    // 첫번째 방법
    this.bucket = [];
    this.size = 6;
    this.bucket.length = this.size;
    // john -> hashing -> 5 hashing index -> {name: john / phoneNumber: 010-1234-5678}
    this.bucket = this.bucket.fill(null).map((elem) => ({}));

    // 두번째 방법
    // this.size = 6;
    // this.bucket = Array.from({ length: this.size }, () => ({}));
  }

  set(key, value) {
    console.log(`[SET] key: ${key} value: ${value}`);

    let hash = this.hashing(key);

    if (this.isEmpty(this.bucket[hash])) {
      this.bucket[hash] = { name: key, phoneNumber: value };
    } else {
      console.log(`충돌이 일어났습니다: ${this.bucket[hash].name}`);
    }
  }

  get(key) {
    console.log(`[GET] key: ${key}`);

    let hash = this.hashing(key);

    if (this.isEmpty(this.bucket[hash])) {
      console.log('데이터가 없습니다.');
    } else if (this.bucket[hash].name != key) {
      console.log(`다른 값이 존재합니다. ${key} !=  ${this.bucket[hash].name}`);
    } else {
      console.log(this.bucket[hash]);
    }
  }

  del(key) {
    console.log(`[DEL] key: ${key}`);

    let hash = this.hashing(key);

    if (this.isEmpty(this.bucket[hash])) {
      console.log('데이터가 없습니다.');
    } else if (this.bucket[hash].name != key) {
      console.log(`다른 값이 존재합니다. ${key} != ${this.bucket[hash].name}`);
    } else {
      this.bucket[hash] = {};
    }
  }

  hashing(key) {
    // Hash function: 각 자리의 ascii 값을 모두 더하고 bucket size로 나눈 값 -> hashing value
    let ret = 0;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      ret += key[i].charCodeAt();
    }

    ret = ret % this.size;
    return ret;
  }

  print() {
    console.log('------print------');
    console.log(this.bucket);
  }

  isEmpty(data) {
    return JSON.stringify(data) == JSON.stringify({});
  }
}

const hashMap = new HashMap();

hashMap.set('john', 123);
hashMap.set('brad', 234);
hashMap.set('kaiz', 345);
// hashMap.print();

hashMap.get('john');
hashMap.get('brad');
hashMap.get('kaiz');

hashMap.del('kaiz');
hashMap.del('brad');
hashMap.del('john');
hashMap.print();

// 문제점: kaiz는 john과 hashing 값이 같아서 넣을 수가 없다. 즉 충돌(collision)이 발생한다.
// 선형 조사 기법을 이용해서 이를 해결해보겠다.
