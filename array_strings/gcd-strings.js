// Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// gcdOfStrings("ABCABC","ABC")=="ABC"
// gcdOfStrings("ABABAB","ABAB")=="AB"
// gcdOfStrings("LEET","CODE")==""

const isValid =(str1, str2)=>{
    let index= 0
    while (index < str1.length) {
        let word = str1.slice(index, index+str2.length)
        if(word!=str2){
            return false
        }
        index+= str2.length
    }
    return true
}


// if checking by length is not allowed
const gcdOfStrings = (str1, str2) =>{
    const minLength = Math.min(str1.length, str2.length)
    let gcd =""
    for (let i = minLength; i > 0 ; i--) {
        let checkingWord = str2.slice(0, i)
        if ( isValid(str1, checkingWord) && isValid(str2, checkingWord)){
            gcd = checkingWord
            break
        }
    }
    return gcd
};

// if checking of length is allowed
const gcdOfStringsByLength = (str1, str2) =>{
    if (str1 + str2 !== str2 + str1) return '';
    let minLength = Math.min(str1.length, str2.length);
    for (let i = minLength; i > 0; i --) {
        if ((str1.length % i === 0) && (str2.length % i === 0)) {
            return str1.substring(0, i);
        }
    }
    return i;
};

console.log(gcdOfStrings("ABCABC","ABC")=="ABC")
console.log(gcdOfStrings("ABABAB","ABAB")=="AB")
console.log(gcdOfStrings("LEET","CODE")=="")


console.log(gcdOfStringsByLength("ABCABC","ABC")=="ABC")
console.log(gcdOfStringsByLength("ABABAB","ABAB")=="AB")
console.log(gcdOfStringsByLength("LEET","CODE")=="")