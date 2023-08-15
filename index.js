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
}
