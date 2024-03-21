// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that 
// i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.


// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

const increasingTriplet =(nums)=>{
    let max = -Number.MAX_VALUE, mx2 = -Number.MAX_VALUE
    for (let i = nums.length - 1; i >= 0; i--) {
        let count = 0
        max = Math.max(max, nums[i])
        mx2 = max > nums[i] ? Math.max(nums[i], mx2) : mx2
        if (max > nums[i]) count++
        if (mx2 > nums[i]) count++
        if (count > 1) return true
    }
    return false
}

