// 내 풀이
function solution(n) {
  const arr = String(n)
    .split("")
    .map((v) => +v);
  return +arr.sort((a, b) => b - a).join("");
}
// 다른 사람 풀이
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");
  return +newArr;
}
/* 생각한 로직 
1. 숫자를 문자열로 바꾸기 
  1) num.toString() , (100).toString()
  2) String(num), String(100)
  3) num+""
  4) `${num}` , `${100}`
  5) toFixed() === toFixed(0), 
    toFixed(n)은 소수점n+1자리에서 반올림하고 n자리까지만 문자열로 변환
    num.toFixed() , (100).toFixed()

2. 문자열을 배열로 바꾸기
   1) arr =[...문자열]
   2) Array.from(문자열변수) Array.isArray(변수) => true/false 값으로 나옴
   3) str.split("") 문자열 한글자씩 배열로 변환
      ** str.split()과 결과다름 -> 배열로 안나눠짐

3. 배열 내용물을 큰 숫자대로 정렬시키기
   arr.sort((a,b)=> a-b) 작은 수대로 정렬
   arr.sort((a,b)=> b-a) 큰 수대로 정렬
   arr.sort() 유니코드 순서대로 정렬(숫자값 정렬 커지는순x, 파라미터 활용필요)
     ** 원본 배열인 arr가 정렬이 되고, 리턴하는 값 또한 원본 배열 arr가리키고 있음
    # 오름차순
    arr.sort(function(a,b){
    if(a>b) return 1;
    if(a===b) return 0;
    if(a<b) return -1; 
   })
    # 내림차순
    arr.sort(function(a,b){
    if(a<b) return 1;
    if(a===b) return 0;
    if(a>b) return -1; 
   })

4. 배열 문자열로 합치고 ""없앤 숫자로 답 내리기
   문자열 대신 숫자로, 사칙연산 또는 Number, parseInt()등 사용 
*/
