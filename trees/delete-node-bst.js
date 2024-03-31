// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

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

const treeToArray = (root) => {
    if (!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null); // Add null for empty nodes
        }
    }
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
};


const deleteNode = (root, key) => {
    if (null === root) return null;

    if (root.val === key) {
        if (null === root.left && null === root.right) return null; 
        if (null !== root.left && null !== root.right) {
            let curr = root.right;
            while (curr.left) { curr = curr.left; }
            curr.left = root.left;
            return root.right;
        }
        if (null === root.left) { return root.right; }
        if (null === root.right) { return root.left; }
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
};

const root = buildTreeFromArray([5, 3, 6, 2, 4, null, 7], 0);
console.log(treeToArray(deleteNode(root, 3)));