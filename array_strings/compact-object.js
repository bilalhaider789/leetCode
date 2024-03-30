// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.

const compactObject = (obj)=> {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject)
    }
    let map = {}
    for(const key in obj){
        let value = obj[key]
        if(value){
            map[key] = typeof value === 'object' ? compactObject(value) : value;
        }
    }
    return map
}