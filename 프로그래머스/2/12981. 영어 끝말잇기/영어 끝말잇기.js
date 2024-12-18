function solution(n, words) {
    let lastChar =words[0][words[0].length-1]
    let copy =[]
        for(i=1; i<words.length; i++){
        copy = words.slice(0,i);
  
        if([...words[i]].length ===1){
            return [(i % n)+1,Math.ceil((i+1)/n)]
        }
        if(lastChar !== words[i][0]){
            return [(i % n)+1,Math.ceil((i+1)/n)]
        }
        if(copy.includes(words[i]))
            {   
            return [(i % n)+1,Math.ceil((i+1)/n)]}
        else { lastChar = [...words[i]].pop()}
    }
    return [0,0]
}