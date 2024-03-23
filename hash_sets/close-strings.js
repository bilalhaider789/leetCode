// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"

const closeStrings = (word1, word2) =>{
    const countChar = str => {
        const map = new Map();
        for (const char of str.split('')) map.set(char, (map.get(char) || 0) + 1);

        return map;
    }

    const count1 = countChar(word1);
    const count2 = countChar(word2);

    const c1Keys = [...count1.keys()].sort(), c2Keys = [...count2.keys()].sort();
    // console.log(c1Keys, c2Keys);
    if (c1Keys.join('') !== c2Keys.join('')) return false;

    const c1Val = [...count1.values()].sort((a,b) => a-b), c2Val = [...count2.values()].sort((a,b) => a-b);
    // console.log(c1Val, c2Val);
    return (c1Val.join('') === c2Val.join(''));
};