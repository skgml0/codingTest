function solution(price, money, count) {
    const sumCount = ((count+1)*count) / 2
    const extendedPrice = sumCount * price
    
    return money >= extendedPrice ? 0 : extendedPrice-money
}
