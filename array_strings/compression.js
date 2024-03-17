// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 
const compress = (chars) =>{
    let result= [];
    let current= null
    let count=1
    for(const char of chars){
        
        if(char!=current && current==null){
            current=char
            continue
        }
        
        if(char==current){
            count++
        }
        if(char!==current){
            result.push(current,count)
            current=char
            count=1
        }
        
    }
    console.log(result);

    
};

console.log(compress(["a","a","b","b","c","c","c"]));