const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stdin = [];

rl.on('line', (line) => {
  stdin.push(line.trim());
});

rl.on('close', () => {
  const [N, K] = stdin[0].split(' ').map(Number);
  // 선입선출(FIFO)
  const q = Array.from({length:N}, (_,i)=> i+1);
  const answer = [];
  let currentIndex = 0;
  while(q.length >0){
    // K번째 사람을 N명 사람이 모두 제거될때까지 반복
    // 제거되는 순서
    for (let i=0; i<K; i++){
      // 가장 앞을 빼서 뒤에 넣어줌 
      const move = q.shift()
      q.push(move);
      // console.log(`move: ${move} - q: ${q}`)
    }
    // 제거할 K가 가장 마지막에 가서 정답배열에 추가 
    const removeVal = q.pop()
    answer.push(removeVal);
    // console.log(`removeVal: ${removeVal} - answer: ${answer}`)
  }
console.log('<' + answer.join(', ') + '>');
})
