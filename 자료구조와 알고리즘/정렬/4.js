// 단어 세기 목록 구현하기
const wordCount = (sentence) => {
  let wordsArr = sentence.replace(/[.]/g, '').split('');
  let occurenceList = {};
  let answerList = {};

  for (let i = 0; i < wordsArr.length; i++) {
    let currentWord = wordsArr[i];

    if (!occurenceList[currentWord]) {
      occurenceList[currentWord] = 1;
    } else {
      occurenceList[currentWord]++;
    }
  }

  let arrayTmp = [];
  for (let prop in occurenceList) {
    arrayTmp.push([occurenceList[prop], prop]);
  }

  const sortComp = (a, b) => {
    return b[0] - a[0];
  };

  arrayTmp.sort(sortComp);

  for (let i = 0; i < arrayTmp.length; i++) {
    let current = arrayTmp[i];
    answerList[current[1]] = current[0];
  }

  return answerList;
};

console.log(
  wordCount('practice makes perfect. get perfetc by practice. just practice')
);

// 시간 복잡도: O(nlog2(n))
// 공간 복잡도: O(n)
