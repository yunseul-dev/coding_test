function solution(genres, plays) {
  const playByGenre = {};
  const songsByGenre = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    if (playByGenre[genre] === undefined) {
      playByGenre[genre] = 0;
      songsByGenre[genre] = [];
    }
    playByGenre[genre] += plays[i];
    songsByGenre[genre].push({ index: i, play: plays[i] });
  }

  const sortedGenres = Object.keys(playByGenre).sort(
    (a, b) => playByGenre[b] - playByGenre[a]
  );

  const answer = [];
  sortedGenres.forEach((genre) => {
    const songs = songsByGenre[genre];
    songs.sort((a, b) => {
      if (a.play === b.play) {
        return a.index - b.index;
      }
      return b.play - a.play;
    });
    answer.push(songs[0].index);
    if (songs.length > 1) {
      answer.push(songs[1].index);
    }
  });

  return answer;
}

// 일부 시간초과 런타임 에러
function solution(genres, plays) {
  var answer = [];
  let counts = new Map();

  for (let i = 0; i < genres.length; i++) {
    counts.set(genres[i], plays[i] + (counts.get(genres[i]) || 0));
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
