
// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

 

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.

const maxOperations =  (nums, k)=> {
    nums.sort((a,b)=>a-b)
    let res=0
    let left=0
    let right =nums.length-1
    while(left<right){
        let sum =nums[left]+nums[right]
        if(sum<k){
            left++
        }else if(sum>k){
            right--
        }else{
            res++
            left++
            right--
        }
    }
    return res
};