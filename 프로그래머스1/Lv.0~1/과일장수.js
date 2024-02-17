function solution(k, m, score) {
  const scoreArrange = score.sort((a, b) => b - a);
  let answer = 0;
  for (i = 0; i < score.length; i += m) {
    let sum = 0;
    let sumArr = scoreArrange.slice(i, i + m);
    if (sumArr.length === m) {
      sum = Math.min(...sumArr) * m;
      answer += sum;
    }
  }
  return answer;
}
