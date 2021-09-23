class Node {
  constructor(val) {
    // piece of data - val
    this.val = val;
    // reference to next node - next
    this.next = null;
  }
}

let first = new Node("Hi")
first.next = new Node("how")
first.next.next = new Node("are")
first.next.next = new Node("you")

console.log(first);