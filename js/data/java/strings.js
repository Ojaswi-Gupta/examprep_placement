export const javaStrings = [
  {
    keyword: "String Creation & length()",
    meaning: "Strings are immutable objects in Java. length() returns the total number of characters.",
    example: `String str = "Hello World";
int len = str.length(); // Returns 11
String emptyStr = "";
boolean isEmpty = emptyStr.isEmpty(); // true
boolean isBlank = "   ".isBlank(); // true (Java 11+)`
  },
  {
    keyword: "charAt() & toCharArray()",
    meaning: "charAt() gets a specific character at an index. toCharArray() converts the entire string into a char array.",
    example: `String str = "Java";
char ch = str.charAt(1); // Returns 'a'
char[] arr = str.toCharArray(); // ['J', 'a', 'v', 'a']`
  },
  {
    keyword: "substring()",
    meaning: "Extracts a portion of the string. Can take a start index (inclusive) or both start and end index (exclusive).",
    example: `String str = "Placement";
String sub1 = str.substring(5); // "ment"
String sub2 = str.substring(0, 5); // "Place"`
  },
  {
    keyword: "indexOf() & lastIndexOf()",
    meaning: "Finds the first or last occurrence of a character or substring. Returns -1 if not found.",
    example: `String str = "hello world";
int first = str.indexOf("o"); // Returns 4
int last = str.lastIndexOf("o"); // Returns 7
int notFound = str.indexOf("z"); // Returns -1`
  },
  {
    keyword: "equals() & equalsIgnoreCase()",
    meaning: "Compares the actual content of the strings. NEVER use == for string comparison in Java unless checking memory references.",
    example: `String s1 = "java";
String s2 = new String("java");
boolean b1 = (s1 == s2); // false (different objects)
boolean b2 = s1.equals(s2); // true (same content)
boolean b3 = s1.equalsIgnoreCase("JAVA"); // true`
  },
  {
    keyword: "split()",
    meaning: "Splits a string into a String array based on a regex delimiter.",
    example: `String str = "apple,banana,orange";
String[] fruits = str.split(","); 
// ["apple", "banana", "orange"]

String sentence = "Hello world";
String[] words = sentence.split(" "); // Split by space`
  },
  {
    keyword: "replace() & replaceAll()",
    meaning: "Replaces characters or substrings. replaceAll() uses Regular Expressions (regex).",
    example: `String str = "bat cat rat";
String r1 = str.replace('a', 'o'); // "bot cot rot"
String r2 = str.replace("cat", "dog"); // "bat dog rat"
String r3 = str.replaceAll("[bc]at", "dog"); // "dog dog rat"`
  },
  {
    keyword: "trim() & toLowerCase() / toUpperCase()",
    meaning: "trim() removes leading and trailing whitespaces. toLowerCase/toUpperCase converts case.",
    example: `String str = "  Hello  ";
String clean = str.trim(); // "Hello"
String lower = clean.toLowerCase(); // "hello"
String upper = clean.toUpperCase(); // "HELLO"`
  },
  {
    keyword: "StringBuilder & StringBuffer",
    meaning: "Used for mutable string manipulation (much faster than concatenating Strings in loops). StringBuffer is thread-safe, StringBuilder is not (faster).",
    example: `StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // "Hello World"
sb.insert(5, ",");   // "Hello, World"
sb.delete(5, 6);     // "Hello World"
sb.reverse();        // "dlroW olleH"
String result = sb.toString();`
  },
  {
    keyword: "String.valueOf()",
    meaning: "Converts primitives (int, double, char[], boolean) into a String.",
    example: `int num = 100;
String strNum = String.valueOf(num); // "100"
char[] arr = {'a', 'b', 'c'};
String strArr = String.valueOf(arr); // "abc"`
  },
  {
    keyword: "startsWith() & endsWith()",
    meaning: "Checks if a string starts or ends with a specific prefix/suffix.",
    example: `String str = "PlacementPrep";
boolean starts = str.startsWith("Place"); // true
boolean ends = str.endsWith("ep"); // true`
  },
  {
    keyword: "contains()",
    meaning: "Checks if a string contains a specified sequence of characters (substring).",
    example: `String str = "Java Programming";
boolean hasJava = str.contains("Java"); // true
boolean hasPython = str.contains("Python"); // false`
  },
  {
    keyword: "compareTo() & compareToIgnoreCase()",
    meaning: "Compares two strings lexicographically (alphabetically). Returns 0 if equal, negative if less, positive if greater.",
    example: `String s1 = "apple";
String s2 = "banana";
int diff = s1.compareTo(s2); // negative (a comes before b)
int same = s1.compareTo("apple"); // 0`
  },
  {
    keyword: "String.join()",
    meaning: "Joins multiple strings or an Iterable of strings with a specified delimiter.",
    example: `String result = String.join("-", "2024", "10", "31"); 
// "2024-10-31"

List<String> list = Arrays.asList("A", "B", "C");
String joinedList = String.join(", ", list); 
// "A, B, C"`
  },
  {
    keyword: "String.format()",
    meaning: "Returns a formatted string using format specifiers like %s (string), %d (integer), %f (float).",
    example: `String name = "Alice";
int age = 25;
String formatted = String.format("My name is %s and I am %d", name, age);
// "My name is Alice and I am 25"`
  },
  {
    keyword: "matches()",
    meaning: "Checks if the entire string matches a given regular expression.",
    example: `String email = "test@example.com";
boolean isValid = email.matches("^[\\\\w-\\\\.]+@([\\\\w-]+\\\\.)+[\\\\w-]{2,4}$");
// true if valid email regex match`
  }
];
