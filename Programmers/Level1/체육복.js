function solution(n, lost, reserve) {
  // 체육복을 도난당했고, 여벌이 없는 학생
  const lostNoReserve = lost
    .sort((a, b) => a - b)
    .filter((student) => !reserve.includes(student));
  let finalNoLend = lostNoReserve.length;

  // 여벌이 있고 도난당하지 않은 학생
  let reserveNoLost = reserve
    .sort((a, b) => a - b)
    .filter((student) => !lost.includes(student));

  for (let i = 0; i < lostNoReserve.length; i++) {
    if (reserveNoLost.includes(lostNoReserve[i] - 1)) {
      finalNoLend--;
      reserveNoLost.splice(reserveNoLost.indexOf(lostNoReserve[i] - 1), 1);
    } else if (reserveNoLost.includes(lostNoReserve[i] + 1)) {
      finalNoLend--;
      reserveNoLost.splice(reserveNoLost.indexOf(lostNoReserve[i] + 1), 1);
    }
  }

  return n - finalNoLend;
}
