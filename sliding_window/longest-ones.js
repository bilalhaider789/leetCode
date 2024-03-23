// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]


const longestOnes = (A, K) =>{
    let left = 0, right = 0;
    
    while(right < A.length) {
        if(A[right] === 0) K--;
        if(K < 0) {
            if(A[left] === 0) K++;
            left++;
        }
        right++;
    }
    return right-left;
};


console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));