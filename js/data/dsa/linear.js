export const LINEAR_DATA = {
  category: "Linear Data Structures",
  icon: "📏",
  items: [
    {
      name: "Arrays",
      description: "A collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value.",
      complexity: {
        time: "O(1) Access, O(n) Search/Insertion/Deletion",
        space: "O(n)"
      },
      code: `// Arrays in JavaScript are dynamic by default
let arr = [10, 20, 30];
arr.push(40); // Insert at end: O(1)
arr.unshift(5); // Insert at beginning: O(n)
let val = arr[2]; // Access by index: O(1)`
    },
    {
      name: "Linked List (Singly & Doubly)",
      description: "A linear data structure where elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In a Singly Linked List, each node points to the next node. In a Doubly Linked List, each node points to both the next and the previous node.",
      image: "assets/dsa/linked_list.svg",
      complexity: {
        time: "O(n) Access/Search, O(1) Insertion/Deletion (if node is known)",
        space: "O(n)"
      },
      code: `class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertAtHead(val) {
    let newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }
}`
    },
    {
      name: "Stack",
      description: "A linear data structure which follows a particular order in which the operations are performed. The order may be LIFO (Last In First Out) or FILO (First In Last Out). Main operations are push(), pop(), and peek(). Used in function call stacks, undo mechanisms, and parsing.",
      complexity: {
        time: "O(1) for push, pop, and peek",
        space: "O(n)"
      },
      code: `class Stack {
  constructor() { this.items = []; }
  
  push(element) { this.items.push(element); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}`
    },
    {
      name: "Queue",
      description: "A linear structure which follows the First In First Out (FIFO) order. Main operations are enqueue() and dequeue(). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.",
      complexity: {
        time: "O(1) for enqueue and dequeue (with proper implementation)",
        space: "O(n)"
      },
      code: `// Note: Using JS array shift() is O(n). 
// A real O(1) queue uses pointers.
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
}`
    }
  ]
};
