function solution(N, stages) {
  let failedStageResult = []
  let failPercentOnStage={}

  for(i=1; i<=N; i++){
    const challengePeople = stages.filter((stages)=>stages >= i ).length
    const challenging = stages.filter((stages)=> stages === i).length
    failPercentOnStage[i] =(challenging/challengePeople);
  }
  const sortedResult = Object.entries(failPercentOnStage).sort((a,b)=> b[1] - a[1])
  for(let element of sortedResult){
    failedStageResult.push(Number(element[0]));
  }
  return failedStageResult;
}

/* 다른 풀이
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
 */

/*
시간결과 
객체가 더 빠른 경우가 있지만, 시간이 많이 걸리는 테스트일 경우 (테스트11: 1523(객체) vs 1192(배열)  
테스트9: 4651(객체) vs 4516(배열) 등 ) 배열로 하는게 더 빠른 결과를 보였다.  
*/
