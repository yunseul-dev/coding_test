function makeWordsMap(word, wordList) {
  let closeWords = [];

  for (let w of wordList) {
    let diffCount = [...w].filter((c, i) => c !== word[i]).length;
    if (diffCount === 1) closeWords.push(w);
  }

  return closeWords;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let wordsMap = new Map();

  // 1. 트리 만들기
  for (let i = -1; i < words.length; i++) {
    let word = i === -1 ? begin : words[i];
    wordsMap.set(word, makeWordsMap(word, [begin, ...words]));
  }

  // 2. 최단경로 찾기
  let visit = new Map();
  visit.set(begin, 0);

  let queue = [begin];

  while (queue.length) {
    let curWord = queue.shift();
    let children = wordsMap.get(curWord);

    for (let i = 0; i < children.length; i++) {
      if (!visit.get(children[i])) {
        visit.set(children[i], visit.get(curWord) + 1);
        queue.push(children[i]);
      }
    }
  }

  return visit.get(target);
}
