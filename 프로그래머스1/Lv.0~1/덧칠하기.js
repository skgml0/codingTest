// 내 풀이
function solution(n, m, section) {
  let roller = 0;
  let start = 0;
  let paintArr = new Array(n).fill(0)
  for(i=0; i<section.length; i++){
    paintArr[section[i]-1] = 1
  }

  while(paintArr.indexOf(1) !== -1){
    start = paintArr.indexOf(1)
    paintArr.fill(0,start,start+m)
    roller += 1
  }
  return roller;
}

// 다른 사람 풀이 (배열 없이 계산할 수 있는게 시간복잡도,공간복잡도 측면에서 좋은 것 같다!)
// function solution(n, m, section) {
//   let answer = 0;
//   let painted = 0;
//
//   for(const s of section){
//     if(painted < s){
//       answer++;
//       painted = s + m - 1;
//     }
//   }
//
//   return answer;
// }
