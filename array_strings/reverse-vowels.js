const reverseVowels = function(s) {
    const vowels = ["a","e","i","o","u","A","E","I","O","U"]
    const vowelsArray = []
    let newString=[]
    for(let i = 0; i< s.length; i++){
        if(vowels.includes(s[i])){
            vowelsArray.push(s[i])
        }
        newString.push(s[i])
    }
    for(let i = 0; i< newString.length; i++){
        if(vowels.includes(newString[i])){
            newString[i]= vowelsArray.pop()
        }
    }
    return(newString.join(""))
};

console.log(reverseVowels("leetcode"))