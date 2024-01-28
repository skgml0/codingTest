function solution(numbers) {
  let Arr = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      const Sum = numbers[i] + numbers[j];
      Arr.push(Sum);
    }
  }
  const answer = Array.from(new Set(Arr)).sort((a, b) => a - b);
  return answer;
}

// [...new Set(Arr)].sort((a,b)=> a-b) 방법도 있다.
// Arr에 해당 값이 존재하지 않은 경우에만 push해주는 방법도 있다.
