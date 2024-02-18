const { func } = require("prop-types");

function solution(s) {
  const arr = s.split(" ");
  let answer = "";
  for (i = 0; i < arr.length; i++) {
    let word = arr[i].slice();
    for (j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        answer += word[j].toUpperCase();
      } else {
        answer += word[j].toLowerCase();
      }
    }
    if (i === arr.length - 1) {
      return answer;
    }
    answer += " ";
  }
}
// 다른 사람풀이. 테스트 다른 번호에선 내가 푼게 몇 초더 빠른 것도 있었으나, 테스트 15에서 확연히 이 풀이가 더 빨랐다. (0.24ms vs 0.09ms)
function solution(s) {
  return s
    .split(" ")
    .map((i) =>
      i
        .split("")
        .map((j, key) => (key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()))
        .join("")
    )
    .join(" ");
}
// map 끝난 후 다른 메소드 붙여쓰기 
// 삼항 연산자로 바꾸니 0.24ms -> 0.18ms 까지 시간 줄여짐.
function solution(s) {
  const arr = s.split(" ");
  let answer = "";
  for (i = 0; i < arr.length; i++) {
    let word = arr[i].slice();
    for (j = 0; j < word.length; j++) {
      {
        j % 2 === 0
          ? (answer += word[j].toUpperCase())
          : (answer += word[j].toLowerCase());
      }
    }
    if (i === arr.length - 1) {
      return answer;
    }
    answer += " ";
  }
}
