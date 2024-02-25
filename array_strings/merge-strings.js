const mergeAlternately = function(word1, word2) {
    let newWord = ""
    const word1Length = word1.length
    const word2Length = word2.length
    let minLength = word1.length < word2.length ? word1.length : word2.length
    for (let i = 0; i < minLength; i++) {
        newWord = newWord + word1[i] + word2[i];
    }
    if(minLength != word1Length) {
        for (let i = minLength; i < word1Length; i++) {
            newWord = newWord + word1[i];
        }
    }else if(minLength != word2Length) {
        for (let i = minLength; i < word2Length; i++) {
            newWord = newWord + word2[i];
        }
    }
    return newWord
};

console.log(mergeAlternately("abc","deffff"));