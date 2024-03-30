// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 

// Example 1:

// Input: 
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output: 
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.




const join = (arr1, arr2) =>{
    let ans = {};
    for(let i=0; i<arr1.length; i++) {
        ans[arr1[i].id] = arr1[i];
    }
    for(let i=0; i<arr2.length; i++) {
        if(ans[arr2[i].id]) {
            for(const key in arr2[i]) {
                ans[arr2[i].id][key] = arr2[i][key];
            }
        }
        else {
            ans[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(ans);
};