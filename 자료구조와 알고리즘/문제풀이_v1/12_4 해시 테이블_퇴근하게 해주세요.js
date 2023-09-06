/**퇴근하게 해주세요
 * 회사 출입에 대한 정보가 N개가 있을 떄, 현재 회사에 남아있는 사람의 이름을 역순으로 출력해보자.
 * 입력: 7 ['brad enter', 'john enter', 'bob enter', 'brad leav', 'alice enter', 'lisa enter', 'drake enter']
 * 출력: lisa john drake bob alice
 */

function hash(data) {
  let ret = 0;

  let len = data.length;
  for (let i = 0; i < len; i++) {
    ret = (ret + (data.charCodeAt(i) * 19 + 3)) % 10;
  }

  return ret; // 0 ~ 9 사이의 hash value return
}

let N = 7;
let arr = [
  ['brad', 'enter'],
  ['john', 'enter'],
  ['bob', 'enter'],
  ['brad', 'leave'],
  ['alice', 'enter'],
  ['lisa', 'enter'],
  ['drake', 'enter'],
];

let companyMap = {}; // 그 사람이 출근했는지 퇴근했는지
let nameMap = {}; // 해시: 실제 이름

arr.forEach((elem) => {
  let h = hash(elem[0]);
  nameMap[h] = elem[0];

  if (elem[1] == 'enter') {
    companyMap[h] = 1;
  } else if (elem[1] == 'leave') {
    companyMap[h] = 0;
  }
});

console.log(nameMap);
console.log(companyMap);

// 퇴근하지 않은 사람들의 이름을 내림차순으로 출력
companyMap = Object.entries(companyMap)
  .filter((elem) => elem[1] != 0)
  .map((elem) => nameMap[elem[0]])
  .sort()
  .reverse();
console.log(companyMap);
