function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b); // 바위 정렬
    let left = 1; // 최소 거리
    let right = distance; // 최대 거리
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0; // 제거할 바위 개수

        let lastPosition = 0; // 마지막 위치
        for (let rock of rocks) {
            if (rock - lastPosition < mid) {
                count++; // 바위를 제거해야 함
            } else {
                lastPosition = rock; // 현재 바위 위치로 업데이트
            }
        }

        // 마지막 바위와 도착지점 사이의 거리 체크
        if (distance - lastPosition < mid) {
            count++;
        }

        if (count <= n) {
            answer = mid; // 최소 거리 가능
            left = mid + 1; // 더 큰 거리 탐색
        } else {
            right = mid - 1; // 더 작은 거리 탐색
        }
    }

    return answer;
}
