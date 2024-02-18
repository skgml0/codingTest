// 문자열로 구성된 리스트 strings와 정수 n이 주어졌을 떄, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순
// 인덱스 n번째가 같은 문자열일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치
function solution(strings, n) {
  return strings.sort(function (a, b) {
    if (a[n] > b[n]) {
      return 1;
    }
    if (a[n] < b[n]) {
      return -1;
    }
    return a.localeCompare(b);
  });
}

//다른사람 풀이 
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}