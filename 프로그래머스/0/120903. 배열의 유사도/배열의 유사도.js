function solution(s1, s2) {
    let sum =0;
    s2.forEach(v => s1.includes(v) ? sum+=1 : null)
    return sum;
}