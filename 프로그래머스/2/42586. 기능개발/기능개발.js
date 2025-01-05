class Queue {
    constructor() {
        this.rear =0;
        this.front =0;
        this.items=[];
    }
    push(val){
        this.items[this.rear]=val
        this.rear++
    }
}
function solution(progresses, speeds) {
    const q = new Queue();
    let maxDay
    let answer =[]
    let count =0;
    
    for(i=0; i<progresses.length; i++){
        const restDay = Math.ceil((100 - +progresses[i]) / speeds[i]) 
        q.push(restDay)
    }
    maxDay=q.items[0];
    for(j=0; j<q.items.length; j++){
        if(q.items[j]<=maxDay)
            {
                count++; 
            }
        else{
             answer.push(count); 
                 count = 1; 
                 maxDay=q.items[j];
        }
    }
    answer.push(count);
    return answer;
}