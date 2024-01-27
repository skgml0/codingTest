function solution(arr) {
  let pastNum = 99;
  let answerArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== pastNum) {
      pastNum = arr[i];
      answerArr.push(arr[i]);
    }
  }
  return answerArr;
}

// function solution(arr){
//   return arr.filter((val,index)=> val !== arr[index+1])
// }
