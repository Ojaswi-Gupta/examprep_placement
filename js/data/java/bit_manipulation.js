export const javaBitManipulation = [
  {
    keyword: "Bitwise Operators",
    meaning: "Operations that directly manipulate bits. Faster than arithmetic operations.",
    example: `int a = 5;  // 0101
int b = 3;  // 0011

a & b;  // AND: 0001 (1)
a | b;  // OR:  0111 (7)
a ^ b;  // XOR: 0110 (6)
~a;     // NOT: 1010 (Inverts all bits, two's complement)
a << 1; // Left Shift: 1010 (10) -> Multiplies by 2
a >> 1; // Right Shift: 0010 (2) -> Divides by 2
a >>> 1; // Unsigned Right Shift (fills with 0s)`
  },
  {
    keyword: "Check if Even or Odd",
    meaning: "The least significant bit (LSB) determines if a number is odd (1) or even (0). Faster than (x % 2 == 0).",
    example: `int x = 5;
if ((x & 1) == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}`
  },
  {
    keyword: "XOR Properties",
    meaning: "XOR (^) is heavily used in tricky array problems (like finding the missing number).",
    example: `x ^ x = 0;       // XORing a number with itself is 0
x ^ 0 = x;       // XORing with 0 returns the number
x ^ y ^ x = y;   // Order doesn't matter (associative/commutative)

// Swapping two numbers without a temp variable!
a = a ^ b;
b = a ^ b;
a = a ^ b;`
  },
  {
    keyword: "Check if Power of 2",
    meaning: "A power of 2 has exactly one '1' bit (e.g., 4 is 0100, 8 is 1000). Doing x & (x - 1) removes the rightmost '1'.",
    example: `int x = 16;
boolean isPowerOfTwo = (x > 0) && ((x & (x - 1)) == 0);
// 16 (10000) & 15 (01111) = 00000 -> true`
  },
  {
    keyword: "Count Set Bits (Brian Kernighan's Algo)",
    meaning: "Counts the number of '1's in the binary representation. x & (x - 1) unsets the rightmost set bit.",
    example: `int count = 0;
int n = 9; // 1001
while (n > 0) {
    n = n & (n - 1); // Clears lowest set bit
    count++;
}
// Returns 2

// Built-in alternative:
Integer.bitCount(9);`
  },
  {
    keyword: "Get Rightmost Set Bit",
    meaning: "Isolates the rightmost '1' bit in a number. Useful in Fenwick Trees (Binary Indexed Trees).",
    example: `int x = 10; // 1010
int rightmost = x & (-x); // -x is the two's complement (~x + 1)
// Result: 0010 (2)`
  }
];
