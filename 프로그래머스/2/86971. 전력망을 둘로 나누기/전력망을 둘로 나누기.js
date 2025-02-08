function solution(n, wires) {
    // 트리 구조를 인접 리스트로 표현
    const graph = Array.from({ length: n + 1 }, () => []);

    // 그래프 초기화
    for (const [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    let minDifference = Infinity;

    // DFS 함수 정의
    function dfs(node, parent) {
        let count = 1; // 현재 노드 카운트
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                count += dfs(neighbor, node); // 자식 노드 탐색
            }
        }
        return count; // 서브트리의 송전탑 개수 반환
    }

    // 각 전선을 끊어보며 최소 차이를 계산
    for (const [v1, v2] of wires) {
        // 전선 v1-v2를 끊었을 때 v1에 대한 서브트리 계산
        const subtreeSize = dfs(v1, v2); // v1을 기준으로 서브트리 크기
        const otherSize = n - subtreeSize; // 나머지 송전탑 개수
        minDifference = Math.min(minDifference, Math.abs(subtreeSize - otherSize)); // 차이 계산
    }

    return minDifference; // 최소 차이 반환
}