// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

var dailyTemperatures = function(temperatures) {
    let stack = [];
    for (let i = 0; i <temperatures.length; i++) {
        let current =temperatures[i];
        let jump=1;
        let found = false;
        while(i+jump<temperatures.length){
            if(temperatures[i+jump] <= current){
                jump++;
            }
            else{
                found = true;
                break;
            }
        }
        if(found){
            stack.push(jump);
        }else{
            stack.push(0)
        }
    }
    return stack;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));


