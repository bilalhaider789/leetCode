// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3

var uniquePaths = function(m, n) {
    let paths = 0
    let endRow =m-1;
    let endCol =n-1;
    function recusive(row,col){
      if (row == endRow && col == endCol) {
        paths++;
        return;
      }
      let nextRow = row + 1;
      let nextCol = col + 1;
      if (nextRow <= endRow && col <= endCol) {
        recusive(nextRow, col);
      }
      if (row <= endRow && nextCol <= endCol) {
        recusive(row, nextCol);
      }
    }
    recusive(0,0)
    return paths;
};

console.log(uniquePaths(1,1));
console.log(uniquePaths(3,7));
