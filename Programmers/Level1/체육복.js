function solution1(n, lost, reserve) {
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

function solution2(n, lost, reserve) {
  let students = Array.from({ length: n }, () => 1);

  lost.map((elem) => students[elem - 1]--);

  reserve.map((elem) => students[elem - 1]++);

  for (let i = 0; i < students.length; i++) {
    if (students[i] > 1 && students[i - 1] === 0) {
      students[i]--;
      students[i - 1]++;
    } else if (students[i] > 1 && students[i + 1] === 0) {
      students[i]--;
      students[i + 1]++;
    }
  }

  return students.filter((student) => student > 0).length;
}
