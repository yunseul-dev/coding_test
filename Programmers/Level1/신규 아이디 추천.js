function solution(new_id) {
  let recommendId = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/gi, '')
    .replace(/\.{2,}/gi, '.')
    .replace(/(^\.)|(\.$)/g, '')
    .substr(0, 15)
    .replace(/\.$/g, '');

  if (recommendId === '') {
    return 'aaa';
  }

  while (recommendId.length <= 2) {
    recommendId += recommendId.charAt(recommendId.length - 1);
  }

  return recommendId;
}

// 다른 사람 코드 (padEnd)
const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/^\.|\.$/g, '');
  return id.padEnd(3, id[id.length - 1]);
};
