// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:


// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true
// Example 2:


// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false


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

const leafs = (root)=>{
    if(!root){
        return [];
    }
    if(root && !root.left && !root.right){
        return [root.val];
    }
    const left= leafs(root.left);
    const right= leafs(root.right);
    return [...left,...right]
}
const leafSimilar =(root1, root2)=>{
    const leaves1 = leafs(root1);
    const leaves2 = leafs(root2);
    if(leaves1.length != leaves2.length){
        return false
    }
    for(let i=0; i < leaves1.length; i++) {
        if(leaves1[i]!== leaves2[i]){
            return false
        }
    }
    return true
}

const root1 = buildTreeFromArray([3,5,1,6,2,9,8,null,null,7,4], 0);
const root2 = buildTreeFromArray([3,5,1,6,7,4,2,null,null,null,null,null,null,9,8], 0);

console.log(leafSimilar(root1,root2));