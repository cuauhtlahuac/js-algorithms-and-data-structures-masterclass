// NODE
class Node {
	constructor(val) {
		// - val
		this.val;
		// - next
		this.next = null;
		// - prev
		this.prev = null;
	}
}

// Doubly Linked List
class DoublyLinkedList {
	constructor() {
		// - head
		this.head = null;
		// - tail
		this.tail = null;
		// - length
		this.length = 0;
	}

	push = () => {
		// Create a new node with the value passed to the function
		// If the head property is null set the head and tail to be the newly created node 
		// If not, set the next property on the tail to be that node
		// Set the previous property on the newly created node to be the tail
		// Set the tail to be the newly created node
		// Increment the length
		// Return the Doubly Linked List
	}
}
