// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

const decodeString = (s)=> {
    let stack=[],
        currStr='',
        currDig=0

    for(let i of s){
        if(i==='['){
            stack.push(currStr)
            stack.push(currDig)
            currStr=''
            currDig=0
        }
        else if(i===']'){
            let prevDig=stack.pop()
            let prevStr=stack.pop()
            currStr=prevStr+currStr.repeat(prevDig)
        }
        else if(!isNaN(i)){
            currDig=currDig*10+parseInt(i)
        }
        else{
            currStr+=i
        }
        
    }
    return currStr
};

console.log(decodeString("3[a]2[bc]"));