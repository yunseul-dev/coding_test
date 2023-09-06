/**사이클 단어
 * 사이클 단어는 특정 단어를 원형으로 쓴 단어이다.
 * 이때 단어의 한 부분을 골라 시계방향으로 읽었을 때 동일하다면 동일한 단어이다.
 * 예를 들어 apple이라는 A 단어와 pplea라는 B 단어는 결국 A단어의 p부터 읽기 시작하면 동일하기에 A와 B는 동일하다.
 * 입력으로 단어의 개수 N과 단어들이 주어질 때, 동일하지 않은 단어가 몇 개인지 구현해보자.
 *
 * 입력: [5, picture, turepic, icturep, word, ordw]
 * 출력: 2
 */

let set = new Set();

let N = 5;
let arr = ['picture', 'turepic', 'icturep', 'word', 'ordw'];

// word = 4
// word
// ordw
// rdwo
// dwor
let count = 0;
arr.forEach((elem) => {
  let len = elem.length;

  if (!set.has(elem)) {
    count++;
    set.add(elem);

    while (len--) {
      elem = elem.substr(1) + elem[0];
      set.add(elem);
    }
  }
});

console.log(set);
console.log(count);
