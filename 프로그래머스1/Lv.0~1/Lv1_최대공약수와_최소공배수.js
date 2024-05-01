/* 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, 
solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
s
제한 사항
두 수는 1이상 1000000이하의 자연수입니다.*/

// max_divide_2에서 Math.abs(max) -절대값을 사용하는게 계산 속도 더 빠르다
function solution(n, m) {
    let min = Math.min(n, m)
    let max = Math.max(n, m)
    const max_divide_2 = max / 2
    let GCD = 1
    let divide = 2

    while (divide < max_divide_2) {
        if (max % divide === 0 && min % divide === 0) {
            max = max / divide
            min = min / divide
            GCD *= divide
        } else {
            divide++
        }
    }
    return [GCD, GCD * max * min]
}
/* 조건으로 r=a%b 로 true/false 결정
0이 나오면 for문 종료
<유클리드 호제법 사용> GCD(a, b) = GCD(b, r)
a와 b의 최대공약수를 G라고 하면, a를 b로 나눈 나머지를 r
r이 0이면, b가 최대 공약수

function gcdlcm(a, b) {
    var r
    for (var ab = a * b; (r = a % b); a = b, b = r) {}
    return [b, ab / b]
}
*/

