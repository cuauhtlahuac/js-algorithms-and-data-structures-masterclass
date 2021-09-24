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
		if(!this.head){
			this.head = node; // head and tail share the same node 
			this.tail = this.head;
		} else {
			// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
			// take the current tail, take the next property and set that equal to the new node
			this.tail.next = node; // * here we add a new node to the next property of the current tail(it is a label of the node)
			// and then we have to update the tail
			this.tail = node;
		}
		// Increment the length by one
		this.length++
		// Return the linked list
		return this;
	}
}

let first = new SinglyLinkedList();
first.push('what');
first.push('are');
first.push('fking');
first.push('happen');
first.push('here');
console.log(first.head);
console.log(first.head.next);
console.log(first.head.next?.next);
console.log(first.head.next?.next?.next);
console.log(first.head.next?.next?.next?.next);
console.log(first);
