// 내풀이
// function solution(a, b, n) {
//   let stay =b*Math.floor(n/a)+ (n%a)
//   let totalPlus =b*Math.floor(n/a)
//
//   while(stay>=a){
//     totalPlus += b*Math.floor(stay/a)
//     stay = b*Math.floor(stay/a)+ (stay%a)
//   }
//   return totalPlus
// }
// 내 풀이 개선 2
function solution(a, b, n) {
  let totalPlus =0

  while(n>=a){
    totalPlus += b*Math.floor(n/a)
    n = b*Math.floor(n/a)+ (n%a)
  }
  return totalPlus
}

// 다른 사람 풀이
// solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b

// 다른 사람 풀이
// 문제 조건에서 n이 항상 b보다 크므로 max를 쓸 필요는 없다고 한다.

// function solution(give, take, init){
//   return Math.ceil((init - give + 1) / (give - take)) * take
// }
