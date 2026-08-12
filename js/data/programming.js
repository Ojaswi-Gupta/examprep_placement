// js/data/programming.js

export const PROGRAMMING_DATA = [
  {
    language: "SQL",
    icon: "🛢️",
    description: "Structured Query Language used for communicating with databases.",
    syntax: [
      {
        keyword: "SELECT",
        meaning: "Extracts data from a database.",
        example: "SELECT column1, column2 FROM table_name;"
      },
      {
        keyword: "WHERE",
        meaning: "Filters records that fulfill a specified condition.",
        example: "SELECT * FROM users WHERE age >= 18;"
      },
      {
        keyword: "JOIN",
        meaning: "Combines rows from two or more tables, based on a related column between them.",
        example: "SELECT orders.id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;"
      },
      {
        keyword: "GROUP BY",
        meaning: "Groups rows that have the same values into summary rows.",
        example: "SELECT COUNT(id), country FROM customers GROUP BY country;"
      },
      {
        keyword: "HAVING",
        meaning: "Added to SQL because the WHERE keyword cannot be used with aggregate functions.",
        example: "SELECT COUNT(id), country FROM customers GROUP BY country HAVING COUNT(id) > 5;"
      },
      {
        keyword: "ORDER BY",
        meaning: "Sorts the result-set in ascending or descending order.",
        example: "SELECT * FROM users ORDER BY created_at DESC;"
      },
      {
        keyword: "INSERT INTO",
        meaning: "Inserts new records in a table.",
        example: "INSERT INTO users (name, email) VALUES ('John', 'john@example.com');"
      },
      {
        keyword: "UPDATE",
        meaning: "Modifies the existing records in a table.",
        example: "UPDATE users SET status = 'active' WHERE id = 1;"
      },
      {
        keyword: "DELETE",
        meaning: "Deletes existing records in a table.",
        example: "DELETE FROM users WHERE id = 1;"
      },
      {
        keyword: "CREATE TABLE",
        meaning: "Creates a new table in the database.",
        example: "CREATE TABLE persons (id int, name varchar(255));"
      }
    ],
    mcqs: [
      {
        q: "Which SQL statement is used to extract data from a database?",
        options: ["GET", "OPEN", "EXTRACT", "SELECT"],
        answer: 3,
        explanation: "The SELECT statement is used to select data from a database. The data returned is stored in a result table."
      },
      {
        q: "Which SQL statement is used to update data in a database?",
        options: ["SAVE", "SAVE AS", "MODIFY", "UPDATE"],
        answer: 3,
        explanation: "The UPDATE statement is used to modify the existing records in a table."
      },
      {
        q: "Which SQL statement is used to delete data from a database?",
        options: ["COLLAPSE", "REMOVE", "DELETE", "DROP"],
        answer: 2,
        explanation: "The DELETE statement is used to delete existing records in a table."
      },
      {
        q: "Which keyword is used to sort the result-set?",
        options: ["ORDER", "SORT BY", "ORDER BY", "SORT"],
        answer: 2,
        explanation: "The ORDER BY keyword is used to sort the result-set in ascending or descending order."
      },
      {
        q: "What is the most common type of JOIN?",
        options: ["INNER JOIN", "INSIDE JOIN", "JOINED", "OUTER JOIN"],
        answer: 0,
        explanation: "INNER JOIN selects records that have matching values in both tables."
      },
      {
        q: "Which operator is used to search for a specified pattern in a column?",
        options: ["LIKE", "GET", "FROM", "MATCH"],
        answer: 0,
        explanation: "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column."
      },
      {
        q: "How do you select all columns from a table named 'Persons'?",
        options: ["SELECT Persons", "SELECT *.Persons", "SELECT [all] FROM Persons", "SELECT * FROM Persons"],
        answer: 3,
        explanation: "The asterisk (*) is used to select all columns."
      }
    ]
  },
  {
    language: "Python",
    icon: "🐍",
    description: "An interpreted, high-level, general-purpose programming language.",
    syntax: [
      {
        keyword: "def",
        meaning: "Defines a function.",
        example: "def greet(name):\n    print(f'Hello, {name}')"
      },
      {
        keyword: "for",
        meaning: "Used for iterating over a sequence (like a list, tuple, dictionary, set, or string).",
        example: "for i in range(5):\n    print(i)"
      },
      {
        keyword: "if...elif...else",
        meaning: "Used for conditional execution.",
        example: "if x > 0:\n    print('Positive')\nelif x == 0:\n    print('Zero')\nelse:\n    print('Negative')"
      },
      {
        keyword: "import",
        meaning: "Used to import modules.",
        example: "import math\nprint(math.pi)"
      },
      {
        keyword: "try...except",
        meaning: "Used for exception handling.",
        example: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')"
      },
      {
        keyword: "class",
        meaning: "Defines a class.",
        example: "class Dog:\n    def __init__(self, name):\n        self.name = name"
      },
      {
        keyword: "lambda",
        meaning: "Creates an anonymous function.",
        example: "square = lambda x: x ** 2\nprint(square(5))"
      },
      {
        keyword: "yield",
        meaning: "Returns a generator.",
        example: "def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1"
      },
      {
        keyword: "with",
        meaning: "Used to wrap the execution of a block with methods defined by a context manager.",
        example: "with open('file.txt', 'r') as f:\n    content = f.read()"
      },
      {
        keyword: "list comprehension",
        meaning: "A concise way to create lists.",
        example: "squares = [x**2 for x in range(10)]"
      }
    ],
    mcqs: [
      {
        q: "What is the correct syntax to output 'Hello World' in Python?",
        options: ["echo 'Hello World'", "print('Hello World')", "p('Hello World')", "console.log('Hello World')"],
        answer: 1,
        explanation: "Python uses the print() function to output data to the standard output device."
      },
      {
        q: "How do you insert comments in Python code?",
        options: ["//This is a comment", "/*This is a comment*/", "#This is a comment", "--This is a comment"],
        answer: 2,
        explanation: "Comments in Python start with the hash character (#)."
      },
      {
        q: "Which of the following is the correct extension of the Python file?",
        options: [".python", ".pl", ".py", ".p"],
        answer: 2,
        explanation: "Python files have the .py extension."
      },
      {
        q: "What is used to define a block of code in Python?",
        options: ["Key", "Brackets", "Indentation", "Parentheses"],
        answer: 2,
        explanation: "Python uses indentation (whitespace at the beginning of a line) to define scope in the code."
      },
      {
        q: "Which keyword is used for function in Python language?",
        options: ["Function", "def", "Fun", "Define"],
        answer: 1,
        explanation: "The 'def' keyword is used to create a function."
      },
      {
        q: "What will be the output of: type([])?",
        options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'set'>"],
        answer: 0,
        explanation: "Square brackets [] represent a list in Python."
      },
      {
        q: "Which of the following functions can help us to find the version of python that we are currently working on?",
        options: ["sys.version", "sys.version()", "sys.version(1)", "sys.version(0)"],
        answer: 0,
        explanation: "The sys.version attribute returns a string representing the Python version."
      }
    ]
  },
  {
    language: "Java",
    icon: "☕",
    description: "A class-based, object-oriented programming language.",
    syntax: [
      {
        keyword: "class",
        meaning: "Declares a class.",
        example: "public class MyClass {\n    // fields and methods\n}"
      },
      {
        keyword: "public static void main(String[] args)",
        meaning: "The entry point of any Java program.",
        example: "public static void main(String[] args) {\n    System.out.println(\"Hello\");\n}"
      },
      {
        keyword: "System.out.println()",
        meaning: "Prints text to the console.",
        example: "System.out.println(\"Hello World\");"
      },
      {
        keyword: "new",
        meaning: "Creates a new object.",
        example: "MyClass obj = new MyClass();"
      },
      {
        keyword: "extends",
        meaning: "Indicates that a class inherits from a superclass.",
        example: "class Dog extends Animal {\n    // Dog methods\n}"
      },
      {
        keyword: "implements",
        meaning: "Indicates that a class implements an interface.",
        example: "class Dog implements Runnable {\n    public void run() {}\n}"
      },
      {
        keyword: "interface",
        meaning: "Declares a special type of class that only contains abstract methods.",
        example: "public interface Animal {\n    void makeSound();\n}"
      },
      {
        keyword: "try...catch...finally",
        meaning: "Handles exceptions.",
        example: "try {\n    int[] arr = {1};\n    System.out.println(arr[1]);\n} catch (Exception e) {\n    System.out.println(\"Error\");\n} finally {\n    System.out.println(\"Done\");\n}"
      },
      {
        keyword: "final",
        meaning: "Defines an entity that can only be assigned once (constant).",
        example: "final double PI = 3.14159;"
      },
      {
        keyword: "static",
        meaning: "Indicates that the member belongs to the type itself, rather than to an instance of the type.",
        example: "public static int counter = 0;"
      }
    ],
    mcqs: [
      {
        q: "What is the correct syntax to output 'Hello World' in Java?",
        options: ["echo(\"Hello World\");", "System.out.println(\"Hello World\");", "print(\"Hello World\");", "Console.WriteLine(\"Hello World\");"],
        answer: 1,
        explanation: "System.out.println() is used to print text to the console in Java."
      },
      {
        q: "Java is short for \"JavaScript\".",
        options: ["True", "False", "Partially True", "Context Dependent"],
        answer: 1,
        explanation: "Java and JavaScript are two completely different languages in both concept and design."
      },
      {
        q: "How do you insert single-line comments in Java?",
        options: ["// This is a comment", "/* This is a comment", "# This is a comment", "-- This is a comment"],
        answer: 0,
        explanation: "Single-line comments start with two forward slashes (//)."
      },
      {
        q: "Which data type is used to create a variable that should store text?",
        options: ["myString", "string", "String", "Txt"],
        answer: 2,
        explanation: "The String type is used to store text. In Java, String is a class, so it starts with a capital letter."
      },
      {
        q: "How do you create a variable with the numeric value 5?",
        options: ["x = 5;", "int x = 5;", "num x = 5", "float x = 5;"],
        answer: 1,
        explanation: "To create an integer variable, use the 'int' keyword."
      },
      {
        q: "Which method can be used to find the length of a string?",
        options: ["getSize()", "len()", "length()", "length"],
        answer: 2,
        explanation: "The length() method returns the length of a string."
      },
      {
        q: "Which keyword is used to create a class in Java?",
        options: ["class", "MyClass", "class()", "className"],
        answer: 0,
        explanation: "The 'class' keyword is used to declare a class in Java."
      }
    ]
  }
];
