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

	/* Changing the value of a node based on it's position in the Linked List */
	set = (value, position) => {
	// This function should accept a value and an index
	// Use your get function to find the specific node.
		const foundNode = this.get(position);
		// If the node is found, set the value of that node to be the value passed to the function and return true
		if(foundNode){
			foundNode.val = value;
			return true;
		}
		// If the node is not found, return false
		return false;
	}


	insert = (value, position) => {
		// Adding a node to the Linked List at a specific position

		if (position < 0 || position > this.length) return false;

		if (position === 0) return !!this.unshift(value); // double bangs! to get boolean value

		if (position === this.length) return !!this.push(value);			
		
		const newNode = new Node(value);
		let prev = this.get(position - 1); // we want to insert just before the index given because it will substitute its position;
		let temp = prev.next; // here we save the node to avoid the lost of 'next' data
		prev.next = newNode; // then here we paste the value of new node into the previous node
		newNode.next = temp; // Finally here we paste the values saved for the all the next values 

		this.length++;
		return true;
	}

	delete(position){

		// If the index is less than zero or greater than the length, return undefined
		if (position < 0 || position > this.length) return;
		// If the index is the same as the length-1, pop
		if (position === this.length - 1) return !!this.pop(position);
		// If the index is 0, shift
		if (position === 0) return !!this.shift(position);

		// Otherwise, using the get method, access the node at the index - 1
		const prev = this.get(position - 1);
		// Set the next property on that node to be the next of the next node
		prev.next = prev.next.next;
		// Decrement the length
		this.length--;
		// Return the value of the node removed
		return prev;
	}

	printEachNode(){
		let current = this.head;

		for (let i = 0; i < this.length; i++) {
			console.log({[i]: current});
			current = current.next
		}
	}
}

let first = new SinglyLinkedList();
first.push('Head'); // 0
first.push('Next'); // 1
first.push('Next2'); // 1
first.push('Tail'); // 2
first.delete(1) // delete next
console.log({first})
first.printEachNode();
