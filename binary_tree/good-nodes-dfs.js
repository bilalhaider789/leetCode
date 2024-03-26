
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

 

// Example 1:



// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.


const goodNodes = (root)=> {
    return count(root, Number.NEGATIVE_INFINITY);
};

const count = (root, maxVal)=> {
    if(root == null) return 0;

    if(root.val >= maxVal) 
        return (1 + count(root.left, root.val) + count(root.right, root.val));
    else return (count(root.left, maxVal) + count(root.right, maxVal));
}