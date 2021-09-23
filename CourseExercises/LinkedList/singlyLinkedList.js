class Node {
	constructor(val) {
		// piece of data - val
		this.val = val;
		// reference to next node - next
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		// We need a tail, a head and a length
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		// This function should accept a value
		// Create a new node using the value passed to the function
		// If there is no head property on the list, set the head and tail to be the newly created node
		// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
		// Increment the length by one
		// Return the linked list
	}
}

let first = new SinglyLinkedList();
first.push('how');
first.push('are');
first.push('you');
console.log(first);
