function solution(numbers) {
  if (numbers.every((num) => num === 0)) return '0';

  return numbers
    .map((num) => num + '')
    .sort((a, b) => b + a - (a + b))
    .join('');
}
