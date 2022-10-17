const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenght = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(newValue) {
    let newNode = new ListNode(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.lenght ++ ;
  }

  dequeue() {
    let current = this.head;
    this.head = current.next;
    this.lenght-- ;
    return current.value;
  }
}

const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.dequeue(); // returns the top element from queue and deletes it, returns 1
queue.getUnderlyingList() // returns { value: 3, next: null }


module.exports = {
  Queue
};
