const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.stack = [];
}
  push(element) {
    this.stack.push(element);
  }

  pop() {
    let current = this.stack[this.stack.length-1];
    this.stack.pop();
    return current;
  }

  peek() {
    return this.stack[this.stack.length-1];
  }
}

const stack = new Stack();

stack.push(1); // adds the element to the stack
stack.peek(); // returns the peek, but doesn't delete it, returns 1
stack.pop(); // returns the top element from stack and deletes it, returns 1
stack.pop(); // undefined


module.exports = {
  Stack
};
