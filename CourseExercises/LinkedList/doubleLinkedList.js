// NODE
class Node {
	constructor(val) {
		// - val
		this.val = val;
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

	push = (value) => {
		// Create a new node with the value passed to the function
		const currentNode = new Node(value);
		// If the head property is null set the head and tail to be the newly created node
		if(this.head === null){
			this.head = currentNode;
			this.tail = currentNode;
			this.length++;
			return this;
		}
		// If not, set the next property on the tail to be that node
		this.tail.next = currentNode;
		// Set the previous property on the newly created node to be the tail
		currentNode.prev = this.tail;
		// Set the tail to be the newly created node
		this.tail = currentNode;
		// Increment the length
		this.length++;
		// Return the Doubly Linked List
		return this;
	}
}

const doublell = new DoublyLinkedList();

doublell.push('Hola');
doublell.push('second');
doublell.push('Third');
doublell.push('last');
console.log(doublell.head);
console.log(doublell.tail);