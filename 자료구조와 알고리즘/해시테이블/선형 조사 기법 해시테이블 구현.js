// 충돌이 일어나면 순차 검색을 통해 빈 자리에 넣어주는 기법
class HashMap {
  constructor() {
    this.bucket = [];
    this.size = 6;
    this.bucket.length = this.size;
    this.bucket = this.bucket.fill(null).map((elem) => ({}));
  }

  set(key, value) {
    console.log(`[SET] key: ${key} value: ${value}`);

    let hash = this.hashing(key);

    if (this.isEmpty(this.bucket[hash])) {
      this.bucket[hash] = { name: key, phoneNumber: value };
      return;
    }

    console.log(`충돌이 일어났습니다: ${this.bucket[hash].name} `);
    // depth를 줄이기 위해 else 대신 위 if문에서 return 처리
    // i != hash : hash 값 전까지만 순회
    for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다: ${i}`);
      if (this.isEmpty(this.bucket[i])) {
        this.bucket[i] = { name: key, phoneNumber: value };
        return;
      }
    }

    console.log('버킷이 가득 찼습니다.');
  }

  get(key) {
    console.log(`[GET] key: ${key} `);

    let hash = this.hashing(key);

    if (this.isSame(this.bucket[hash].name, key)) {
      console.log(this.bucket[hash]);
      return;
    }

    console.log(`충돌이 일어났습니다. ${this.bucket[hash].name}`);
    for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다: ${i}`);
      if (this.isSame(this.bucket[i].name, key)) {
        console.log(this.bucket[i]);
        return;
      }
    }

    console.log('찾는 값이 없습니다.');
  }

  del(key) {
    console.log(`[DEL] key: ${key} `);

    let hash = this.hashing(key);

    if (this.isSame(this.bucket[hash].name, key)) {
      this.bucket[hash] = {};
      return;
    }

    console.log(`충돌이 일어났습니다: ${this.bucket[hash].name} `);
    for (let i = (hash + 1) % this.size; i != hash; i = (i + 1) % this.size) {
      console.log(`버킷 순회를 시작합니다: ${i}`);
      if (this.isSame(this.bucket[i].name, key)) {
        this.bucket[i] = {};
        return;
      }
    }
    console.log('지울 값이 없습니다.');
  }

  hashing(key) {
    // hash function: String 각 자리 값을 ascii 코드 값으로 모두 더한 뒤 bucket size 값으로 나눈 값: hashing value
    let ret = 0;
    let len = key.length; // 따로 정의하는 이유?
    // js -> .length 는 프로퍼티이므로 시간 복잡도 O(1) / py -> len()  O(1)
    // c, c++ strlen() -> 스트링 들어오면 -> 하나하나 보면서 총 길이가 몇인지 카운트 하는 함수
    // 즉 길이가 N인 str -> strlen(Nstr) -> 시간 복잡도 O(N)
    // 이것이 for문에 들어가면 O(N^2)
    // 자바스크립트에서는 상관 없으나 추후 다른 언어를 사용했을 때를 대비하여 length를 미리 선언해두고 사용함.

    for (let i = 0; i < len; i++) {
      ret += key[i].charCodeAt(); // ascii 코드 변환하는 func
    }

    ret = ret % this.size;
    return ret;
  }

  print() {
    console.log('=== print ===');
    console.log(this.bucket);
  }

  isEmpty(data) {
    return JSON.stringify(data) == JSON.stringify({});
  }

  isSame(d1, d2) {
    return !this.isEmpty() && d1 == d2;
  }
}

const hashMap = new HashMap();

hashMap.set('john', 1);
hashMap.print();

hashMap.set('brad', 2);
// hashMap.print();

hashMap.set('kaiz', 3);
// hashMap.print();

hashMap.set('olivia', 4);
// hashMap.print();

hashMap.set('lily', 5);
// hashMap.print();

hashMap.set('zoe', 6);
hashMap.print();

hashMap.get('brad');
hashMap.get('zoe');
hashMap.get('ava');

hashMap.del('brad');
hashMap.del('zoe');
hashMap.del('ava');
hashMap.print();

// 버킷이 가득 찬 경우, 더 이상 넣을 수 없다.
// 체이닝 기법을 이용해서 이를 해결해보겠다.
