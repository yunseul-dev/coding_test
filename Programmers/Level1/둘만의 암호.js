function solution(s, skip, index) {
  const turn = 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .filter((char) => !skip.includes(char));

  return [...s]
    .map((str) => {
      const newIndex = (turn.indexOf(str) + index) % turn.length;
      return turn[newIndex];
    })
    .join('');
}
