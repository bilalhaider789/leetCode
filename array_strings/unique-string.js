
const findLongest=(word)=>{
    let longest = ""
    for (let i = 0; i < word.length; i++) {
        const visited=[]
        for(let j= i; j< word.length; j++) {
            if(!visited.includes(word[j])){
                visited.push(word[j])
            }
        }
        if(visited.length> longest.length){
            longest= visited.join('')
        }
    }
    return longest
}

console.log(findLongest("aaabcabcdefaa")=="abcdef")
console.log(findLongest("bilal")=="bila")

