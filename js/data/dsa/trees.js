export const TREES_DATA = {
  category: "Tree Data Structures",
  icon: "🌳",
  items: [
    {
      name: "Binary Tree",
      description: "A tree data structure in which each node has at most two children, which are referred to as the left child and the right child. It is used to implement binary search trees and binary heaps.",
      complexity: {
        time: "O(n) for traversal",
        space: "O(n) worst case auxiliary space"
      },
      code: `class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// In-order traversal (Left, Root, Right)
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.val);
    inOrder(node.right);
  }
}`
    },
    {
      name: "Binary Search Tree (BST)",
      description: "A node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. The left and right subtree each must also be a binary search tree.",
      image: "assets/dsa/bst.svg",
      complexity: {
        time: "O(log n) average, O(n) worst case (unbalanced)",
        space: "O(n)"
      },
      code: `class BST {
  constructor() { this.root = null; }
  
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) { this.root = newNode; return; }
    
    let curr = this.root;
    while (true) {
      if (val === curr.val) return; // no duplicates
      if (val < curr.val) {
        if (!curr.left) { curr.left = newNode; return; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = newNode; return; }
        curr = curr.right;
      }
    }
  }
}`
    },
    {
      name: "AVL Tree",
      description: "A self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes. Whenever an insertion or deletion breaks this property, tree rotations (Left, Right, Left-Right, Right-Left) are performed to rebalance it.",
      complexity: {
        time: "O(log n) strictly for search, insert, and delete",
        space: "O(n)"
      },
      code: `// Conceptual Rotation Example (Right Rotation)
function rightRotate(y) {
  let x = y.left;
  let T2 = x.right;

  // Perform rotation
  x.right = y;
  y.left = T2;

  // Update heights
  y.height = Math.max(height(y.left), height(y.right)) + 1;
  x.height = Math.max(height(x.left), height(x.right)) + 1;

  return x; // new root
}`
    },
    {
      name: "Trie (Prefix Tree)",
      description: "A tree-like data structure used to store a dynamic set or associative array where the keys are usually strings. Unlike a BST, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. Great for autocomplete and spell-checkers.",
      complexity: {
        time: "O(m) where m is length of the string",
        space: "O(ALPHABET_SIZE * key_length * N)"
      },
      code: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() { this.root = new TrieNode(); }
  
  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }
}`
    }
  ]
};
