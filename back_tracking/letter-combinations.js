// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []

const mappings = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

const letterCombinations = (string)=> {
    let len = string.length, ans = []
    if (!len) return []
    const dfs = (position, str) => {
        if (position === len) ans.push(str)
        else {
            let letters = mappings[string[position]]
            for (let i = 0; i < letters.length; i++)
                dfs(position + 1, str + letters[i]);
        }
    }
    dfs(0,"")
    return ans
};

console.log(
  JSON.stringify(letterCombinations("23")) ==
    JSON.stringify(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
);