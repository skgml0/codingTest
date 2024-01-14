process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [width, height] = data.split(' ');
  const init = '*';
  const widthStr = init.repeat(width);

  for (i = 0; i < height; i++) {
    console.log(widthStr);
  }
});
/*  처음 시도, 배열 이용 코드
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const widthSum = [];
  const [width, height] = data.split(' ');
  for (j = 0; j < width; j++) {
    widthSum.push('*');
  }
  for (i = 0; i < height; i++) {
    const arr = widthSum.join('');
    console.log(arr);
  }
});
*/

/* 가장 간결한 코드
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const [width, height] = data.split(' ');
  const init = '*';
  const answerStr = (init.repeat(width) + `\n`).repeat(height);

  console.log(answerStr);
});
*/
