// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.

// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

// Example 1:

// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6. 


const printList=(head)=> {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    process.stdout.write("null\n");
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const createListFromArray=(arr)=> {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

const pairSum = (head) =>{
    if(!head) return 0;
    let temp = head;
    let count = 0;
    while(temp) {
        count++;
        temp = temp.next;
    }
    const totalLen = count;
    const mid = Math.floor(count / 2);
    count = 0;
    temp = head;
    const arr = [];
    while(count < mid) {
        arr.push(temp.val);
        temp = temp.next;
        count++;
    }
    let max = arr[0];
    while(temp) {
       const index = totalLen - 1 - count;
        arr[index] += temp.val;
        max = arr[index] > max ? arr[index] : max;
        temp = temp.next;
        count++;
    }
    return max;
};

let head = createListFromArray([1,2,3,4,5,8])
printList(head)
console.log(pairSum(head))