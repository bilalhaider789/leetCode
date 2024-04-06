// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.


const combinationSum3 = (k, n)=> {
    const res = [];
    const nums = [];

    for (let i = 1; i < 10; i++) {
        nums.push(i);
    }

    function backtrack(cur, index, sum) {
        if (cur.length === k && sum === n) {
            res.push([...cur]);
        }

        if (cur.length >= k) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            cur.push(nums[i]);
            backtrack(cur, i + 1, sum + nums[i]);
            cur.pop();
        }
    }

    backtrack([], 0, 0);
    return res;
};