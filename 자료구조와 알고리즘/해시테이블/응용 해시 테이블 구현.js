// 코딩테스트나 현업에서 performance를 올려야 할 때 사용
// 하나의 데이터에 대해 서로 다른 두 개의 해싱을 통해 데이터를 관리
// 체이닝 기법에서는 충돌 시 탐색하는 과정에서 문자열을 서로 비교해야 하지만 해당 기법은 해싱 값만 비교하면 됨
class HashMap {
  constructor() {
    this.bucket = [];
    this.size = 6;
    this.bucket.length = this.size;
    this.bucket = this.bucket.fill(null).map((elem) => []);
  }

  set(key, value) {
    console.log(`[SET] key: ${key} value: ${value}`);

    let hash1 = this.hashing1(key);
    let hash2 = this.hashing2(key);

    this.bucket[hash1].push({ subHash: hash2, name: key, phoneNumber: value });
  }

  get(key) {
    console.log(`[GET] key: ${key} `);

    let hash1 = this.hashing1(key);
    let hash2 = this.hashing2(key);

    let len = this.bucket[hash1].length;
    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash1][i].subHash, hash2)) {
        // name으로 문자열을 비교하는 것보다 subHash를 비교하는 것이 시간복잡도가 낮다.
        if (this.bucket[hash1][i].name == key) {
          console.log(this.bucket[hash1][i]);
          return;
        }
      }
    }
    console.log('찾는 값이 없습니다.');
  }

  del(key) {
    console.log(`[DEL] key: ${key} `);

    let hash1 = this.hashing1(key);
    let hash2 = this.hashing2(key);

    let len = this.bucket[hash1].length;

    for (let i = 0; i < len; i++) {
      if (this.isSame(this.bucket[hash1][i].subHash, hash2)) {
        if (this.bucket[hash1][i].name == key) {
          this.bucket[hash1].splice(i, 1);
          return;
        }
      }
    }

    console.log('지울 값이 없습니다.');
  }

  hashing1(key) {
    // 각자리 ascii 값 다 더해서 버킷 사이즈로 나눈 값: hashing value
    let ret = 0;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      ret += key[i].charCodeAt();
    }

    ret = ret % this.size;

    return ret;
  }

  hashing2(key) {
    let ret = 0;
    let len = key.length;

    for (let i = 0; i < len; i++) {
      ret = ret * 8 + key[i].charCodeAt();
    }

    ret = ret % this.size;

    return ret;
  }

  print() {
    console.log('=== print ===');
    console.log(this.bucket);
  }

  isEmpty(data) {
    return JSON.stringify(this.bucket[data]) == JSON.stringify([]);
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
hashMap.set('lily', 5);
hashMap.set('zoe', 6);
hashMap.set('ava', 7);
hashMap.set('haily', 8);
hashMap.set('anna', 9);
hashMap.set('kane', 10);
// hashMap.print();

hashMap.get('kaiz');
hashMap.get('haily');
hashMap.get('zoe');

hashMap.print();

hashMap.del('zoe');
hashMap.print();
hashMap.del('kaiz');
hashMap.print();
hashMap.del('son');
hashMap.print();

/**
 * 해시를 두 번 vs 버킷이 큰 해시
 * 공간복잡도를 낮출 수 있다 (경우에 따라 시간 복잡도도 낮출 수 있다.)
 *
 * 총 1억개의 버킷을 만들면 메모리 공간이 1억개 필요하다.
 *
 * 두개 해싱을 하면
 * 1만개 1만개 짜리 해싱으로 바꿀 수 있기 때문에 2만개가 필요하다.
 * hash1 -> 10000개
 * hash2 -> 10000개
 */
