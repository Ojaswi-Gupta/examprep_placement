export const EXAMPLES_DATA = {
  "Basic Percentage": {
    question: "In an election between two candidates, 10% of voters did not vote, and 10% of the votes cast were invalid. The winner got 54% of the valid votes and won by 1620 votes. Find the total enrolled voters.",
    steps: [
      "Let total enrolled voters = 100x.",
      "Votes cast = 90x. Valid votes = 90% of 90x = 81x.",
      "Winner gets 54% of valid votes; loser gets 46%.",
      "Majority difference = 54% - 46% = 8% of valid votes.",
      "$0.08 \\times 81x = 1620 \\implies x = 250$. Total voters = 25,000."
    ]
  },
  "Percentage Change": {
    question: "The price of sugar increases by 20%. By what percentage must a family reduce its consumption so that the expenditure on sugar remains the same?",
    steps: [
      "Let original price = $100 and consumption = 100 units. Original expenditure = 10,000.",
      "New price = $120. Let new consumption be $C$.",
      "To keep expenditure same: $120 \\times C = 10,000 \\implies C = 83.33$ units.",
      "Reduction in consumption = $100 - 83.33 = 16.67\\%$."
    ]
  },
  "Successive Percentage Change": {
    question: "A number is increased by x%, then decreased by x%. If the final number is 4% less than the original, what is the value of x?",
    steps: [
      "Net change = $+x - x - (x \\times x)/100 = -x^2/100\\%$.",
      "We are given a 4% decrease, so $-x^2/100 = -4$.",
      "$x^2 = 400 \\implies x = 20$."
    ]
  },
  "Basic Profit / Loss": {
    question: "A merchant buys two articles for Rs. 4000 total. He sells one at a 20% profit and the other at a 10% loss. If he makes no overall profit or loss, find the cost price of the first article.",
    steps: [
      "Let CP of first article be $x$. CP of second is $4000 - x$.",
      "Profit on first = $0.20x$. Loss on second = $0.10(4000 - x)$.",
      "No overall profit/loss means Profit = Loss: $0.20x = 0.10(4000 - x)$.",
      "$0.20x = 400 - 0.10x \\implies 0.30x = 400 \\implies x = 1333.33$."
    ]
  },
  "Profit / Loss Percentage": {
    question: "If the selling price of 40 articles equals the cost price of 50 articles, what is the profit or loss percentage?",
    steps: [
      "Let CP of 1 article = $1. Then CP of 50 articles = $50.",
      "SP of 40 articles = $50. So SP of 1 article = $50/40 = $1.25.",
      "Profit on 1 article = $1.25 - $1 = $0.25.",
      "Profit % = $(0.25 / 1) \\times 100 = 25\\%$."
    ]
  },
  "Selling Price with Profit/Loss %": {
    question: "By selling an article for Rs. 1020, a man loses 15%. At what price should he sell it to gain 20%?",
    steps: [
      "Selling Price = $CP \\times (1 - 0.15) \\implies 1020 = 0.85 \\times CP$.",
      "$CP = 1020 / 0.85 = 1200$.",
      "To gain 20%, New SP = $CP \\times 1.20$.",
      "New SP = $1200 \\times 1.20 = 1440$."
    ]
  },
  "False Weight / Dishonest Dealer": {
    question: "A dishonest dealer professes to sell his goods at cost price, but he uses a false weight of 900 grams for 1 kg. What is his true gain percentage?",
    steps: [
      "He claims to sell 1000g for the price he paid for 1000g.",
      "However, he actually delivers only 900g for that price.",
      "Error = $1000 - 900 = 100g$. True weight given = 900g.",
      "Gain % = $(\\text{Error} / \\text{True Weight}) \\times 100 = (100 / 900) \\times 100 = 11.11\\%$."
    ]
  },
  "Basic Relation": {
    question: "A person covers a certain distance at 40 km/h and arrives 15 minutes late. If he travels at 50 km/h, he arrives 5 minutes early. Find the distance.",
    steps: [
      "Let distance be $D$. Difference in time = $15 + 5 = 20$ minutes = $1/3$ hour.",
      "Time taken at 40km/h = $D/40$. Time taken at 50km/h = $D/50$.",
      "$D/40 - D/50 = 1/3$",
      "$(5D - 4D)/200 = 1/3 \\implies D/200 = 1/3 \\implies D = 66.67$ km."
    ]
  },
  "Average Speed": {
    question: "A man travels from A to B at 20 km/h and returns from B to A at 30 km/h. He then travels again from A to B at 40 km/h. Find his average speed for the entire journey.",
    steps: [
      "Let distance between A and B be $LCM(20, 30, 40) = 120$ km.",
      "Time for leg 1 = $120/20 = 6$ hrs. Time for leg 2 = $120/30 = 4$ hrs. Time for leg 3 = $120/40 = 3$ hrs.",
      "Total distance = $120 \\times 3 = 360$ km. Total time = $6 + 4 + 3 = 13$ hrs.",
      "Average Speed = $360 / 13 \\approx 27.69$ km/h."
    ]
  },
  "Relative Speed (Same Direction)": {
    question: "Two trains starting at the same time from two stations 200 km apart and going in the same direction cross each other at a distance of 150 km from one of the stations. What is the ratio of their speeds?",
    steps: [
      "Wait, if they cross at 150km, the slower train traveled 150km. The faster train traveled $200 + 150 = 350$ km in the same time.",
      "Since time is constant, Ratio of speeds = Ratio of distances.",
      "Ratio = $350 / 150 = 7 : 3$."
    ]
  },
  "Relative Speed (Opposite Direction)": {
    question: "Two points A and B are 300 km apart. Train X leaves A at 8 AM at 40 km/h towards B. Train Y leaves B at 9 AM at 50 km/h towards A. At what time will they meet?",
    steps: [
      "By 9 AM, Train X has traveled $40 \\times 1 = 40$ km. Remaining distance = $260$ km.",
      "From 9 AM, they approach each other. Relative speed = $40 + 50 = 90$ km/h.",
      "Time to meet = $260 / 90 = 26/9$ hours = 2 hours 53 minutes.",
      "Meeting time = 9:00 AM + 2 hr 53 min = 11:53 AM."
    ]
  },
  "Trains crossing each other": {
    question: "Two trains of length 150m and 200m are moving in opposite directions at 60 km/h and 48 km/h. How long will it take for them to completely cross each other?",
    steps: [
      "Total distance to cross = $150 + 200 = 350$ m.",
      "Relative speed (opposite) = $60 + 48 = 108$ km/h.",
      "Convert to m/s: $108 \\times (5/18) = 30$ m/s.",
      "Time = $\\text{Distance} / \\text{Speed} = 350 / 30 = 11.67$ seconds."
    ]
  },
  "Work and Time Relation": {
    question: "A is 3 times as efficient as B and therefore able to finish a job in 60 days less than B. Working together, they can do it in how many days?",
    steps: [
      "Ratio of times taken by A and B is $1:3$.",
      "Difference in time is 2 parts. $2 \\text{ parts} = 60 \\text{ days} \\implies 1 \\text{ part} = 30 \\text{ days}$.",
      "So, A takes 30 days and B takes 90 days.",
      "Together time = $(30 \\times 90) / (30 + 90) = 2700 / 120 = 22.5$ days."
    ]
  },
  "Two Persons Working Together": {
    question: "A and B together can do a piece of work in 12 days. B and C together in 15 days, and C and A together in 20 days. In how many days can A alone do it?",
    steps: [
      "Work per day: $(A+B) = 1/12$, $(B+C) = 1/15$, $(C+A) = 1/20$.",
      "Add them: $2(A+B+C) = 1/12 + 1/15 + 1/20 = 12/60 = 1/5$.",
      "So, $(A+B+C)$'s 1 day work = $1/10$.",
      "A's 1 day work = $(A+B+C) - (B+C) = 1/10 - 1/15 = 1/30$.",
      "A alone can do it in 30 days."
    ]
  },
  "Chain Rule (MDH Formula)": {
    question: "If 12 carpenters working 6 hours a day can make 460 chairs in 240 days, how many chairs will 18 carpenters make in 360 days, working 8 hours a day?",
    steps: [
      "MDH Rule: $\\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2}$.",
      "$\\frac{12 \\times 240 \\times 6}{460} = \\frac{18 \\times 360 \\times 8}{W_2}$",
      "$\\frac{17280}{460} = \\frac{51840}{W_2} \\implies 37.56 = \\frac{51840}{W_2}$",
      "$W_2 = \\frac{51840 \\times 460}{17280} = 3 \\times 460 = 1380$ chairs."
    ]
  },
  "Permutation (Arrangement)": {
    question: "How many different 4-letter words can be formed using the letters of the word 'EQUATION' such that the word must begin with a vowel?",
    steps: [
      "EQUATION has 8 distinct letters: 5 vowels (E,U,A,I,O) and 3 consonants (Q,T,N).",
      "Place 1: Must be a vowel. Number of choices = 5.",
      "Remaining 3 places to be filled with any of the remaining 7 letters.",
      "Ways for remaining places = ${}^7P_3 = 7 \\times 6 \\times 5 = 210$.",
      "Total words = $5 \\times 210 = 1050$."
    ]
  },
  "Combination (Selection)": {
    question: "From a group of 7 men and 6 women, 5 persons are to be selected to form a committee so that at least 3 men are there. In how many ways can it be done?",
    steps: [
      "Possible cases: (3 men, 2 women), (4 men, 1 woman), or (5 men, 0 women).",
      "Case 1: ${}^7C_3 \\times {}^6C_2 = 35 \\times 15 = 525$.",
      "Case 2: ${}^7C_4 \\times {}^6C_1 = 35 \\times 6 = 210$.",
      "Case 3: ${}^7C_5 \\times {}^6C_0 = 21 \\times 1 = 21$.",
      "Total ways = $525 + 210 + 21 = 756$."
    ]
  },
  "Circular Permutation": {
    question: "In how many ways can 5 couples sit around a circular table if no two men sit together?",
    steps: [
      "First seat the 5 women around the circular table. Ways = $(5-1)! = 4! = 24$.",
      "The 5 women create 5 gaps between them.",
      "The 5 men must sit in these 5 gaps to ensure no two men are together.",
      "Ways to seat the 5 men in 5 gaps = $5! = 120$ (linear arrangement now since relative positions are fixed).",
      "Total ways = $24 \\times 120 = 2880$."
    ]
  },
  "Simple Interest (SI)": {
    question: "A sum of money invested at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. What is the principal sum?",
    steps: [
      "Since it's simple interest, the interest added each year is constant.",
      "Interest for 1 year (from year 3 to 4) = $854 - 815 = \\text{Rs. } 39$.",
      "Interest for 3 years = $39 \\times 3 = \\text{Rs. } 117$.",
      "Principal = Amount after 3 years - Interest for 3 years = $815 - 117 = \\text{Rs. } 698$."
    ]
  },
  "Amount (Simple Interest)": {
    question: "If a sum of money doubles itself in 8 years at simple interest, what is the rate of interest per annum?",
    steps: [
      "Let Principal = $P$. Then Amount $A = 2P$.",
      "Interest $I = A - P = 2P - P = P$.",
      "Using SI formula: $P = (P \\times R \\times 8) / 100$.",
      "$1 = (8R) / 100 \\implies 8R = 100 \\implies R = 12.5\\%$."
    ]
  },
  "Compound Interest (CI) Amount": {
    question: "A sum invested at CI amounts to Rs. 8820 in 2 years and Rs. 9261 in 3 years. Find the principal sum and the rate of interest.",
    steps: [
      "Interest on Rs. 8820 for 1 year = $9261 - 8820 = 441$.",
      "Rate $R = (441 / 8820) \\times 100 = 5\\%$.",
      "Now, $P \\times (1 + 5/100)^2 = 8820$.",
      "$P \\times (21/20) \\times (21/20) = 8820 \\implies P = 8820 \\times (400/441) = 8000$."
    ]
  },
  "Difference between CI and SI (2 Years)": {
    question: "The difference between compound interest and simple interest on a certain sum for 2 years at 8% per annum is Rs. 32. Find the sum.",
    steps: [
      "For 2 years, $\\text{Diff} = P \\times (R/100)^2$.",
      "$32 = P \\times (8/100)^2 = P \\times (64/10000)$.",
      "$P = (32 \\times 10000) / 64 = 5000$."
    ]
  },
  "Difference between CI and SI (3 Years)": {
    question: "The difference between CI and SI for 3 years at 10% per annum is Rs. 15.5. Find the principal sum.",
    steps: [
      "Formula: $\\text{Diff} = P \\times (R/100)^2 \\times (300 + R)/100$.",
      "$15.5 = P \\times (10/100)^2 \\times (310/100)$.",
      "$15.5 = P \\times (1/100) \\times 3.1 = 0.031 P$.",
      "$P = 15.5 / 0.031 = 500$."
    ]
  },
  "Area of a Triangle (Base & Height)": {
    question: "A triangle has an area of 150 sq cm. If its base and height are in the ratio 3:4, find its base.",
    steps: [
      "Let base = $3x$ and height = $4x$.",
      "Area = $1/2 \\times b \\times h = 1/2 \\times 3x \\times 4x = 6x^2$.",
      "$6x^2 = 150 \\implies x^2 = 25 \\implies x = 5$.",
      "Base = $3x = 3 \\times 5 = 15$ cm."
    ]
  },
  "Area of a Triangle (Heron's Formula)": {
    question: "The sides of a triangle are 13 cm, 14 cm, and 15 cm. Find the radius of its inscribed circle.",
    steps: [
      "First find Area using Heron's: $s = (13+14+15)/2 = 21$.",
      "Area = $\\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = 84$ sq cm.",
      "Conceptual leap: In-radius $r = \\text{Area} / s$.",
      "$r = 84 / 21 = 4$ cm."
    ]
  },
  "Right-Angled Triangle": {
    question: "In a right-angled triangle, the sum of the base and perpendicular is 14 cm, and its hypotenuse is 10 cm. Find the area of the triangle.",
    steps: [
      "Let base be $b$ and perpendicular be $p$. $b + p = 14$.",
      "By Pythagoras, $b^2 + p^2 = 10^2 = 100$.",
      "We know $(b+p)^2 = b^2 + p^2 + 2bp \\implies 14^2 = 100 + 2bp$.",
      "$196 = 100 + 2bp \\implies 2bp = 96 \\implies bp = 48$.",
      "Area = $1/2 \\times b \\times p = 1/2 \\times 48 = 24$ sq cm."
    ]
  },
  "Area of an Equilateral Triangle": {
    question: "If the altitude of an equilateral triangle is $\\sqrt{6}$ cm, what is its area?",
    steps: [
      "For an equilateral triangle, altitude $h = (\\sqrt{3}/2) \\times a$.",
      "$\\sqrt{6} = (\\sqrt{3}/2) \\times a \\implies a = 2\\sqrt{6}/\\sqrt{3} = 2\\sqrt{2}$.",
      "Area = $(\\sqrt{3}/4) \\times a^2 = (\\sqrt{3}/4) \\times (2\\sqrt{2})^2 = (\\sqrt{3}/4) \\times 8 = 2\\sqrt{3}$ sq cm."
    ]
  },
  "Isosceles Triangle": {
    question: "An isosceles triangle has an unequal side (base) of 8 cm. If its perimeter is 18 cm, find its area.",
    steps: [
      "Perimeter = $2a + b = 18$. Given $b = 8$.",
      "$2a + 8 = 18 \\implies 2a = 10 \\implies a = 5$ (equal sides).",
      "Height $h = \\sqrt{a^2 - (b/2)^2} = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = 3$.",
      "Area = $1/2 \\times b \\times h = 1/2 \\times 8 \\times 3 = 12$ sq cm."
    ]
  },
  "Rectangle": {
    question: "A path of uniform width runs exactly midway both horizontally and vertically across a rectangular field measuring 60m by 40m. If the area of the path is 196 sq m, find its width.",
    steps: [
      "Let width be $x$. Area of path = Area of horiz path + Area of vert path - Area of intersection.",
      "Area = $60x + 40x - x^2 = 196$.",
      "$x^2 - 100x + 196 = 0$.",
      "$(x - 98)(x - 2) = 0$. Since width cannot be 98m, $x = 2$ m."
    ]
  },
  "Square": {
    question: "If the diagonal of a square is decreased by 10%, by what percentage does the area of the square decrease?",
    steps: [
      "Area of a square in terms of diagonal $d$ is $A = d^2 / 2$.",
      "New diagonal $d' = 0.9d$.",
      "New Area $A' = (0.9d)^2 / 2 = 0.81 \\times (d^2 / 2) = 0.81 A$.",
      "Area decreases from $A$ to $0.81 A$, a decrease of 19%."
    ]
  },
  "Parallelogram": {
    question: "A parallelogram has adjacent sides 15 cm and 12 cm. If the distance between the longer sides is 8 cm, find the distance between the shorter sides.",
    steps: [
      "Area of parallelogram = base $\\times$ height.",
      "Using longer side as base: Area = $15 \\times 8 = 120$ sq cm.",
      "Using shorter side as base: Area = $12 \\times h = 120$.",
      "Height $h$ (distance between shorter sides) = $120 / 12 = 10$ cm."
    ]
  },
  "Rhombus": {
    question: "The perimeter of a rhombus is 100 cm and one of its diagonals is 40 cm. Find its area.",
    steps: [
      "Perimeter = $4a = 100 \\implies a = 25$ cm.",
      "Diagonals bisect at right angles. So $(d_1/2)^2 + (d_2/2)^2 = a^2$.",
      "$(40/2)^2 + (d_2/2)^2 = 25^2 \\implies 20^2 + (d_2/2)^2 = 625$.",
      "$(d_2/2)^2 = 625 - 400 = 225 \\implies d_2/2 = 15 \\implies d_2 = 30$.",
      "Area = $1/2 \\times d_1 \\times d_2 = 1/2 \\times 40 \\times 30 = 600$ sq cm."
    ]
  },
  "Trapezium": {
    question: "A trapezium has parallel sides of length 10 cm and 22 cm. The non-parallel sides are equal, each being 10 cm. Find the area of the trapezium.",
    steps: [
      "Drop perpendiculars from the top vertices to the bottom base. This forms a rectangle of width 10 in the middle and two identical right triangles on the sides.",
      "Base of each triangle = $(22 - 10) / 2 = 6$ cm.",
      "Height $h = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = 8$ cm.",
      "Area = $1/2 \\times (a + b) \\times h = 1/2 \\times (10 + 22) \\times 8 = 16 \\times 8 = 128$ sq cm."
    ]
  },
  "Circle (Area & Perimeter)": {
    question: "Four equal circles, each of radius $a$, touch each other. Show that the area between them is $\\frac{6}{7} a^2$ (taking $\\pi = 22/7$).",
    steps: [
      "Join the centers of the 4 circles to form a square. Side of square = $2a$.",
      "Area of square = $(2a)^2 = 4a^2$.",
      "The space between the circles lies inside the square. The square contains four quarter-circles, which make 1 full circle.",
      "Area of 1 full circle = $\\pi a^2 = \\frac{22}{7} a^2$.",
      "Area enclosed = Area of Square - Area of Circle = $4a^2 - \\frac{22}{7}a^2 = \\frac{28a^2 - 22a^2}{7} = \\frac{6}{7} a^2$."
    ]
  },
  "Cube (Volume & Surface Area)": {
    question: "A solid cube is painted blue on all its faces. It is then cut into 64 smaller cubes of equal size. How many small cubes have exactly one face painted?",
    steps: [
      "Since it's cut into 64 cubes, it is a $4 \\times 4 \\times 4$ grid (because $4^3 = 64$).",
      "Cubes with exactly 1 painted face are located in the interior of each face, not on the edges or corners.",
      "For a face of $n \\times n$, the interior cubes = $(n-2) \\times (n-2)$. Here $n=4$, so $2 \\times 2 = 4$ cubes per face.",
      "A cube has 6 faces, so total cubes with one face painted = $6 \\times 4 = 24$."
    ]
  },
  "Cuboid (Volume & Surface Area)": {
    question: "The areas of three adjacent faces of a cuboid are $x$, $y$, and $z$. If the volume of the cuboid is $V$, prove that $V^2 = xyz$.",
    steps: [
      "Let dimensions be $l, b, h$. Adjacent faces have areas: $lb = x$, $bh = y$, $hl = z$.",
      "Multiply them: $(lb)(bh)(hl) = xyz$.",
      "This simplifies to $l^2 b^2 h^2 = xyz$.",
      "Since Volume $V = lbh$, we have $(lbh)^2 = xyz \\implies V^2 = xyz$."
    ]
  },
  "Cylinder (Volume & Surface Area)": {
    question: "A well with 14m inside diameter is dug 15m deep. The earth taken out is spread evenly all around it to a width of 7m to form an embankment. Find the height of the embankment.",
    steps: [
      "Volume of earth dug out = $\\pi r^2 h = \\pi \\times 7^2 \\times 15 = 735\\pi$.",
      "The embankment is a hollow cylinder around the well. Inner radius $r = 7$, outer radius $R = 7 + 7 = 14$.",
      "Area of embankment base = $\\pi(R^2 - r^2) = \\pi(14^2 - 7^2) = \\pi(196 - 49) = 147\\pi$.",
      "Let height of embankment be $H$. Volume of embankment = Area of base $\\times H = 147\\pi \\times H$.",
      "Equate volumes: $147\\pi \\times H = 735\\pi \\implies H = 735 / 147 = 5$ meters."
    ]
  },
  "Cone (Volume & Surface Area)": {
    question: "A conical tent is to accommodate 11 persons. Each person needs 4 sq meters of space on the ground and 20 cubic meters of air to breathe. Find the height of the cone.",
    steps: [
      "Total ground area required = $11 \\times 4 = 44$ sq m. This is the base area $\\pi r^2 = 44$.",
      "Total volume required = $11 \\times 20 = 220$ cubic m.",
      "Volume of cone = $1/3 \\pi r^2 h = 220$.",
      "Substitute $\\pi r^2 = 44$: $1/3 \\times 44 \\times h = 220$.",
      "$h = (220 \\times 3) / 44 = 15$ meters."
    ]
  },
  "Sphere (Volume & Surface Area)": {
    question: "A solid metallic sphere of radius 8 cm is melted and recast into solid right circular cones of radius 2 cm and height 8 cm. How many cones are formed?",
    steps: [
      "Volume of sphere = $\\frac{4}{3} \\pi (8)^3 = \\frac{4}{3} \\pi \\times 512 = \\frac{2048}{3}\\pi$.",
      "Volume of one cone = $1/3 \\pi (2)^2 (8) = \\frac{32}{3}\\pi$.",
      "Number of cones = Volume of sphere / Volume of one cone.",
      "Number = $(\\frac{2048}{3}\\pi) / (\\frac{32}{3}\\pi) = 2048 / 32 = 64$."
    ]
  },
  "Quadratic Equation Roots": {
    question: "If $\\alpha$ and $\\beta$ are the roots of the equation $x^2 - px + q = 0$, construct an equation whose roots are $1/\\alpha$ and $1/\\beta$.",
    steps: [
      "From properties of roots: $\\alpha + \\beta = p$ and $\\alpha\\beta = q$.",
      "Sum of new roots = $1/\\alpha + 1/\\beta = (\\alpha + \\beta)/\\alpha\\beta = p/q$.",
      "Product of new roots = $(1/\\alpha) \\times (1/\\beta) = 1/q$.",
      "New equation: $x^2 - (\\text{Sum})x + (\\text{Product}) = 0$.",
      "$x^2 - (p/q)x + 1/q = 0 \\implies qx^2 - px + 1 = 0$."
    ]
  },
  "Algebraic Expansion": {
    question: "If $x + \\frac{1}{x} = 5$, find the value of $x^3 + \\frac{1}{x^3}$.",
    steps: [
      "Recall identity: $(x + \\frac{1}{x})^3 = x^3 + \\frac{1}{x^3} + 3(x)(\\frac{1}{x})(x + \\frac{1}{x})$.",
      "Substitute the given value: $5^3 = (x^3 + \\frac{1}{x^3}) + 3(1)(5)$.",
      "$125 = (x^3 + \\frac{1}{x^3}) + 15$.",
      "$x^3 + \\frac{1}{x^3} = 125 - 15 = 110$."
    ]
  },
  "Sum of First n Natural Numbers": {
    question: "A student mistakenly adds the first $n$ natural numbers, but counts one number twice, getting a sum of 800. Which number was added twice?",
    steps: [
      "Actual sum $S = n(n+1)/2$. The faulty sum is $800$. So $n(n+1)/2 < 800$, which means $n(n+1) < 1600$.",
      "Testing values: $39 \\times 40 = 1560$, so for $n=39$, $S = 1560/2 = 780$.",
      "For $n=40$, $S = 40 \\times 41/2 = 820$ (which is $> 800$, so $n=39$).",
      "The actual sum should be 780. The student got 800.",
      "Difference = $800 - 780 = 20$. The number added twice was 20."
    ]
  },
  "LCM and HCF Relation": {
    question: "The sum of two numbers is 528 and their HCF is 33. How many pairs of such numbers satisfy this condition?",
    steps: [
      "Let numbers be $33x$ and $33y$, where $x$ and $y$ are co-prime.",
      "Sum = $33x + 33y = 528 \\implies x + y = 528 / 33 = 16$.",
      "Possible co-prime pairs for $(x, y)$ that sum to 16: (1, 15), (3, 13), (5, 11), (7, 9).",
      "Even pairs like (2,14) are not co-prime. There are exactly 4 pairs satisfying the condition."
    ]
  },
  "Paternal vs Maternal": {
    question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
    steps: [
      "Break it down: 'My father's son'. Since the speaker has no siblings, 'my father's son' is the speaker himself.",
      "Substitute this back: 'that man's father is [myself]'.",
      "If the speaker is the father of the man in the photograph, the photograph must be of the speaker's son."
    ]
  },
  "In-Laws": {
    question: "A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?",
    steps: [
      "Break it down: 'brother of her mother' = her maternal uncle.",
      "The man is the 'son of her maternal uncle'.",
      "The son of a maternal uncle is a first cousin.",
      "Therefore, the man is the woman's cousin."
    ]
  },
  "Generations Tree Method": {
    question: "A is B's brother. C is D's father. E is B's mother. A and D are brothers. How is E related to C?",
    steps: [
      "A and D are brothers. A is B's brother. Therefore, A, B, and D are siblings.",
      "E is the mother of B, so E is the mother of A, B, and D.",
      "C is the father of D, so C is the father of A, B, and D.",
      "Since E is their mother and C is their father, E is the wife of C."
    ]
  },
  "Standard Directions": {
    question: "A man is facing North-West. He turns 90 degrees in the clockwise direction, then 180 degrees in the anti-clockwise direction, and then another 90 degrees in the same direction. Which direction is he facing now?",
    steps: [
      "Initial position: NW (North-West = 315° or -45°).",
      "1. +90° (Clockwise) $\\implies$ Facing NE.",
      "2. -180° (Anti-clockwise) $\\implies$ Facing SW.",
      "3. -90° (Anti-clockwise) $\\implies$ Facing SE.",
      "He is now facing South-East."
    ]
  },
  "Shortest Distance (Pythagoras)": {
    question: "Ravi travels 4 km straight towards South. He turns left and travels 6 km straight, then turns right and travels 4 km straight. How far is he from the starting point?",
    steps: [
      "Movement 1: 4km South. Position = (0, -4).",
      "Movement 2: Turns left (East) and goes 6km. Position = (6, -4).",
      "Movement 3: Turns right (South) and goes 4km. Position = (6, -8).",
      "Shortest distance = $\\sqrt{x^2 + y^2} = \\sqrt{6^2 + (-8)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ km."
    ]
  },
  "Type: All A are B": {
    question: "Statements: All cats are dogs. All dogs are birds. Conclusions: 1) All cats are birds. 2) Some birds are cats.",
    steps: [
      "Draw concentric circles: Cats inside Dogs, Dogs inside Birds.",
      "Conclusion 1: Since the 'Cats' circle is entirely inside 'Birds', All cats are birds is TRUE.",
      "Conclusion 2: The 'Cats' circle occupies a portion of the 'Birds' circle. Therefore, Some birds are cats is TRUE.",
      "Both conclusions follow."
    ]
  },
  "Type: Some A are B": {
    question: "Statements: Some papers are pens. Some pens are pencils. Conclusions: 1) Some papers are pencils. 2) No paper is a pencil.",
    steps: [
      "Venn diagram: Paper and Pen overlap. Pen and Pencil overlap. However, Paper and Pencil DO NOT necessarily overlap.",
      "Conclusion 1 (Some papers are pencils) is POSSIBLE but not DEFINITE.",
      "Conclusion 2 (No paper is a pencil) is POSSIBLE but not DEFINITE.",
      "This is an 'Either-Or' case. Either 1 is true or 2 is true, but neither is definitely true on its own."
    ]
  },
  "Type: No A is B": {
    question: "Statements: No tree is a flower. Some flowers are roots. Conclusions: 1) No tree is a root. 2) Some roots are not trees.",
    steps: [
      "Tree circle and Flower circle are completely separate. Root circle overlaps with Flower circle.",
      "The part of the Root circle that overlaps with Flower CANNOT be a Tree (since no Tree is a Flower).",
      "Therefore, Conclusion 2 (Some roots are not trees) is DEFINITELY TRUE.",
      "Conclusion 1 is uncertain because the non-flower part of Root could overlap with Tree. So only Conclusion 2 follows."
    ]
  },
  "Forward Alphabet Positional Value": {
    question: "If 'MACHINE' is coded as 19-7-9-14-15-20-11, how will you code 'DANGER'?",
    steps: [
      "Find the logic: M = 13. The code is 19. ($13+6 = 19$).",
      "A = 1. Code is 7. ($1+6 = 7$). C = 3, Code is 9 ($3+6 = 9$).",
      "The logic is: Positional value + 6.",
      "DANGER: D(4)+6=10, A(1)+6=7, N(14)+6=20, G(7)+6=13, E(5)+6=11, R(18)+6=24.",
      "Code: 10-7-20-13-11-24."
    ]
  },
  "Reverse Alphabet Positional Value": {
    question: "If Z = 52 and ACT = 48, then BAT will be equal to?",
    steps: [
      "Logic check: Z's forward value is 26. $26 \\times 2 = 52$.",
      "For ACT: A(1), C(3), T(20). Sum = 24. $24 \\times 2 = 48$.",
      "Logic is: (Sum of forward positional values) $\\times$ 2.",
      "For BAT: B(2), A(1), T(20). Sum = 23.",
      "Result = $23 \\times 2 = 46$."
    ]
  }
};
