function solution(n, computers) {
    const visited = Array(n).fill(false); // 방문한 컴퓨터를 기록하는 배열
    let networkCount = 0; // 네트워크 개수

    // DFS 함수 정의
    function dfs(current) {
        visited[current] = true; // 현재 컴퓨터를 방문 처리
        for (let i = 0; i < n; i++) {
            // 연결된 컴퓨터이면서 방문하지 않은 경우
            if (computers[current][i] === 1 && !visited[i]) {
                dfs(i); // 다음 컴퓨터로 DFS 재귀 호출
            }
        }
    }

    // 모든 컴퓨터를 탐색
    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 방문하지 않은 컴퓨터라면
            dfs(i); // DFS 호출
            networkCount++; // 하나의 네트워크가 완성됨
        }
    }

    return networkCount; // 네트워크 개수 반환
}
