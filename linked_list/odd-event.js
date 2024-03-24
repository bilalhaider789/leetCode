// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

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



const oddEvenList = (head) =>{
   if(!head || !head?.next){
    return head
   }

    let odd = head;
   let even=head.next;
   let evenStart = even;
   while(odd?.next && even?.next){
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
   }
   odd.next= evenStart;
   return head;
};

let head = createListFromArray([1,2,3,4,5])
printList(head)
printList(oddEvenList(head))