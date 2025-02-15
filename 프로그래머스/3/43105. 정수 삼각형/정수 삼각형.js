function solution(triangle) {
    const memo = Array.from({ length: triangle.length }, 
        (_, i) => new Array(i + 1).fill(-1));
    
    function dfs(row, col) {
        if (row === triangle.length - 1) return triangle[row][col];
        if (memo[row][col] !== -1) return memo[row][col];
        
        memo[row][col] = triangle[row][col] + 
            Math.max(dfs(row + 1, col), dfs(row + 1, col + 1));
        return memo[row][col];
    }
    
    return dfs(0, 0);
}