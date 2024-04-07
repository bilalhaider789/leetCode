// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.


const eraseOverlapIntervals = (intervals) =>{
    intervals.sort((a,b)=> a[0]-b[0]);
    const newIntervals = [intervals[0]];
    let steps =0;
    for(let i=1; i<intervals.length; i++){
        const interval = intervals[i];
        const lastInterval = newIntervals[newIntervals.length - 1];
        if(interval[0]>=lastInterval[0] && interval[1]<=lastInterval[1]){
            newIntervals.pop();
            newIntervals.push(interval);
            steps++;
        }
        else if(interval[0]< lastInterval[1]){
            steps++;
        }else{
            newIntervals.push(interval);
        }
    }
    return steps
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]));
