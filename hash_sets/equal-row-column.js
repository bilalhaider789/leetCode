// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

// Example 1:


// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

const equalPairs = (grid) => {
    rowMap = {};
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
        const key = JSON.stringify(grid[r]);
        rowMap[key] = (rowMap[key] || 0) + 1;
    }
    for (let r = 0; r < grid.length; r++) {
        const col = [];
        for (let c = 0; c < grid[0].length; c++) {
            col.push(grid[c][r]);
        }
        const key = JSON.stringify(col);
        if (key in rowMap) count += rowMap[key];
    }
    return count;
};
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
