function solution(order) {
  let result = 0;
  const stack = [];
  
    // 1. 택배박스 순서대로 넣기
    for(let i=1; i<=order.length; i++){
        stack.push(i);
        // 2. stack에 넣은 값이 order 순서대로 일치하는 경우 pop으로 제거 및 order 순서 순차이동 
        while (stack.length !==0 && stack.at(-1) === order[result]) {
            stack.pop();
            result ++;
        }
    }

  return result;
}