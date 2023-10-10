function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let visit = new Map();

  visit.set(begin, 0);

  const queue = [begin];

  while (queue.length) {
    const curWord = queue.shift();

    for (const nextWord of [begin, ...words]) {
      let diffCount = [...nextWord].filter((c, j) => c !== curWord[j]).length;

      if (diffCount === 1 && !visit.has(nextWord)) {
        visit.set(nextWord, (visit.get(curWord) || 0) + 1);
        queue.push(nextWord);
      }
    }
  }

  return visit.get(target);
}

// function solution(begin, target, words) {
//   if (!words.includes(target)) return 0;

//   let wordsMap = new Map();

//   // 1. 트리 만들기
//   for (let i = -1; i < words.length; i++) {
//     let word = i === -1 ? begin : words[i];
//     let closeWords = [];

//     for (let w of [begin, ...words]) {
//       let diffCount = [...w].filter((c, j) => c !== word[j]).length;
//       if (diffCount === 1) closeWords.push(w);
//     }

//     wordsMap.set(word, closeWords);
//   }

//   // 2. 최단경로 찾기
//   let visit = new Map();
//   visit.set(begin, 0);

//   let queue = [begin];

//   while (queue.length) {
//     let curWord = queue.shift();
//     let children = wordsMap.get(curWord);

//     for (let i = 0; i < children.length; i++) {
//       if (!visit.get(children[i])) {
//         visit.set(children[i], visit.get(curWord) + 1);
//         queue.push(children[i]);
//       }
//     }
//   }

//   return visit.get(target);
// }
