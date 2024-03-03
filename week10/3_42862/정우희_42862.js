// 런타임 해결 못함
function solution(n, lost, reserve) {
  let answer = n - lost.length;

  // 여벌 체육복을 가져온 학생이 도난당한 경우 처리
  lost = lost.filter((l) => !reserve.includes(l));

  // 여벌 체육복을 가진 학생이 도난당한 학생에게 빌려주는 경우 고려
  reserve = reserve.filter((r) => !lost.includes(r));

  for (let i = 0; i < lost.length; i++) {
    const student = lost[i];
    if (reserve.includes(student - 1)) {
      answer++;
      reserve.splice(reserve.indexOf(student - 1), 1);
    } else if (reserve.includes(student + 1)) {
      answer++;
      reserve.splice(reserve.indexOf(student + 1), 1);
    }
  }

  return answer;
}
