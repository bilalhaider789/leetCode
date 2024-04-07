var maxSlidingWindow = function (nums, k) {
    const res = [];
    const q = [];     const n = nums.length;
    for (let i = 0; i < n; i++) {
      while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
        q.pop();
      }
      q.push(i);
  
      if (q[0] <= i - k) {
        q.shift();
      }
  
      if (i >= k - 1) {
        res.push(nums[q[0]]);
      }
    }
    return res;
  };

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));
console.log(maxSlidingWindow([1],1));
