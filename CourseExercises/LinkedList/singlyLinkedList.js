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

	// This function should accept a value
	push(val) {
		// Create a new node using the value passed to the function
		const node = new Node(val)
		// If there is no head property on the list, set the head and tail to be the newly created node
		if(!this.tail && !this.head){
			this.tail = node;
			this.head = node;
		} else{
			// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
			this.tail.next = this.tail;
			this.tail = node;
		}
		// Increment the length by one
		this.length++
		// Return the linked list
		return SinglyLinkedList;
	}
}

let first = new SinglyLinkedList();
first.push('how');
first.push('are');
first.push('you');
console.log(first);
