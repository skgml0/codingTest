function solution(array, commands) {
    return commands.map(command => {
        const [s,e,position] = command
        const newArray = array.filter((value,fIndex) => 
                                     fIndex >= s -1 && fIndex <= e-1).sort((a,b)=> a-b)
        return newArray[position-1]
    })
}

/*
function solution(array, commands) {
  let answer = [];
  for (i = 0; i < commands.length; i++) {
    const [start, end, nth] = commands[i];
    const arr = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(arr[nth - 1]);
  }
  return answer;
}
*/
