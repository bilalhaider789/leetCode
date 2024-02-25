
const checkPalindrome =(word, low, high)=>{
    while(low >=0 && high < word.length){
        if(word[low]== word[high]){
            low--
            high++
        }
        else{
            break
        }
    }
    return [low, high]
}

const findLongestPalindrone =(word)=>{
    let start =0
    let end = 0;
    for (let i = 0; i < word.length; i++) {
        let [oddLow,oddHigh] = checkPalindrome(word, i-1, i+1)
        let [evenLow,evenHigh] = checkPalindrome(word, i, i+1)
        if(oddHigh-oddLow-2 > end-start ){
            start =oddLow+1
            end = oddHigh-1
        }
        if(evenHigh-evenLow-1 > end-start ){
            start =evenLow +1
            end = evenHigh -1
        }
    }
    console.log(word.slice(start, end + 1));   
}

console.log(findLongestPalindrone("my name is bilal. I am in a full stack developer")=="lal")
console.log(findLongestPalindrone("forrest")=="rr")
