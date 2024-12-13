function solution(answers) {
    let ans=[]
    let scoreArr =[0,0,0]
    const pattern1 = [1,2,3,4,5]
    const pattern2 = [2,1,2,3,2,4,2,5]
    const pattern3 = [3,3,1,1,2,2,4,4,5,5]

    for(i=0; i<answers.length; i++){
       if(answers[i] === pattern1[i%5]) scoreArr[0]+=1
       if(answers[i] === pattern2[i%8]) scoreArr[1]+=1
       if(answers[i] === pattern3[i%10]) scoreArr[2]+=1
    }
    // 가장 큰 값을 가진 인덱스 찾기 혹은 가장 큰 값을 가진 여러 인덱스 찾기 
    const maxNum = Math.max(...scoreArr)
    scoreArr.forEach((v,i)=> v==maxNum ? ans.push(i+1): null)
    
    return ans;
}