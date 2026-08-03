export const FORMULAS_DATA = [
  {
    category: "Percentages",
    formulas: [
      {
        title: "Basic Percentage",
        type: "Simple",
        formula: "P = (V / T) &times; 100",
        variables: [
          { symbol: "P", definition: "Percentage (%)" },
          { symbol: "V", definition: "Value or Part" },
          { symbol: "T", definition: "Total or Base amount" }
        ]
      },
      {
        title: "Percentage Change",
        type: "Simple",
        formula: "% Change = [ (F - I) / I ] &times; 100",
        variables: [
          { symbol: "F", definition: "Final Value" },
          { symbol: "I", definition: "Initial Value" }
        ]
      },
      {
        title: "Successive Percentage Change",
        type: "Advanced",
        formula: "Net % Change = a + b + (a &times; b) / 100",
        variables: [
          { symbol: "a", definition: "First percentage change (use negative for decrease)" },
          { symbol: "b", definition: "Second percentage change (use negative for decrease)" }
        ]
      }
    ]
  },
  {
    category: "Profit & Loss",
    formulas: [
      {
        title: "Basic Profit / Loss",
        type: "Simple",
        formula: "Profit = SP - CP<br>Loss = CP - SP",
        variables: [
          { symbol: "SP", definition: "Selling Price" },
          { symbol: "CP", definition: "Cost Price" }
        ]
      },
      {
        title: "Profit / Loss Percentage",
        type: "Simple",
        formula: "Profit % = (Profit / CP) &times; 100<br>Loss % = (Loss / CP) &times; 100",
        variables: [
          { symbol: "Profit", definition: "Amount gained (SP > CP)" },
          { symbol: "Loss", definition: "Amount lost (CP > SP)" },
          { symbol: "CP", definition: "Cost Price (Base for percentage)" }
        ]
      },
      {
        title: "Selling Price with Profit/Loss %",
        type: "Advanced",
        formula: "SP = CP &times; [ (100 &plusmn; R) / 100 ]",
        variables: [
          { symbol: "SP", definition: "Selling Price" },
          { symbol: "CP", definition: "Cost Price" },
          { symbol: "R", definition: "Profit % (use +) or Loss % (use -)" }
        ]
      },
      {
        title: "False Weight / Dishonest Dealer",
        type: "Advanced",
        formula: "Gain % = [ Error / (True Weight - Error) ] &times; 100",
        variables: [
          { symbol: "Error", definition: "True Weight - False Weight used" },
          { symbol: "True Weight", definition: "The actual weight that was supposed to be given" }
        ]
      }
    ]
  },
  {
    category: "Time, Speed & Distance",
    formulas: [
      {
        title: "Basic Relation",
        type: "Simple",
        formula: "D = S &times; T",
        variables: [
          { symbol: "D", definition: "Distance covered" },
          { symbol: "S", definition: "Speed" },
          { symbol: "T", definition: "Time taken" }
        ]
      },
      {
        title: "Average Speed",
        type: "Advanced",
        formula: "Average Speed = (2 &times; a &times; b) / (a + b)",
        variables: [
          { symbol: "a", definition: "Speed during first half of the journey" },
          { symbol: "b", definition: "Speed during second half of the journey" }
        ]
      },
      {
        title: "Relative Speed (Same Direction)",
        type: "Simple",
        formula: "Relative S = |S<sub>1</sub> - S<sub>2</sub>|",
        variables: [
          { symbol: "S<sub>1</sub>, S<sub>2</sub>", definition: "Speeds of two moving bodies" }
        ]
      },
      {
        title: "Relative Speed (Opposite Direction)",
        type: "Simple",
        formula: "Relative S = S<sub>1</sub> + S<sub>2</sub>",
        variables: [
          { symbol: "S<sub>1</sub>, S<sub>2</sub>", definition: "Speeds of two moving bodies" }
        ]
      },
      {
        title: "Trains crossing each other",
        type: "Advanced",
        formula: "Time = (L<sub>1</sub> + L<sub>2</sub>) / Relative S",
        variables: [
          { symbol: "L<sub>1</sub>", definition: "Length of the first train" },
          { symbol: "L<sub>2</sub>", definition: "Length of the second train (or platform/bridge)" },
          { symbol: "Relative S", definition: "Relative Speed of the objects" }
        ]
      }
    ]
  },
  {
    category: "Time & Work",
    formulas: [
      {
        title: "Work and Time Relation",
        type: "Simple",
        formula: "Work Done = Rate of Work &times; Time",
        variables: [
          { symbol: "Rate of Work", definition: "Amount of work done in 1 unit of time (e.g., 1/Days)" }
        ]
      },
      {
        title: "Two Persons Working Together",
        type: "Advanced",
        formula: "Total Days = (A &times; B) / (A + B)",
        variables: [
          { symbol: "A", definition: "Days taken by Person 1 to complete the work alone" },
          { symbol: "B", definition: "Days taken by Person 2 to complete the work alone" }
        ]
      },
      {
        title: "Chain Rule (MDH Formula)",
        type: "Advanced",
        formula: "(M<sub>1</sub> &times; D<sub>1</sub> &times; H<sub>1</sub>) / W<sub>1</sub> = (M<sub>2</sub> &times; D<sub>2</sub> &times; H<sub>2</sub>) / W<sub>2</sub>",
        variables: [
          { symbol: "M", definition: "Number of Men/Workers" },
          { symbol: "D", definition: "Number of Days" },
          { symbol: "H", definition: "Number of Hours per day" },
          { symbol: "W", definition: "Amount of Work done" }
        ]
      }
    ]
  },
  {
    category: "Permutation & Combination",
    formulas: [
      {
        title: "Permutation (Arrangement)",
        type: "Advanced",
        formula: "<sup>n</sup>P<sub>r</sub> = n! / (n - r)!",
        variables: [
          { symbol: "n", definition: "Total number of distinct items available" },
          { symbol: "r", definition: "Number of items to be arranged" },
          { symbol: "!", definition: "Factorial (e.g., 5! = 5&times;4&times;3&times;2&times;1)" }
        ]
      },
      {
        title: "Combination (Selection)",
        type: "Advanced",
        formula: "<sup>n</sup>C<sub>r</sub> = n! / [ r!(n - r)! ]",
        variables: [
          { symbol: "n", definition: "Total number of distinct items available" },
          { symbol: "r", definition: "Number of items to be selected" }
        ]
      },
      {
        title: "Circular Permutation",
        type: "Advanced",
        formula: "Ways = (n - 1)!",
        variables: [
          { symbol: "n", definition: "Number of items arranged in a circle" }
        ]
      }
    ]
  },
  {
    category: "Simple & Compound Interest",
    formulas: [
      {
        title: "Simple Interest (SI)",
        type: "Simple",
        formula: "SI = (P &times; R &times; T) / 100",
        variables: [
          { symbol: "P", definition: "Principal amount" },
          { symbol: "R", definition: "Rate of interest per annum (%)" },
          { symbol: "T", definition: "Time period in years" }
        ]
      },
      {
        title: "Amount (Simple Interest)",
        type: "Simple",
        formula: "A = P &times; [1 + (R &times; T)/100]",
        variables: [
          { symbol: "A", definition: "Total Amount" },
          { symbol: "P", definition: "Principal amount" }
        ]
      },
      {
        title: "Compound Interest (CI) Amount",
        type: "Advanced",
        formula: "A = P &times; (1 + R/100)<sup>T</sup>",
        variables: [
          { symbol: "A", definition: "Total Amount after compounding" },
          { symbol: "P", definition: "Principal amount" },
          { symbol: "R", definition: "Rate of interest per annum (%)" },
          { symbol: "T", definition: "Time period in years" }
        ]
      },
      {
        title: "Difference between CI and SI (2 Years)",
        type: "Advanced",
        formula: "Diff = P &times; (R / 100)<sup>2</sup>",
        variables: [
          { symbol: "Diff", definition: "Difference between CI and SI for exactly 2 years" },
          { symbol: "P", definition: "Principal amount" },
          { symbol: "R", definition: "Rate of interest per annum (%)" }
        ]
      },
      {
        title: "Difference between CI and SI (3 Years)",
        type: "Advanced",
        formula: "Diff = P &times; (R / 100)<sup>2</sup> &times; (300 + R)/100",
        variables: [
          { symbol: "Diff", "definition": "Difference between CI and SI for exactly 3 years" },
          { symbol: "P", "definition": "Principal amount" },
          { symbol: "R", "definition": "Rate of interest per annum (%)" }
        ]
      }
    ]
  },
  {
    category: "Mensuration (2D & 3D)",
    formulas: [
      {
        title: "Area of a Triangle",
        type: "Simple",
        formula: "Area = 1/2 &times; b &times; h",
        variables: [
          { symbol: "b", definition: "Base of the triangle" },
          { symbol: "h", definition: "Height corresponding to the base" }
        ]
      },
      {
        title: "Area of an Equilateral Triangle",
        type: "Advanced",
        formula: "Area = (&radic;3 / 4) &times; a<sup>2</sup>",
        variables: [
          { symbol: "a", definition: "Length of a side" }
        ]
      },
      {
        title: "Circle (Area & Perimeter)",
        type: "Simple",
        formula: "Area = &pi;r<sup>2</sup><br>Perimeter = 2&pi;r",
        variables: [
          { symbol: "r", definition: "Radius of the circle" },
          { symbol: "&pi;", definition: "Pi (approx. 3.14159)" }
        ]
      },
      {
        title: "Cylinder (Volume & Surface Area)",
        type: "Advanced",
        formula: "Volume = &pi;r<sup>2</sup>h<br>Curved SA = 2&pi;rh",
        variables: [
          { symbol: "r", definition: "Radius of the circular base" },
          { symbol: "h", definition: "Height of the cylinder" }
        ]
      },
      {
        title: "Sphere (Volume & Surface Area)",
        type: "Advanced",
        formula: "Volume = 4/3 &times; &pi;r<sup>3</sup><br>Surface Area = 4&pi;r<sup>2</sup>",
        variables: [
          { symbol: "r", definition: "Radius of the sphere" }
        ]
      }
    ]
  },
  {
    category: "Algebra & Number System",
    formulas: [
      {
        title: "Quadratic Equation Roots",
        type: "Advanced",
        formula: "x = [-b &plusmn; &radic;(b<sup>2</sup> - 4ac)] / 2a",
        variables: [
          { symbol: "a, b, c", definition: "Coefficients of ax^2 + bx + c = 0" },
          { symbol: "x", definition: "Roots of the equation" }
        ]
      },
      {
        title: "Algebraic Expansion",
        type: "Simple",
        formula: "(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>",
        variables: [
          { symbol: "a, b", definition: "Terms in the expression" }
        ]
      },
      {
        title: "Sum of First n Natural Numbers",
        type: "Simple",
        formula: "Sum = n(n + 1) / 2",
        variables: [
          { symbol: "n", definition: "Total number of terms" }
        ]
      },
      {
        title: "LCM and HCF Relation",
        type: "Advanced",
        formula: "LCM(a,b) &times; HCF(a,b) = a &times; b",
        variables: [
          { symbol: "a, b", definition: "Two given numbers" },
          { symbol: "LCM", definition: "Least Common Multiple" },
          { symbol: "HCF", "definition": "Highest Common Factor" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Blood Relations",
    formulas: [
      {
        title: "Paternal vs Maternal",
        type: "Simple",
        formula: "Paternal = Father's side<br>Maternal = Mother's side",
        variables: [
          { symbol: "Paternal Uncle", "definition": "Father's brother" },
          { "symbol": "Maternal Uncle", "definition": "Mother's brother" }
        ]
      },
      {
        title: "In-Laws",
        type: "Simple",
        formula: "Spouse's relatives",
        variables: [
          { symbol: "Father-in-law", definition: "Spouse's father" },
          { "symbol": "Sister-in-law", "definition": "Spouse's sister OR Brother's wife" }
        ]
      },
      {
        title: "Generations Tree Method",
        type: "Advanced",
        formula: "1. Same gen: Horizontal line (-)<br>2. Diff gen: Vertical line (|)",
        variables: [
          { symbol: "Square / (+)", "definition": "Male" },
          { "symbol": "Circle / (-)", "definition": "Female" },
          { "symbol": "Double line (=)", "definition": "Married Couple" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Direction Sense",
    formulas: [
      {
        title: "Standard Directions",
        type: "Simple",
        formula: "North (Up), South (Down), East (Right), West (Left)",
        variables: [
          { symbol: "Clockwise", "definition": "N -> E -> S -> W" },
          { symbol: "Anti-Clockwise", "definition": "N -> W -> S -> E" }
        ]
      },
      {
        title: "Shortest Distance (Pythagoras)",
        type: "Advanced",
        formula: "Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpendicular<sup>2</sup>",
        variables: [
          { symbol: "Hypotenuse", "definition": "Shortest distance between start and end point" },
          { "symbol": "Base/Perpendicular", "definition": "Horizontal and vertical distance components" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Syllogism",
    formulas: [
      {
        title: "Type: All A are B",
        type: "Simple",
        formula: "A lies completely inside B",
        variables: [
          { symbol: "A", definition: "Inner circle" },
          { "symbol": "B", "definition": "Outer circle" },
          { symbol: "Conclusion", definition: "Some B are A (True), All B are A (False/Uncertain)" }
        ]
      },
      {
        title: "Type: Some A are B",
        type: "Advanced",
        formula: "A and B partially overlap",
        variables: [
          { symbol: "Overlap", "definition": "The region shared by A and B" },
          { symbol: "Conclusion", "definition": "Some B are A (True)" }
        ]
      },
      {
        title: "Type: No A is B",
        type: "Simple",
        formula: "A and B are completely separate",
        variables: [
          { symbol: "Conclusion", "definition": "No B is A (True), Some A are not B (True)" }
        ]
      }
    ]
  },
  {
    category: "Logical Reasoning: Coding-Decoding",
    formulas: [
      {
        title: "Forward Alphabet Positional Value",
        type: "Simple",
        formula: "A=1, B=2, C=3 ... Z=26",
        variables: [
          { symbol: "EJOTY", "definition": "E=5, J=10, O=15, T=20, Y=25" }
        ]
      },
      {
        title: "Reverse Alphabet Positional Value",
        type: "Advanced",
        formula: "Z=1, Y=2, X=3 ... A=26",
        variables: [
          { symbol: "Reverse Value", "definition": "27 - Forward Value" },
          { symbol: "Example", "definition": "A's reverse = 27 - 1 = 26" }
        ]
      }
    ]
  }
];
