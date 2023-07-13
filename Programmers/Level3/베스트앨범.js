// 일부 런타임 에러
function solution(genres, plays) {
  var answer = [];

  var chart = [];
  let counts = new Map();

  for (let i = 0; i < genres.length; i++) {
    chart.push([genres[i], plays[i]]);
  }

  for (let [genre, play] of chart) {
    counts.set(genre, play + (counts.get(genre) || 0));
  }

  const sortedGenres = [...counts.keys()].sort(
    (a, b) => counts.get(b) - counts.get(a)
  );

  for (let i = 0; i < sortedGenres.length; i++) {
    let tmp = [];
    for (let j = 0; j < genres.length; j++) {
      if (sortedGenres[i] === genres[j]) {
        tmp.push({ [j]: plays[j] });
      }
    }
    tmp.sort((a, b) => Object.values(b) - Object.values(a));
    answer.push(+Object.keys(tmp[0]), +Object.keys(tmp[1]));
  }

  return answer;
}
