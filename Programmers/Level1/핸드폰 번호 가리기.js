function solution(phone_number) {
  return phone_number.replace(/.(?=\d{4})/g, '*');
}
