function solution(my_string, n) {
    let str = ""
    my_string.split("").forEach(v=> (str += (v.repeat(n))))
    return str
}