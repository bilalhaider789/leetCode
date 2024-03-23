// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

const maxVowels = (s, k)=> {
    let maxCount=0,count=0;
    const vowel=['a',"e", "i", "o", "u"]
    for(let i=0;i<s.length;i++)
    {
        if(vowel.includes(s[i]))   count++

        if(i>=k && vowel.includes(s[i-k])) count--

        if(count==k)
        return k;

        if(maxCount<count)
        maxCount=count
    }
    return maxCount
};

console.log(maxVowels("aeiou", 2));
console.log(maxVowels("abciiidef", 3));

