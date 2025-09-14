function solution(prices) {
    const answer =[]
    prices.forEach((currentPrice,i)=> {
        let notFallTime = 1;
        for(let index =i+1; index<prices.length; index++){
           if(index===prices.length-1){return answer.push(notFallTime)}
           if(currentPrice <= prices[index]){
              notFallTime++
           }
           else{return answer.push(notFallTime)}
        }
    })
    answer.push(0)
    return answer;
}