/**문자 정렬
 * 소문자 알파벳으로 이루어진 N개의 단어가 들어올 때 아래의 조건에 따라 정렬해보자.
 * 1. 길이가 짧은 것부터
 * 2. 길이가 같으면 사전 순으로
 * 이때 1 <= N <= 1000이고 단어의 길이는 10을 넘지 않는다.
 */

class BubbleSort {
  sort(data) {
    let len = data.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }

    return data;
  }
}

class AdvBubbleSort {
  sort(data) {
    let len = data.length;
    let isSwap = false;

    for (let i = 0; i < len; i++) {
      isSwap = false;

      for (let j = 0; j < len - 1 - i; j++) {
        if (data[j] > data[j + 1]) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
        isSwap = true;
      }

      if (!isSwap) {
        break;
      }
    }

    return data;
  }
}

let N = 11;
let words = [
  'but',
  'i',
  'wont',
  'hesitate',
  'no',
  'more',
  'it',
  'cannot',
  'wait',
  'aaaaaaaaaaa',
  'bb',
];

let wordMap = {};
let convertList = [];

words.forEach((word) => {
  let hash = '';

  //'bb' => ['b', 'b']
  word.split('').forEach((ch) => {
    let num = ch.charCodeAt() - 'a'.charCodeAt() + 1; // a:1, b:2로 만들기 위해
    hash += num; // => 문자열 '' + 1 = '1'
  });

  hash = parseInt(hash);
  wordMap[hash] = word; // 'aa' = 11 -> wordMap[11] = 'aa'
  convertList.push(hash); // 해당 convertList로 bubbleSort가 가능해진다.
});

const bubbleSort = new BubbleSort();
console.log(words);
console.log(convertList);
let sortedConvertList = bubbleSort.sort(convertList);
console.log('after: ', sortedConvertList);

sortedConvertList = sortedConvertList.map((elem) => wordMap[elem]);
console.log('answer: ', sortedConvertList);

/** 허점 발견.
 * 'aaaaaaaaaaa', 'hesitate' 를 비교했을 때
 * 전자가 후자보다 단어의 길이가 더 길기 때문에 뒤로 정렬되어야 하지만,
 * 숫자를 단지 이어붙였을 때 더 짧기 때문에 앞으로 정렬됨. 다시 풀어보기
 */
