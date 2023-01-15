// 1번
// function solution(n) {
//   let sum = 0

//   for (i=1; i<=n; i++){
//           if (n%i ==0){
//               sum += i
//           }
//   }
//   return sum
// }
// 2번
// function solution(n) {
//   // 0인경우 에러남 let sum = n>1? 1+n: 1
//   let sum = n>1 ? 1+n : n;
//   // for 의 조건 안에 들어가는 값은 미리 계산해서 넣어주는 게 성능상 좋음
//   const halfPoint = parseInt(n/2);
//   for (i=2; i<=halfPoint; i++){
//           if (n%i ==0){
//               sum += i
//           }
//   }
//   return sum
// }
// 3번
// function solution(n) {
//   if (n < 2) return n;

//   let sum = n + 1;
//   const halfPoint = Math.floor(n / 2);

//   for (i = 2; i <= halfPoint; i++) {
//     if (n % i === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
function solution(n) {
  let divisors = [1]; // 1 is always a divisor
  let i = 2;
  let limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      divisors.push(i);
      divisors.push(n / i);
    }
    i++;
  }
  if (n === limit * limit) divisors.pop(); // remove the square root, which is added twice
  return divisors.reduce((a, b) => a + b);
}
//  이 함수는 while 루프를 사용하여 2에서 입력 숫자의 제곱근까지 반복하여 n각 숫자가 약수인지 확인합니다 n. 그렇다면 divisors배열에 추가됩니다.
//  숫자의 제곱근은 제곱근보다 큰 숫자가 숫자 'n'을 나눈 다음 제곱근보다 작은 해당 약수가 있는 것처럼 루프의 상한으로 사용됩니다(예: n=16인 경우).
//, 4*4=16, 4는 16의 제곱근이고 4도 16의 약수이므로 2도 16의 약수입니다.
// 따라서 모든 약수가 숫자의 제곱근보다 작거나 같다면 우리는 이 약수로 숫자를 나누어 나머지 약수를 찾을 수 있습니다.
//  마지막으로, reduce 메서드는 divisors 배열의 모든 요소를 ​​합산하고 결과를 반환하는 데 사용됩니다.
