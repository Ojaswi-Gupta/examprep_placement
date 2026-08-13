export const javaDataStructures = [
  {
    keyword: "List (ArrayList & LinkedList)",
    meaning: "Ordered collections that allow duplicates. ArrayList is backed by an array (fast random access O(1)). LinkedList is backed by nodes (fast insertions/deletions O(1)).",
    example: `List<Integer> list = new ArrayList<>();
list.add(10);        // Adds element to end
list.add(0, 5);      // Inserts 5 at index 0
list.get(1);         // Returns element at index 1
list.set(1, 20);     // Replaces element at index 1
list.remove(0);      // Removes element at index 0
list.size();         // Returns number of elements
list.contains(20);   // Returns true if 20 is present`
  },
  {
    keyword: "Set (HashSet & TreeSet)",
    meaning: "Unordered collections that do not allow duplicates. HashSet is backed by a HashMap (O(1) access). TreeSet is sorted (O(log n) access).",
    example: `Set<String> set = new HashSet<>();
set.add("Apple");    // Adds element, returns true if new
set.add("Apple");    // Returns false, no duplicates
set.contains("Apple"); // Checks if element exists
set.remove("Apple"); // Removes the element
set.isEmpty();       // Checks if set is empty
set.size();          // Returns size`
  },
  {
    keyword: "Map (HashMap & TreeMap)",
    meaning: "Key-value pairs. HashMap provides O(1) time complexity for get/put. TreeMap is sorted by keys O(log n).",
    example: `Map<String, Integer> map = new HashMap<>();
map.put("Alice", 25);     // Adds key-value pair
map.get("Alice");         // Returns 25
map.getOrDefault("Bob", 0); // Returns 0 if key not found
map.containsKey("Alice"); // Checks if key exists
map.containsValue(25);    // Checks if value exists
map.remove("Alice");      // Removes key-value pair
map.keySet();             // Returns a Set of all keys
map.values();             // Returns a Collection of all values`
  },
  {
    keyword: "Queue (LinkedList)",
    meaning: "FIFO (First-In-First-Out) data structure. Typically implemented using LinkedList.",
    example: `Queue<Integer> queue = new LinkedList<>();
queue.offer(10);     // Adds to tail (returns false if full)
queue.add(20);       // Adds to tail (throws exception if full)
queue.peek();        // Returns head without removing (null if empty)
queue.poll();        // Retrieves and removes head (null if empty)
queue.remove();      // Retrieves and removes head (throws exception if empty)`
  },
  {
    keyword: "Deque (ArrayDeque)",
    meaning: "Double Ended Queue. Allows insertion and removal at both ends. Can be used as a Stack or Queue. Faster than Stack/LinkedList.",
    example: `Deque<Integer> deque = new ArrayDeque<>();
deque.offerFirst(10); // Adds to front
deque.offerLast(20);  // Adds to end
deque.peekFirst();    // Looks at front
deque.peekLast();     // Looks at end
deque.pollFirst();    // Removes from front
deque.pollLast();     // Removes from end`
  },
  {
    keyword: "Stack",
    meaning: "LIFO (Last-In-First-Out) data structure. Extends Vector (synchronized, slower). Consider using ArrayDeque instead.",
    example: `Stack<Integer> stack = new Stack<>();
stack.push(10);      // Pushes onto top of stack
stack.peek();        // Looks at top element
stack.pop();         // Removes and returns top element
stack.isEmpty();     // Checks if stack is empty
stack.search(10);    // Returns 1-based position from top`
  },
  {
    keyword: "PriorityQueue",
    meaning: "A queue where elements are ordered based on their natural ordering or a custom Comparator (Min-Heap by default).",
    example: `Queue<Integer> pq = new PriorityQueue<>(); // Min-Heap
// For Max-Heap: new PriorityQueue<>(Collections.reverseOrder());
pq.offer(5);
pq.offer(1);
pq.offer(10);
pq.poll(); // Retrieves and removes 1 (the smallest element)`
  },
  {
    keyword: "Arrays & Collections Utilities",
    meaning: "Static utility methods for sorting, searching, and manipulating arrays and collections.",
    example: `// Arrays
int[] arr = {3, 1, 4};
Arrays.sort(arr);        // {1, 3, 4}
Arrays.fill(arr, 0);     // {0, 0, 0}
int[] copy = Arrays.copyOf(arr, arr.length);

// Collections
List<Integer> list = Arrays.asList(3, 1, 4);
Collections.sort(list);  // [1, 3, 4]
Collections.reverse(list); // [4, 3, 1]
Collections.max(list);   // 4`
  },
  {
    keyword: "Advanced Map Methods",
    meaning: "Modern Java 8+ Map methods that save time in competitive programming.",
    example: `Map<String, Integer> map = new HashMap<>();
// Adds only if key doesn't exist
map.putIfAbsent("Alice", 25); 

// Computes value only if key is missing (Great for frequency maps!)
map.computeIfAbsent("Bob", k -> 0); 
map.put("Bob", map.get("Bob") + 1);

// Returns default if missing (Doesn't add it)
int score = map.getOrDefault("Charlie", 100);`
  },
  {
    keyword: "Bulk Operations (Sets/Lists)",
    meaning: "Set theory operations built into Collections.",
    example: `Set<Integer> a = new HashSet<>(Arrays.asList(1, 2, 3));
Set<Integer> b = new HashSet<>(Arrays.asList(3, 4, 5));

a.addAll(b);    // Union: [1, 2, 3, 4, 5]
a.retainAll(b); // Intersection: [3]
a.removeAll(b); // Difference: [1, 2] (removes b's elements from a)
a.clear();      // Empties the collection completely`
  },
  {
    keyword: "Math Utilities",
    meaning: "Static methods for mathematical operations.",
    example: `Math.max(10, 20); // 20
Math.min(10, 20); // 10
Math.abs(-5);     // 5
Math.pow(2, 3);   // 8.0 (Returns double)
Math.sqrt(16);    // 4.0
Math.ceil(2.1);   // 3.0
Math.floor(2.9);  // 2.0`
  }
];
