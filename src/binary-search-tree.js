const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

/*
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
      return this.root;

  }

  add(value) {
    this.root = addWithin(this.root, value);

    function addWithin(node, value) {
      if(!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(value) {
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(value) {
  }

  min() {

  }

  max() {

  }
}

module.exports = {
  BinarySearchTree
};