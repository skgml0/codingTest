function solution(maps) {
    const n = maps.length;        // 행의 수
    const m = maps[0].length;     // 열의 수
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 남, 북, 동, 서 방향
    const queue = [[0, 0, 1]];    // [행, 열, 거리]
    const visited = Array.from({ length: n }, () => Array(m).fill(false)); // 방문 여부 초기화
    visited[0][0] = true;          // 시작점 방문 처리

    while (queue.length) {
        const [x, y, distance] = queue.shift(); // 큐에서 현재 위치와 거리 꺼내기

        // 도착점에 도착했을 때
        if (x === n - 1 && y === m - 1) {
            return distance; // 거리 반환
        }

        // 네 방향으로 이동
        for (const [dx, dy] of directions) {
            const nx = x + dx; // 새로운 행
            const ny = y + dy; // 새로운 열

            // 맵 범위와 벽 체크
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true; // 방문 처리
                queue.push([nx, ny, distance + 1]); // 큐에 추가
            }
        }
    }

    return -1; // 도착할 수 없는 경우
}