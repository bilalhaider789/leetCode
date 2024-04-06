
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

var findKthLargest = function(nums, k) {
    let largest = -Infinity;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] > largest) largest = nums[i];
    }
    
    const hash = {};
    
    for(let i=0;i<nums.length;i++){
        const diff = largest-nums[i];
        hash[diff] = (hash[diff] || 0) + 1;
    }
    
    let count = 0;
    let diff = 0;
    while(count<k){
        count += (hash[diff] || 0);
        diff++;
    }
    
    return largest - diff + 1;
};