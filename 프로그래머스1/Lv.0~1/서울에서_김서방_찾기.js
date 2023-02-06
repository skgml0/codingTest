function solution(seoul) {
  const answer = seoul.indexOf("Kim");
  return `김서방은 ${answer}에 있다`
}

/* 
1. arr.indexOf("일치하는 값", fromIndex):가장 먼저 일치하는 값
2. arr.lastIndexOf("일치하는값", fromIndex):가장 마지막으로 일치하는 값 
찾으려는 값이 없다면 -1 반환한다.
type과 값이 같아야 찾는다.!_!
3. 일치하는 모든 인덱스 찾으려면, 반복문 써야한다. 
const arr = [1, 1, '1', 1];
let fromIndex = arr.indexOf(1);
while(fromIndex != -1)  {
 document.writeln(fromIndex);
 fromIndex = arr.indexOf(1, fromIndex+1);
}
*/