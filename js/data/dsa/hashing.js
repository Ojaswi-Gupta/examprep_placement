export const HASHING_DATA = {
  category: "Hashing & Maps",
  icon: "🔑",
  items: [
    {
      name: "Hash Table (Hash Map)",
      description: "A data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.",
      complexity: {
        time: "O(1) average for search, insert, and delete. O(n) worst case (collisions).",
        space: "O(n)"
      },
      code: `// Using JS native Map
let map = new Map();
map.set('user_1', { name: 'Alice', age: 25 });
map.set('user_2', { name: 'Bob', age: 30 });

console.log(map.get('user_1').name); // 'Alice'
console.log(map.has('user_3')); // false
map.delete('user_2');`
    },
    {
      name: "Collision Resolution (Chaining)",
      description: "When a hash function maps two different keys to the same index (a collision), chaining handles it by making each cell of the hash table point to a linked list of records that have the same hash function value.",
      code: `class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.buckets.length;
  }

  set(key, value) {
    let index = this._hash(key);
    let bucket = this.buckets[index];
    
    // Check if key already exists, update it
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    // Else, chain it (push to bucket array)
    bucket.push([key, value]);
  }
}`
    }
  ]
};
