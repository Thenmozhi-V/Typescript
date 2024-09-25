"use strict";
class Stack {
    constructor() {
        this.items = []; // Private array to hold stack elements
    }
    // Push method to add an element to the stack
    push(item) {
        this.items.push(item);
    }
    // Pop method to remove the top element from the stack
    pop() {
        return this.items.pop();
    }
    // Peek method to view the top element without removing it
    peek() {
        return this.items[this.items.length - 1];
    }
    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Method to get the size of the stack
    size() {
        return this.items.length;
    }
}
// Example usage:
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.peek()); // Output: 20
console.log(numberStack.pop()); // Output: 20
console.log(numberStack.size()); // Output: 1
const stringStack = new Stack();
stringStack.push("hello");
stringStack.push("welcome...(^,^)");
console.log(stringStack.peek()); // Output: world
console.log(stringStack.pop()); // Output: world
console.log(stringStack.size()); // Output: 1
