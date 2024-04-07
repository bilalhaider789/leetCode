// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;
  let i, j;
  let arr = new Array(len1 + 1)
    .fill(null)
    .map(() => new Array(len2 + 1).fill(0));
  for (i = 1; i <= len1; i++) {
    for (j = 1; j <= len2; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      } else {
        arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
      }
    }
  }
  return arr[len1][len2];
};

console.log(longestCommonSubsequence("abcde","ace"));