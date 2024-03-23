
// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

const longestSubarray = (nums)=> {
    if(nums.length<=1) return 0
    let count = 0;
    let array = []
    for(let i = 0;i<nums.length;i++){
        if(nums[i]==1){
            count++
        }else {
            array.push(count)
            count = 0
        }
    }
    if(count>0){
        array.push(count)
    }
    if(nums.length === count) return count-1

    let result = array[0]+array[1]
    for(let j=1;j<array.length-1;j++){
        if(array[j]+array[j+1] > result){
            result = array[j]+array[j+1] 
        }
    }

    return result
};

