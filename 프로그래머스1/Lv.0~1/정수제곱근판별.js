function solution(n) {
  const num = Math.sqrt(n);

  if (num > 0 && num === parseInt(num)) {
    return (num + 1) ** 2;
  } else return -1;
}
// 다른 사람 풀이
function nextSqaure(n){
    var result = 0;
    var n = Math.sqrt(n);
    result = Number.isInteger(n) ? Math.pow(n+1, 2) : 'no';
    return result;
}
// 다른 사람 풀이2
function nextSqaure(n){
  var result = 0;
  //함수를 완성하세요
    if(Number.isInteger(Math.sqrt(n))){
    result= (Math.sqrt(n)+1) * (Math.sqrt(n)+1)
  } else {
    result = "no"
  }
  return result;
}
// 문제에서, Math.sqrt(n), Number.isInteger(n) 정수인지 아닌지 
// Math.pow(n,x) n^x 거듭제곱 