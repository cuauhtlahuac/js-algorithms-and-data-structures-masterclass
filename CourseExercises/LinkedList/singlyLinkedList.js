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
	push = (val) => {
		// Create a new node using the value passed to the function
		const node = new Node(val)
		// If there is no head property on the list, set the head and tail to be the newly created node
		if (!this.head) {
			this.head = node; // head and tail share the same node 
			this.tail = this.head;
		} else {
			// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
			// take the current tail, take the next property and set that equal to the new node
			this.tail.next = node; // * here we add a new node to the next property of the current tail(it is a label of the node). This next was null, but now is equal to the new node
			// and then we have to update the tail
			this.tail = node; // * And here w assign the new node to the tail, so the next time that we save the new node in this.tail.next will gonna be the next property of this node
		}
		// Increment the length by one
		this.length++
		// Return the linked list
		return this;
	}
	pop = () => {
		// if empty do nothing
		if (!this.head) return;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
			this.length = 0;
		}

		let newTail = this.head;
		let current = newTail.next;

		while (current?.next != null) {
			newTail = newTail.next;
			current = current?.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		return current;
	}

	shift = () => {
		/* Removing a new node from the beginning of the Linked List! */

		// If there are no nodes, return undefined
		if (!this.head) return;

		// Store the current head property in a variable
		const currentHead = this.head;
		// Set the head property to be the current head's next property
		this.head = currentHead?.next;
		// Decrement the length by 1
		this.length--;
		// If head equals tail after the last shift
		if (this.head === this.tail) {
			this.tail = null;
		}

		// Return the value of the node removed
		return currentHead;
	}

	unshift = (val) => {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return this;
	}

	get = (position) => {
	// 	This function should accept an index
	// If the index is less than zero or greater than or equal to the length of the list, return null
	if(position < 0 || position >= this.length) {
		return null;
	}

	let currentNode = this.head;

	// Loop through the list until you reach the index and return the node at that specific index
	let index = 0
		while (index < position) {
			currentNode = currentNode.next;
			index++;
		}

		return currentNode;
	}

	set = (value, position) => {
		/* Changing the value of a node based on it's position in the Linked List */
		if(position < 0 || position >= this.length) {
			return null;
		}
	
		let currentNode = this.head;
	
		let index = 0;

		do {
			console.log('DO');
			console.log({index, position});
			currentNode = currentNode.next;
			index++;
		} while (index <= position) {
				console.log('WHILE');
				if(index === position - 1){
					currentNode.next = new Node(value);
					console.log({currentNode});
				}
			} 

		return this;
	}
}

let first = new SinglyLinkedList();
first.push('Hi');
first.push('There');
first.push('!');
const ndo = first.set('new Value', 2)
console.log(ndo)




