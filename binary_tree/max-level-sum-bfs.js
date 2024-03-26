// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

// Example 1:


// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2
 

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const buildTreeFromArray=(arr, index)=> {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }
    const root = new TreeNode(arr[index]);
    // Recursively build the left and right subtrees
    root.left = buildTreeFromArray(arr, 2 * index + 1); // Left child index: 2 * parent index + 1
    root.right = buildTreeFromArray(arr, 2 * index + 2); // Right child index: 2 * parent index + 2
    
    return root;
}

const maxLevelSum= (root)=>{
    let queue = [root];
    let max = -Infinity;
    let maxLevel,level=0;
    while (queue.length){
        let size= queue.length;
        let sum=0;
        level+=1;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            sum+=node.val;
        }
        console.log(sum);
        if(sum>max){
            max=sum;
            maxLevel=level;
        }
    }
    return maxLevel;
}

// const root = buildTreeFromArray([1,7,0,7,-8,null,null],0);
const root = buildTreeFromArray([1],0);
// console.log(root);
console.log(maxLevelSum(root))