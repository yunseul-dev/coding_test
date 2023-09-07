function solution(input_string) {
  let map = new Map();

  map.set(input_string[0], 1);
  for (let i = 1; i < input_string.length; i++) {
    if (input_string[i] != input_string[i - 1]) {
      map.set(input_string[i], (map.get(input_string[i]) || 0) + 1);
    }
  }

  return (
    [...map.entries()]
      .filter((elem) => elem[1] != 1)
      .map((elem) => elem[0])
      .sort()
      .join('') || 'N'
  );
}
