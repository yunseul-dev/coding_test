function solution(s, n) {
  return s.replace(/[a-z]/gi, (c) =>
    c.charCodeAt() >= 97
      ? String.fromCharCode(97 + (((c.charCodeAt() + n) % 123) % 97))
      : String.fromCharCode(65 + (((c.charCodeAt() + n) % 91) % 65))
  );
}
