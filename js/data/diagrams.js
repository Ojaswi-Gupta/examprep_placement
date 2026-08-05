export const DIAGRAMS_DATA = {
  "Area of a Triangle (Base & Height)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 20 80 L 80 80 L 50 20 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <rect x="50" y="75" width="5" height="5" fill="none" stroke="var(--green)" stroke-width="1" />
      <text x="50" y="95" fill="var(--text)" font-size="10" text-anchor="middle">b (Base)</text>
      <text x="55" y="55" fill="var(--green)" font-size="10">h</text>
    </svg>
  `,
  "Area of an Equilateral Triangle": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 13.4 80 L 86.6 80 L 50 16.6 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <text x="50" y="95" fill="var(--text)" font-size="10" text-anchor="middle">a</text>
      <text x="25" y="45" fill="var(--text)" font-size="10" text-anchor="end">a</text>
      <text x="75" y="45" fill="var(--text)" font-size="10" text-anchor="start">a</text>
    </svg>
  `,
  "Right-Angled Triangle": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 20 80 L 80 80 L 20 20 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <rect x="20" y="70" width="10" height="10" fill="none" stroke="var(--green)" stroke-width="1.5" />
      <text x="50" y="95" fill="var(--text)" font-size="10" text-anchor="middle">Base</text>
      <text x="10" y="50" fill="var(--text)" font-size="10" text-anchor="end">Perp</text>
      <text x="55" y="45" fill="var(--text)" font-size="10" text-anchor="start" transform="rotate(45, 55, 45)">Hypotenuse</text>
    </svg>
  `,
  "Rectangle": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <rect x="15" y="30" width="70" height="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <text x="50" y="85" fill="var(--text)" font-size="10" text-anchor="middle">l (Length)</text>
      <text x="5" y="52" fill="var(--text)" font-size="10" text-anchor="start">w</text>
    </svg>
  `,
  "Square": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <rect x="25" y="25" width="50" height="50" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="25" y1="75" x2="75" y2="25" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="50" y="90" fill="var(--text)" font-size="10" text-anchor="middle">a</text>
      <text x="15" y="52" fill="var(--text)" font-size="10" text-anchor="start">a</text>
      <text x="52" y="45" fill="var(--green)" font-size="10">d</text>
    </svg>
  `,
  "Parallelogram": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 30 80 L 90 80 L 70 30 L 10 30 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="70" y1="30" x2="70" y2="80" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <rect x="65" y="75" width="5" height="5" fill="none" stroke="var(--green)" stroke-width="1" />
      <text x="60" y="95" fill="var(--text)" font-size="10" text-anchor="middle">b (Base)</text>
      <text x="75" y="55" fill="var(--green)" font-size="10">h</text>
    </svg>
  `,
  "Trapezium": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 20 80 L 80 80 L 70 30 L 30 30 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="30" y1="30" x2="30" y2="80" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="50" y="95" fill="var(--text)" font-size="10" text-anchor="middle">Base (b)</text>
      <text x="50" y="20" fill="var(--text)" font-size="10" text-anchor="middle">Top (a)</text>
      <text x="20" y="55" fill="var(--green)" font-size="10">h</text>
    </svg>
  `,
  "Rhombus": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 50 15 L 85 50 L 50 85 L 15 50 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="15" x2="50" y2="85" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <line x1="15" y1="50" x2="85" y2="50" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="55" y="30" fill="var(--green)" font-size="10">d1</text>
      <text x="70" y="45" fill="var(--green)" font-size="10">d2</text>
      <text x="75" y="75" fill="var(--text)" font-size="10">a</text>
    </svg>
  `,
  "Circle (Area & Perimeter)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="35" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="50" cy="50" r="2" fill="var(--text)" />
      <line x1="50" y1="50" x2="85" y2="50" stroke="var(--green)" stroke-width="1.5" />
      <text x="65" y="45" fill="var(--green)" font-size="10">r</text>
    </svg>
  `,
  "Cube (Volume & Surface Area)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <rect x="30" y="40" width="40" height="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <rect x="45" y="25" width="40" height="40" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2,2" />
      <line x1="30" y1="40" x2="45" y2="25" stroke="var(--accent)" stroke-width="2" />
      <line x1="70" y1="40" x2="85" y2="25" stroke="var(--accent)" stroke-width="2" />
      <line x1="70" y1="80" x2="85" y2="65" stroke="var(--accent)" stroke-width="2" />
      <line x1="30" y1="80" x2="45" y2="65" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2,2" />
      <text x="50" y="95" fill="var(--text)" font-size="10" text-anchor="middle">a</text>
      <text x="20" y="65" fill="var(--text)" font-size="10">a</text>
    </svg>
  `,
  "Cuboid (Volume & Surface Area)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <rect x="20" y="45" width="50" height="30" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <rect x="35" y="30" width="50" height="30" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2,2" />
      <line x1="20" y1="45" x2="35" y2="30" stroke="var(--accent)" stroke-width="2" />
      <line x1="70" y1="45" x2="85" y2="30" stroke="var(--accent)" stroke-width="2" />
      <line x1="70" y1="75" x2="85" y2="60" stroke="var(--accent)" stroke-width="2" />
      <line x1="20" y1="75" x2="35" y2="60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2,2" />
      <text x="45" y="90" fill="var(--text)" font-size="10" text-anchor="middle">l</text>
      <text x="10" y="65" fill="var(--text)" font-size="10">h</text>
      <text x="80" y="75" fill="var(--text)" font-size="10">b</text>
    </svg>
  `,
  "Cylinder (Volume & Surface Area)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <ellipse cx="50" cy="25" rx="20" ry="8" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <ellipse cx="50" cy="75" rx="20" ry="8" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="0,60,65,0" />
      <path d="M 30 75 A 20 8 0 0 0 70 75" fill="none" stroke="var(--accent)" stroke-width="2" />
      <line x1="30" y1="25" x2="30" y2="75" stroke="var(--accent)" stroke-width="2" />
      <line x1="70" y1="25" x2="70" y2="75" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="25" x2="70" y2="25" stroke="var(--green)" stroke-width="1.5" />
      <line x1="50" y1="25" x2="50" y2="75" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="60" y="20" fill="var(--green)" font-size="10">r</text>
      <text x="42" y="55" fill="var(--green)" font-size="10">h</text>
    </svg>
  `,
  "Cone (Volume & Surface Area)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <ellipse cx="50" cy="80" rx="25" ry="10" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="0,75,82,0" />
      <path d="M 25 80 A 25 10 0 0 0 75 80" fill="none" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="15" x2="25" y2="80" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="15" x2="75" y2="80" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="80" x2="75" y2="80" stroke="var(--green)" stroke-width="1.5" />
      <line x1="50" y1="15" x2="50" y2="80" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="60" y="93" fill="var(--green)" font-size="10">r</text>
      <text x="40" y="55" fill="var(--green)" font-size="10">h</text>
      <text x="65" y="45" fill="var(--text)" font-size="10">l</text>
    </svg>
  `,
  "Sphere (Volume & Surface Area)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="35" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <ellipse cx="50" cy="50" rx="35" ry="12" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="5,5" />
      <path d="M 15 50 A 35 12 0 0 0 85 50" fill="none" stroke="var(--accent)" stroke-width="1.5" />
      <circle cx="50" cy="50" r="2" fill="var(--text)" />
      <line x1="50" y1="50" x2="80" y2="30" stroke="var(--green)" stroke-width="1.5" />
      <text x="60" y="35" fill="var(--green)" font-size="10">r</text>
    </svg>
  `,
  "Hemisphere (Volume & Surface Area)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 15 50 A 35 35 0 0 0 85 50 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <ellipse cx="50" cy="50" rx="35" ry="12" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="50" cy="50" r="2" fill="var(--text)" />
      <line x1="50" y1="50" x2="85" y2="50" stroke="var(--green)" stroke-width="1.5" />
      <line x1="50" y1="50" x2="50" y2="85" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="65" y="45" fill="var(--green)" font-size="10">r</text>
      <text x="40" y="70" fill="var(--green)" font-size="10">r</text>
    </svg>
  `,
  "Hollow Sphere (Spherical Shell)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.05)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="50" cy="50" r="25" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.15)" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4" />
      <circle cx="50" cy="50" r="2" fill="var(--text)" />
      <line x1="50" y1="50" x2="75" y2="50" stroke="var(--green)" stroke-width="1.5" />
      <line x1="50" y1="50" x2="78" y2="22" stroke="var(--accent)" stroke-width="1.5" />
      <text x="60" y="45" fill="var(--green)" font-size="10">r</text>
      <text x="55" y="30" fill="var(--text)" font-size="10">R</text>
    </svg>
  `,
  "Hollow Cylinder (Pipe)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <ellipse cx="50" cy="20" rx="25" ry="10" fill="none" stroke="var(--accent)" stroke-width="2" />
      <ellipse cx="50" cy="20" rx="15" ry="6" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.2)" stroke="var(--accent)" stroke-width="2" />
      <path d="M 25 80 A 25 10 0 0 0 75 80" fill="none" stroke="var(--accent)" stroke-width="2" />
      <path d="M 35 80 A 15 6 0 0 0 65 80" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4" />
      <line x1="25" y1="20" x2="25" y2="80" stroke="var(--accent)" stroke-width="2" />
      <line x1="75" y1="20" x2="75" y2="80" stroke="var(--accent)" stroke-width="2" />
      <line x1="35" y1="20" x2="35" y2="80" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2,2" />
      <line x1="65" y1="20" x2="65" y2="80" stroke="var(--accent)" stroke-width="2" stroke-dasharray="2,2" />
      <line x1="50" y1="20" x2="65" y2="20" stroke="var(--green)" stroke-width="1.5" />
      <line x1="50" y1="20" x2="75" y2="20" stroke="var(--text)" stroke-width="1.5" />
      <text x="55" y="15" fill="var(--green)" font-size="8">r</text>
      <text x="65" y="15" fill="var(--text)" font-size="8">R</text>
      <text x="15" y="55" fill="var(--green)" font-size="10">h</text>
    </svg>
  `,
  "Sector of a Circle": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 50 50 L 90 50 A 40 40 0 0 0 65 13 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <path d="M 60 50 A 10 10 0 0 0 57 40" fill="none" stroke="var(--text)" stroke-width="1" />
      <text x="65" y="45" fill="var(--text)" font-size="10">θ</text>
      <text x="70" y="60" fill="var(--green)" font-size="10">r</text>
    </svg>
  `,
  "Quadrant of a Circle": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 30 70 L 70 70 A 40 40 0 0 0 30 30 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <rect x="30" y="65" width="5" height="5" fill="none" stroke="var(--text)" stroke-width="1" />
      <text x="50" y="80" fill="var(--green)" font-size="10">r</text>
      <text x="15" y="50" fill="var(--green)" font-size="10">r</text>
    </svg>
  `,
  "Frustum of a Cone": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <ellipse cx="50" cy="25" rx="15" ry="6" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <ellipse cx="50" cy="75" rx="30" ry="12" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="0,90,95,0" />
      <path d="M 20 75 A 30 12 0 0 0 80 75" fill="none" stroke="var(--accent)" stroke-width="2" />
      <line x1="35" y1="25" x2="20" y2="75" stroke="var(--accent)" stroke-width="2" />
      <line x1="65" y1="25" x2="80" y2="75" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="25" x2="65" y2="25" stroke="var(--green)" stroke-width="1.5" />
      <line x1="50" y1="75" x2="80" y2="75" stroke="var(--text)" stroke-width="1.5" />
      <line x1="50" y1="25" x2="50" y2="75" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="55" y="20" fill="var(--green)" font-size="10">r</text>
      <text x="60" y="70" fill="var(--text)" font-size="10">R</text>
      <text x="40" y="55" fill="var(--green)" font-size="10">h</text>
      <text x="75" y="50" fill="var(--text)" font-size="10">l</text>
    </svg>
  `,
  "Regular Polygon": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <polygon points="50,10 88,37.6 73.5,82.3 26.5,82.3 12,37.6" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <text x="50" y="95" fill="var(--text)" font-size="10" text-anchor="middle">a (side length)</text>
    </svg>
  `,
  "Incircle Radius (Inradius)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 20 80 L 80 80 L 50 20 Z" fill="none" stroke="var(--accent)" stroke-width="2" />
      <circle cx="50" cy="62.67" r="17.33" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--green)" stroke-width="2" />
      <line x1="50" y1="62.67" x2="50" y2="80" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="2" />
      <text x="45" y="75" fill="var(--text)" font-size="10">r</text>
    </svg>
  `,
  "Circumcircle Radius (Circumradius)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="55" r="35" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--green)" stroke-width="2" />
      <path d="M 18.2 70 L 81.8 70 L 50 20 Z" fill="none" stroke="var(--accent)" stroke-width="2" />
      <line x1="50" y1="55" x2="18.2" y2="70" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="2" />
      <text x="35" y="55" fill="var(--text)" font-size="10">R</text>
      <circle cx="50" cy="55" r="1.5" fill="var(--text)" />
    </svg>
  `,
  "Direct Common Tangent (DCT)": `
    <svg viewBox="0 0 150 100" width="100%" height="120" style="max-width: 250px;">
      <!-- Circles -->
      <circle cx="40" cy="50" r="30" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="110" cy="50" r="15" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <!-- Tangent Line -->
      <line x1="40" y1="20" x2="110" y2="35" stroke="var(--green)" stroke-width="2" />
      <!-- Radii -->
      <line x1="40" y1="50" x2="40" y2="20" stroke="var(--text)" stroke-width="1" stroke-dasharray="2" />
      <line x1="110" y1="50" x2="110" y2="35" stroke="var(--text)" stroke-width="1" stroke-dasharray="2" />
      <!-- Distance d -->
      <line x1="40" y1="50" x2="110" y2="50" stroke="var(--text)" stroke-width="1" />
      <text x="75" y="65" fill="var(--text)" font-size="10" text-anchor="middle">d</text>
      <text x="30" y="40" fill="var(--text)" font-size="10">R</text>
      <text x="115" y="45" fill="var(--text)" font-size="10">r</text>
      <text x="75" y="15" fill="var(--green)" font-size="10" text-anchor="middle">DCT</text>
    </svg>
  `
};
