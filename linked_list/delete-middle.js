// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 

// Example 1:


// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node. 
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



const deleteMiddle = (head) =>{
    let mainPointer = head
    let fastPointer = head
    let slowPointer =  null;
    while (fastPointer?.next) {
        slowPointer= mainPointer
        mainPointer = mainPointer.next
        fastPointer = fastPointer.next.next
    }
    if(slowPointer){
        slowPointer.next = mainPointer.next;
    }
    else{
        return null
    }
    return head
};

let head = createListFromArray([1,3,4,7,1,2,6])
printList(head)
printList(deleteMiddle(head))