function solution(x, y, n) {
    if(x===y) return 0;
    const queue = new Map([[x,0]])
    // const queue = new Map([[x, 0]]);  // key: 숫자, value: 연산 횟수
    let index = 0;
    const arr = [x]; // queue 역할 
    // while (index < arr.length) {
        
//         const cur = arr[index++];
//         console.log(cur,'cur----')
//         const cnt = queue.get(cur);
            for (const [cur, cnt] of queue) {


        for (const next of [cur + n, cur * 2, cur * 3]) {
            // console.log(next,'next',queue,'queue========')
            // console.log(arr,'arr====2')
            
            if (next === y) return cnt + 1;
            if (next > y || queue.has(next)) continue;
            
            queue.set(next, cnt + 1);
        }
    }
    
    return -1;
}