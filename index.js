class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// class representing Binary Search Tree
class BST {
  constructor() {
    this.root = null;
  }

  // function to initialize BST with node
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  // function to perform insertion on BST
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  // helper method to call removeNode()
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // function to remove given node from BST
  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // no child node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // one child node
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.right;
        return node;
      }
      // two child node
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
}
