
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    let start = 0, end = 0, longestLen = 0;
    const chars = new Set();
 
    while(end < s.length) {
     if(chars.has(s[end])) {
         chars.delete(s[start]);
         start++;
     } else {
         chars.add(s[end]);
         end++;
         longestLen = Math.max(end - start, longestLen);
     }
    }
    return longestLen;
 };
console.log(lengthOfLongestSubstring("aaabcabcdefaa")=="abcdef")
console.log(lengthOfLongestSubstring("bilal")=="bila")