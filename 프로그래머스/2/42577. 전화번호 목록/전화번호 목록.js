function solution(phoneBook) {
    return !phoneBook.sort().some((v,i) =>
        phoneBook.length-1 > i && phoneBook[i+1].startsWith(v)
    )
    
}