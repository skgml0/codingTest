/* 
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/

/* 
  n진법으로 만들기 숫자.toString(n)   
  n진법을 10진수로 만들기 parseInt(숫자,n)
*/
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3)
}

/*.split('')으로 배열로 만드는게 아닌, [...value] 값 배열로 풀어서 쓰기*/
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(''), 3)
}
