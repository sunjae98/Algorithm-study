function solution(m, coin) {
  let answer;
  let dy = Array(m + 1).fill(10000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m + 1; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
    answer = dy[m];
  }
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
