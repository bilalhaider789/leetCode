// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

var solveNQueens = function(n) {
    var chessBoard = new Array(n);
    for(var i = 0; i < n; i++) {
        chessBoard[i] = new Array(n).fill(".");
    }
    
    var result = [];
    
    var isValidQueen = function(row, col) {
        for(let i = 0; i < row; i++) {
            if(chessBoard[i][col] === "Q") return false;
        }
        for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if(chessBoard[i][j] === "Q") return false;
        }
        for(let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
            if(chessBoard[i][j] === "Q") return false;
        }
        return true;
    }
    
    var backtrack = function(row) {

        if(row === n) {
            result.push([...chessBoard].map(row => row.join('')));
            return;
        }
        for(var col = 0; col < n; col++) {
            if(isValidQueen(row, col)) {
                chessBoard[row][col] = "Q";
                backtrack(row + 1);
                chessBoard[row][col] = ".";
            }
        }
    }
    backtrack(0);
    return result;
};
console.log(solveNQueens(4));