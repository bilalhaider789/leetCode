// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.

 

// Example 1:


// Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// Output: 3
// Explanation: Longest ZigZag path in blue nodes (right -> left -> right).





const longestZigZag = (root)=> {
    let max = 0;
    
    const helper = (node, prev, length) => {
    
        if(node === null)
            return null;
        
        max = Math.max(max, length);
        
        helper(node.left, "l" , prev === "r" ? length + 1 : 1);
        helper(node.right, "r" , prev === "l" ? length + 1 : 1);
    }
    
    
    helper(root, "l", 0); 
    helper(root, "r", 0);
    
    return max;
};