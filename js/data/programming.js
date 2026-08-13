import { javaDataStructures } from './java/data_structures.js';
import { javaStrings } from './java/strings.js';
import { javaBitManipulation } from './java/bit_manipulation.js';

// js/data/programming.js

export const PROGRAMMING_DATA = [
  {
    language: "SQL",
    icon: "🛢️",
    description: "Advanced SQL queries, tricky joins, and performance optimization concepts.",
    tabs: [
      {
        id: 'syntax',
        name: '📖 Syntax & Concepts',
        type: 'syntax',
        data: [
      {
        keyword: "SELECT ... FROM ... WHERE",
        meaning: "Core querying syntax to extract and filter records.",
        example: "SELECT name, salary FROM employees WHERE salary > 50000;"
      },
      {
        keyword: "INNER vs OUTER JOIN",
        meaning: "INNER JOIN returns matches in both tables. LEFT/RIGHT OUTER returns all from one table and matches from the other.",
        example: "SELECT e.name, d.dept_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.id;"
      },
      {
        keyword: "GROUP BY ... HAVING",
        meaning: "Groups rows and applies aggregates. HAVING filters after aggregation (WHERE filters before).",
        example: "SELECT dept_id, AVG(salary) FROM employees GROUP BY dept_id HAVING AVG(salary) > 60000;"
      },
      {
        keyword: "UNION vs UNION ALL",
        meaning: "Combines result sets. UNION removes duplicates (slower), UNION ALL keeps duplicates (faster).",
        example: "SELECT email FROM customers UNION ALL SELECT email FROM suppliers;"
      },
      {
        keyword: "ROW_NUMBER() OVER()",
        meaning: "Window function that assigns a sequential integer to each row in a partition.",
        example: "SELECT name, ROW_NUMBER() OVER(PARTITION BY dept_id ORDER BY salary DESC) as rank FROM employees;"
      },
      {
        keyword: "RANK() vs DENSE_RANK()",
        meaning: "RANK skips numbers for ties (1, 2, 2, 4). DENSE_RANK does not skip (1, 2, 2, 3).",
        example: "SELECT name, DENSE_RANK() OVER(ORDER BY salary DESC) as rank FROM employees;"
      },
      {
        keyword: "WITH (CTEs)",
        meaning: "Common Table Expressions allow creating temporary result sets that can be referenced within a SELECT, INSERT, UPDATE, or DELETE.",
        example: "WITH HighEarners AS (SELECT * FROM employees WHERE salary > 100000) SELECT * FROM HighEarners WHERE dept_id = 1;"
      },
      {
        keyword: "CASE WHEN",
        meaning: "SQL's version of IF-THEN-ELSE logic.",
        example: "SELECT name, CASE WHEN salary > 100000 THEN 'High' ELSE 'Normal' END as category FROM employees;"
      },
      {
        keyword: "COALESCE()",
        meaning: "Returns the first non-null value in a list. Useful for handling NULLs in joins.",
        example: "SELECT name, COALESCE(phone, email, 'No Contact Info') as contact FROM users;"
      },
      {
        keyword: "INDEX",
        meaning: "Improves read performance but slows down writes (INSERT/UPDATE). Uses B-Tree or Hash structures under the hood.",
        example: "CREATE INDEX idx_employee_name ON employees(last_name);"
      },
      {
        keyword: "Correlated Subquery",
        meaning: "A subquery that uses values from the outer query. It runs once for every row returned by the outer query (can be slow).",
        example: "SELECT e1.name FROM employees e1 WHERE e1.salary > (SELECT AVG(salary) FROM employees e2 WHERE e1.dept_id = e2.dept_id);"
      },
      {
        keyword: "EXISTS vs IN",
        meaning: "EXISTS evaluates to true/false and stops checking once a match is found (faster for large subqueries). IN compares all values.",
        example: "SELECT name FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.id);"
      },
      {
        keyword: "DATE, TIME, TIMESTAMP",
        meaning: "Data types for storing date and time. TIMESTAMP includes both date and time (and sometimes timezone depending on SQL engine).",
        example: "CREATE TABLE events (event_name varchar(50), event_date DATE, created_at TIMESTAMP);"
      },
      {
        keyword: "INTERVAL",
        meaning: "Used to add or subtract a specified time interval from a date/time.",
        example: "SELECT DATE_ADD(event_date, INTERVAL 7 DAY) FROM events; -- MySQL\nSELECT event_date + INTERVAL '1 month' FROM events; -- PostgreSQL"
      },
      {
        keyword: "EXTRACT() / DATE_PART()",
        meaning: "Extracts a part (year, month, day, hour, etc.) from a given date/time.",
        example: "SELECT EXTRACT(YEAR FROM order_date) as order_year FROM orders;"
      },
      {
        keyword: "CURRENT_DATE / NOW()",
        meaning: "Returns the current date or current date and time.",
        example: "SELECT * FROM orders WHERE order_date = CURRENT_DATE;"
      }
        ]
      },
      {
        id: 'mcqs',
        name: '🎯 Practice MCQs',
        type: 'mcqs',
        data: [
      {
        q: "Table A has 5 rows, Table B has 10 rows. If you do a CROSS JOIN between A and B, how many rows are in the result?",
        options: ["15", "5", "10", "50"],
        answer: 3,
        explanation: "A CROSS JOIN produces a Cartesian product, multiplying the number of rows: 5 x 10 = 50 rows."
      },
      {
        q: "What is the result of joining a table with 3 rows of NULLs to another table with 3 rows of NULLs using an INNER JOIN on that column?",
        options: ["0 rows", "3 rows", "6 rows", "9 rows"],
        answer: 0,
        explanation: "In SQL, NULL != NULL. Therefore, an INNER JOIN on a NULL value will never find a match, resulting in 0 rows."
      },
      {
        q: "Which of the following is true regarding DELETE and TRUNCATE?",
        options: ["DELETE cannot be rolled back, TRUNCATE can", "TRUNCATE logs individual row deletions, DELETE does not", "TRUNCATE resets identity/auto-increment columns, DELETE does not", "TRUNCATE is a DML command, DELETE is DDL"],
        answer: 2,
        explanation: "TRUNCATE is a DDL command that resets identity columns and does not log individual row deletions (making it faster). DELETE is a DML command that logs each deletion and does not reset identity."
      },
      {
        q: "You need to find the second highest salary from the Employee table. Which query works?",
        options: [
          "SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee)",
          "SELECT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1",
          "SELECT salary FROM (SELECT salary, DENSE_RANK() OVER(ORDER BY salary DESC) as r FROM Employee) WHERE r = 2",
          "All of the above"
        ],
        answer: 3,
        explanation: "All three queries correctly return the second highest salary using subqueries, offset/limit, or window functions."
      },
      {
        q: "What is the difference between a Clustered and Non-Clustered Index?",
        options: [
          "A table can have multiple clustered indexes but only one non-clustered index",
          "Clustered index stores data in random order, non-clustered sorts the data",
          "Clustered index physically sorts the data rows; non-clustered index creates a separate pointer structure",
          "They are the same thing just different terminology across SQL engines"
        ],
        answer: 2,
        explanation: "A Clustered Index physically orders the data on the disk (hence only one per table). A Non-Clustered index is stored separately and points to the physical rows."
      },
      {
        q: "What does the ACID acronym stand for in database transactions?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Availability, Concurrency, Integrity, Durability",
          "Atomicity, Concurrency, Isolation, Dependency",
          "Availability, Consistency, Integrity, Dependency"
        ],
        answer: 0,
        explanation: "ACID guarantees database reliability. Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent safe), Durability (saved permanently)."
      },
      {
        q: "What is a 'Phantom Read' in database isolation levels?",
        options: [
          "Reading uncommitted data from another transaction",
          "A row is modified by another transaction while you are reading it",
          "Another transaction inserts a new row that matches your WHERE clause during your transaction",
          "Reading data from a deleted table"
        ],
        answer: 2,
        explanation: "Phantom reads occur when a transaction reads a set of rows, and a concurrent transaction INSERTS or DELETES a row that satisfies the original read condition."
      },
      {
        q: "Consider a table 'Users' with a column 'Age'. If there are 5 rows with ages [20, 30, NULL, 40, NULL], what does COUNT(Age) return?",
        options: ["5", "3", "0", "NULL"],
        answer: 1,
        explanation: "COUNT(column_name) counts only non-NULL values. Since there are 3 non-NULL ages, it returns 3. COUNT(*) would return 5."
      },
      {
        q: "Which normalization form ensures that there are no transitive dependencies?",
        options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
        answer: 2,
        explanation: "3NF ensures that all non-key attributes are strictly dependent on the primary key and nothing else (no transitive dependencies)."
      },
      {
        q: "Which clause executes LAST in a standard SQL query lifecycle?",
        options: ["WHERE", "GROUP BY", "SELECT", "ORDER BY"],
        answer: 3,
        explanation: "Execution order: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT."
      },
      {
        q: "If you want to find all employees hired in the last 30 days, which query condition is generally standard?",
        options: [
          "hire_date > CURRENT_DATE - 30",
          "hire_date > DATE_SUB(NOW(), INTERVAL 30 DAY)",
          "hire_date >= CURRENT_DATE - INTERVAL '30 days'",
          "All of the above (depends on the SQL dialect)"
        ],
        answer: 3,
        explanation: "Date arithmetic heavily depends on the dialect. MySQL uses DATE_SUB/DATE_ADD, Postgres/Oracle use INTERVAL strings, and SQLite uses date() modifier functions."
      },
      {
        q: "What does the EXTRACT function do?",
        options: [
          "Downloads the database to a CSV file",
          "Gets a specific part like YEAR or MONTH from a timestamp",
          "Removes a row from a table based on a condition",
          "Decompresses a ZIP blob from the database"
        ],
        answer: 1,
        explanation: "EXTRACT(field FROM source) pulls out sub-fields such as year or hour from date/time values."
      }
        ]
      }
    ]
  },
  {
    language: "Python",
    icon: "🐍",
    description: "Advanced Python concepts including decorators, generators, OOP dunders, and tricky outputs.",
    tabs: [
      {
        id: 'syntax',
        name: '📖 Syntax & Concepts',
        type: 'syntax',
        data: [
      {
        keyword: "*args and **kwargs",
        meaning: "Allows passing a variable number of positional (*args) and keyword (**kwargs) arguments to a function.",
        example: "def func(*args, **kwargs):\n    print(args)  # Tuple of pos args\n    print(kwargs) # Dict of kw args"
      },
      {
        keyword: "Decorators (@)",
        meaning: "A function that modifies the behavior of another function. Wraps the original function.",
        example: "def timer(func):\n    def wrapper(*args):\n        print('Start')\n        return func(*args)\n    return wrapper\n\n@timer\ndef run(): pass"
      },
      {
        keyword: "Generators (yield)",
        meaning: "Functions that return an iterator and yield values one at a time, suspending state. Highly memory efficient.",
        example: "def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b"
      },
      {
        keyword: "List/Dict Comprehensions",
        meaning: "Elegant way to define and create lists/dictionaries based on existing iterables.",
        example: "squares = [x**2 for x in range(10) if x % 2 == 0]\nlookup = {x: x**2 for x in range(5)}"
      },
      {
        keyword: "Dunder Methods (__init__, __str__)",
        meaning: "Magic methods that allow classes to define behavior for built-in operations.",
        example: "class Car:\n    def __init__(self, brand):\n        self.brand = brand\n    def __str__(self):\n        return f'Car: {self.brand}'"
      },
      {
        keyword: "Context Managers (with)",
        meaning: "Ensures resources are properly acquired and released (e.g., closing files automatically). Uses __enter__ and __exit__.",
        example: "with open('file.txt', 'r') as f:\n    data = f.read()\n# File is automatically closed here"
      },
      {
        keyword: "Deep vs Shallow Copy",
        meaning: "Shallow copy (copy.copy) creates a new object but references nested objects. Deep copy (copy.deepcopy) creates full recursive copies.",
        example: "import copy\nnew_list = copy.deepcopy(nested_list)"
      },
      {
        keyword: "Lambda & Map/Filter",
        meaning: "Functional programming tools. Map applies a function to all items, filter removes items.",
        example: "nums = [1, 2, 3]\ndoubled = list(map(lambda x: x*2, nums))\nevens = list(filter(lambda x: x%2==0, nums))"
      },
      {
        keyword: "is vs ==",
        meaning: "== checks for value equality. 'is' checks for memory identity (do they point to the exact same object in memory).",
        example: "a = [1, 2]; b = [1, 2]\nprint(a == b) # True\nprint(a is b) # False"
      },
      {
        keyword: "Global and Nonlocal",
        meaning: "global modifies variables at the module level. nonlocal modifies variables in the nearest enclosing scope (closures).",
        example: "def outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x = 2"
      },
      {
        keyword: "Fibonacci Sequence",
        meaning: "Classic basic program: Generating the Fibonacci sequence up to n terms.",
        example: "def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        print(a, end=' ')\n        a, b = b, a + b"
      },
      {
        keyword: "Factorial (Recursive vs Iterative)",
        meaning: "Classic basic program: Finding the factorial of a number.",
        example: "def fact_rec(n):\n    return 1 if n <= 1 else n * fact_rec(n - 1)\n\ndef fact_iter(n):\n    res = 1\n    for i in range(2, n + 1): res *= i\n    return res"
      },
      {
        keyword: "Palindrome Check",
        meaning: "Classic basic program: Checking if a string is read the same forwards and backwards.",
        example: "def is_palindrome(s):\n    s = s.lower().replace(' ', '')\n    return s == s[::-1]"
      },
      {
        keyword: "Prime Number Check",
        meaning: "Classic basic program: Checking if a number is divisible only by 1 and itself.",
        example: "def is_prime(n):\n    if n <= 1: return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0: return False\n    return True"
      }
        ]
      },
      {
        id: 'mcqs',
        name: '🎯 Practice MCQs',
        type: 'mcqs',
        data: [
      {
        q: "What is the output of the following code?\n\ndef append_to(num, target=[]):\n    target.append(num)\n    return target\n\nprint(append_to(1))\nprint(append_to(2))",
        options: ["[1], [2]", "[1], [1, 2]", "Error", "[1], [1]"],
        answer: 1,
        explanation: "Mutable default arguments are evaluated ONLY ONCE when the function is defined. The same list object is used across both calls, so [1] becomes [1, 2]."
      },
      {
        q: "What is the time complexity of checking if an element exists in a Python set vs a Python list?",
        options: ["O(1) for set, O(n) for list", "O(n) for set, O(1) for list", "O(log n) for both", "O(1) for both"],
        answer: 0,
        explanation: "Sets in Python are implemented as Hash Tables, providing O(1) average lookup time. Lists require O(n) linear search."
      },
      {
        q: "What will be the output of `print(0.1 + 0.2 == 0.3)`?",
        options: ["True", "False", "SyntaxError", "TypeError"],
        answer: 1,
        explanation: "Due to floating-point precision limitations in IEEE 754, 0.1 + 0.2 evaluates to 0.30000000000000004, which is not strictly equal to 0.3."
      },
      {
        q: "What is the GIL (Global Interpreter Lock) in CPython?",
        options: ["A lock that prevents multiple threads from accessing databases", "A lock that allows multi-core true parallelism in Python", "A mutex that allows only one thread to execute Python bytecodes at a time", "A security mechanism to prevent infinite loops"],
        answer: 2,
        explanation: "The GIL prevents multiple native threads from executing Python bytecodes at once, meaning multithreading in CPython doesn't utilize multiple CPU cores for CPU-bound tasks (use multiprocessing instead)."
      },
      {
        q: "What is the output of the following code?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "[4]"],
        answer: 1,
        explanation: "Variables in Python are just pointers to objects. Both x and y point to the exact same list in memory. Modifying y modifies x."
      },
      {
        q: "How does Python handle memory management?",
        options: ["Manual allocation using malloc/free", "Reference counting and a cycle-detecting Garbage Collector", "Mark-and-sweep algorithm only", "Memory is never freed until the program closes"],
        answer: 1,
        explanation: "Python primarily uses Reference Counting. When an object's reference count drops to zero, it is deallocated. It also has a cycle-detecting GC to clean up circular references."
      },
      {
        q: "What is the purpose of the `__new__` method in Python?",
        options: ["It initializes an existing object", "It creates and returns a new instance of a class", "It destroys an object", "It is an alias for __init__"],
        answer: 1,
        explanation: "`__new__` is responsible for actually creating the object instance and returning it. `__init__` only initializes the object after it has been created."
      },
      {
        q: "What does the `zip()` function do in Python?",
        options: ["Compresses a file into a .zip format", "Combines elements from multiple iterables into tuples", "Sorts a list in ascending order", "Calculates the checksum of a string"],
        answer: 1,
        explanation: "zip() takes iterables, aggregates them in a tuple, and returns an iterator. E.g., zip([1,2], ['a','b']) yields (1, 'a') and (2, 'b')."
      },
      {
        q: "Which of the following is true about Python tuples?",
        options: ["They are mutable like lists", "They cannot contain mixed data types", "They are immutable and can be used as dictionary keys", "They are created using curly braces {}"],
        answer: 2,
        explanation: "Tuples are immutable, which makes them hashable, allowing them to be used as keys in a dictionary (unlike lists)."
      },
      {
        q: "What will `print([i for i in range(5) if i % 2 == 0])` output?",
        options: ["[1, 3]", "[0, 2, 4]", "[2, 4]", "[0, 1, 2, 3, 4]"],
        answer: 1,
        explanation: "This list comprehension loops from 0 to 4 and filters for even numbers: 0, 2, 4."
      },
      {
        q: "In the string slicing `s[::-1]`, what does it do?",
        options: [
          "Throws a SyntaxError",
          "Returns the string reversed",
          "Returns the last character of the string",
          "Skips every second character"
        ],
        answer: 1,
        explanation: "The slice [start:stop:step] with a step of -1 iterates backwards, effectively reversing the string."
      },
      {
        q: "To optimize a prime number check, up to which number should you iterate?",
        options: [
          "n / 2",
          "n - 1",
          "The square root of n",
          "You must iterate all the way to n"
        ],
        answer: 2,
        explanation: "You only need to check up to int(n**0.5) because a larger factor of n must be a multiple of a smaller factor that has already been checked."
      }
        ]
      }
    ]
  },
  {
    language: "Java",
    icon: "☕",
    description: "Deep dive into OOP, Collections, Concurrency, and tricky outputs.",
    tabs: [
      {
        id: 'syntax',
        name: '📖 Syntax & Concepts',
        type: 'syntax',
        data: [
      {
        keyword: "Abstraction (abstract class vs interface)",
        meaning: "Abstract classes can have state (instance variables) and constructors. Interfaces (pre-Java 8) only have abstract methods. Interfaces support multiple inheritance.",
        example: "public interface Flyable { void fly(); }\npublic abstract class Bird { int age; abstract void chirp(); }"
      },
      {
        keyword: "Polymorphism (Overloading vs Overriding)",
        meaning: "Compile-time (Method Overloading: same name, different parameters). Run-time (Method Overriding: subclass redefines superclass method).",
        example: "@Override\npublic void makeSound() { System.out.println(\"Bark\"); }"
      },
      {
        keyword: "static vs instance variables",
        meaning: "Static variables belong to the class (shared among all instances). Instance variables belong to the object.",
        example: "public static int totalCars = 0;\npublic String licensePlate;"
      },
      {
        keyword: "final, finally, finalize()",
        meaning: "final: constant variable/un-overridable method/un-inheritable class. finally: block always executes after try/catch. finalize(): GC callback (deprecated).",
        example: "final int MAX = 100;\ntry { } finally { cleanup(); }"
      },
      {
        keyword: "super() and this()",
        meaning: "super() calls the parent class constructor. this() calls another constructor in the same class. Must be the first statement in constructor.",
        example: "public Dog() { super(); this.name = \"Dog\"; }"
      },
      {
        keyword: "Checked vs Unchecked Exceptions",
        meaning: "Checked (Exception) must be declared or caught at compile time (e.g., IOException). Unchecked (RuntimeException) are logic errors (e.g., NullPointerException).",
        example: "public void readFile() throws IOException { ... }"
      },
      {
        keyword: "HashMap vs ConcurrentHashMap",
        meaning: "HashMap is not thread-safe. ConcurrentHashMap is thread-safe and locks at the segment level (highly concurrent), unlike HashTable which locks the whole object.",
        example: "Map<String, Integer> map = new ConcurrentHashMap<>();"
      },
      {
        keyword: "volatile keyword",
        meaning: "Ensures that variable updates are immediately written to main memory and visible to all threads, bypassing CPU caches.",
        example: "private volatile boolean isRunning = true;"
      },
      {
        keyword: "synchronized keyword",
        meaning: "Acquires an intrinsic lock (monitor) on the object or class to prevent concurrent execution by multiple threads.",
        example: "public synchronized void increment() { count++; }"
      },
      {
        keyword: "String Pool (== vs .equals)",
        meaning: "String literals are pooled. '==' checks memory references, '.equals()' checks logical string value.",
        example: "String a = \"hi\"; String b = new String(\"hi\");\n// a == b is false\n// a.equals(b) is true"
      }
        ]
      },
      {
        id: 'mcqs',
        name: '🎯 Practice MCQs',
        type: 'mcqs',
        data: [
      {
        q: "What is the output?\nString s1 = \"hello\";\nString s2 = \"hello\";\nSystem.out.println(s1 == s2);",
        options: ["false", "true", "Compilation Error", "Runtime Error"],
        answer: 1,
        explanation: "Because both are string literals, they are placed in the Java String Pool. Both s1 and s2 point to the exact same object in memory, so == is true."
      },
      {
        q: "What happens if you try to catch an exception but a `finally` block also returns a value?",
        options: ["The return from the catch block is used", "The return from the finally block overrides any other return", "Compilation error", "The JVM crashes"],
        answer: 1,
        explanation: "If a finally block contains a return statement, it overrides any return statement executed in the try or catch blocks."
      },
      {
        q: "Which Collection maintains insertion order?",
        options: ["HashSet", "HashMap", "LinkedHashMap", "TreeSet"],
        answer: 2,
        explanation: "LinkedHashMap and LinkedHashSet maintain a doubly-linked list running through their entries, preserving the insertion order. TreeSet sorts elements, HashSet is unordered."
      },
      {
        q: "What is the time complexity of `get()` in a HashMap under ideal conditions?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
        answer: 2,
        explanation: "Under ideal conditions (no hash collisions), finding the bucket and the element takes O(1) constant time. With collisions, Java 8 degrades to O(log n) using Red-Black Trees."
      },
      {
        q: "Can you override a `static` method in Java?",
        options: ["Yes, just like instance methods", "No, but you can overload them", "No, they are hidden (method hiding) rather than overridden", "Yes, but only in abstract classes"],
        answer: 2,
        explanation: "Static methods belong to the class, not the instance. If a subclass defines a static method with the same signature, it 'hides' the parent method, it doesn't dynamically override it."
      },
      {
        q: "What does the `transient` keyword do?",
        options: ["Marks a variable to be garbage collected immediately", "Prevents a variable from being serialized", "Makes a variable thread-safe", "Allows a variable to change its type at runtime"],
        answer: 1,
        explanation: "When an object is serialized (converted to a byte stream), any variable marked as `transient` is ignored and not saved."
      },
      {
        q: "What is the output of the following code?\nint x = 5;\nSystem.out.println(x++ + ++x);",
        options: ["10", "11", "12", "13"],
        answer: 2,
        explanation: "x++ evaluates to 5 (then x becomes 6). Next, ++x increments x to 7 and evaluates to 7. So, 5 + 7 = 12."
      },
      {
        q: "What is a Memory Leak in Java?",
        options: ["When the JVM runs out of RAM and crashes immediately", "When objects are no longer needed but are still referenced, preventing the Garbage Collector from freeing them", "When C++ pointers are used in JNI", "When the heap size is set too small"],
        answer: 1,
        explanation: "Even with a GC, if you unintentionally maintain active references to objects you no longer need (e.g., in a static List), the GC cannot destroy them, causing a memory leak."
      },
      {
        q: "Which interface does not allow duplicate elements?",
        options: ["List", "Queue", "Set", "Map"],
        answer: 2,
        explanation: "The Set interface (like HashSet, TreeSet) does not allow duplicate elements. If you add a duplicate, the add() method simply returns false."
      },
      {
        q: "What is the purpose of the `volatile` keyword?",
        options: ["To make an object immutable", "To guarantee visibility of changes to variables across multiple threads", "To prevent inheritance", "To handle exceptions gracefully"],
        answer: 1,
        explanation: "`volatile` ensures that reads and writes go straight to main memory, bypassing CPU caches, ensuring all threads see the most up-to-date value."
      }
        ]
      },
      {
        id: 'ds',
        name: '🏗️ Data Structures',
        type: 'syntax',
        data: javaDataStructures
      },
      {
        id: 'strings',
        name: '🔤 Strings',
        type: 'syntax',
        data: javaStrings
      },
      {
        id: 'bit',
        name: '0️⃣1️⃣ Bit Manipulation',
        type: 'syntax',
        data: javaBitManipulation
      }
    ]
  }
];
