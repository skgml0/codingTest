function solution(maps) {
  // 행 
  const n = maps.length
  const m = maps[0].length
  
  const directions = [[1,0],[-1,0],[0,1],[0,-1]]
  // init
  const queue = [[0,0,1]] // row,, column, distance initialize 
  // 방문여부 확인 만들어야 함
  const visited = Array.from ({length: n},() => Array(m).fill(false))
  visited[0][0] = true

  while(queue.length){
      const [row, column, distance] = queue.shift();
      // 목적지 도착시 재귀종료 
      if(row===n-1 && column === m-1){return distance}
      
      for(const [dx,dy] of directions){
          const newRow = row + dx
          const newColumn = column + dy 
          
          if ( newRow >=0 && newRow <n && newColumn >=0 && newColumn <m && !visited[newRow][newColumn] && maps[newRow][newColumn]===1){
              visited[newRow][newColumn] = true
              queue.push([newRow,newColumn,distance+1])
          }
      }
  }

  return -1
}