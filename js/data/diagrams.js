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
  `,
  "Transverse Common Tangent (TCT)": `
    <svg viewBox="0 0 150 100" width="100%" height="120" style="max-width: 250px;">
      <circle cx="40" cy="50" r="30" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="110" cy="50" r="15" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="40" y1="20" x2="110" y2="65" stroke="var(--green)" stroke-width="2" />
      <line x1="40" y1="50" x2="40" y2="20" stroke="var(--text)" stroke-width="1" stroke-dasharray="2" />
      <line x1="110" y1="50" x2="110" y2="65" stroke="var(--text)" stroke-width="1" stroke-dasharray="2" />
      <line x1="40" y1="50" x2="110" y2="50" stroke="var(--text)" stroke-width="1" />
      <text x="75" y="45" fill="var(--text)" font-size="10" text-anchor="middle">d</text>
      <text x="30" y="40" fill="var(--text)" font-size="10">R</text>
      <text x="115" y="65" fill="var(--text)" font-size="10">r</text>
      <text x="75" y="25" fill="var(--green)" font-size="10" text-anchor="middle">TCT</text>
    </svg>
  `,
  "Relative Speed (Same Direction)": `
    <svg viewBox="0 0 150 100" width="100%" height="100" style="max-width: 250px;">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--text)" />
        </marker>
      </defs>
      <line x1="20" y1="30" x2="100" y2="30" stroke="var(--accent)" stroke-width="4" marker-end="url(#arrow)" />
      <line x1="20" y1="70" x2="130" y2="70" stroke="var(--green)" stroke-width="4" marker-end="url(#arrow)" />
      <text x="60" y="20" fill="var(--text)" font-size="12">S1</text>
      <text x="75" y="60" fill="var(--text)" font-size="12">S2</text>
    </svg>
  `,
  "Relative Speed (Opposite Direction)": `
    <svg viewBox="0 0 150 100" width="100%" height="100" style="max-width: 250px;">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--text)" />
        </marker>
      </defs>
      <line x1="20" y1="50" x2="60" y2="50" stroke="var(--accent)" stroke-width="4" marker-end="url(#arrow)" />
      <line x1="130" y1="50" x2="90" y2="50" stroke="var(--green)" stroke-width="4" marker-end="url(#arrow)" />
      <text x="40" y="40" fill="var(--text)" font-size="12">S1</text>
      <text x="110" y="40" fill="var(--text)" font-size="12">S2</text>
    </svg>
  `,
  "Type: All A are B": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="50" cy="50" r="20" fill="rgba(46, 204, 113, 0.2)" stroke="var(--green)" stroke-width="2" />
      <text x="50" y="54" fill="var(--text)" font-size="12" text-anchor="middle">A</text>
      <text x="50" y="25" fill="var(--text)" font-size="12" text-anchor="middle">B</text>
    </svg>
  `,
  "Type: Some A are B": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="35" cy="50" r="25" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="65" cy="50" r="25" fill="rgba(46, 204, 113, 0.2)" stroke="var(--green)" stroke-width="2" />
      <text x="25" y="54" fill="var(--text)" font-size="12" text-anchor="middle">A</text>
      <text x="75" y="54" fill="var(--text)" font-size="12" text-anchor="middle">B</text>
    </svg>
  `,
  "Type: No A is B": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="25" cy="50" r="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="75" cy="50" r="20" fill="rgba(46, 204, 113, 0.2)" stroke="var(--green)" stroke-width="2" />
      <text x="25" y="54" fill="var(--text)" font-size="12" text-anchor="middle">A</text>
      <text x="75" y="54" fill="var(--text)" font-size="12" text-anchor="middle">B</text>
      <line x1="45" y1="45" x2="55" y2="55" stroke="var(--text)" stroke-width="2" />
      <line x1="55" y1="45" x2="45" y2="55" stroke="var(--text)" stroke-width="2" />
    </svg>
  `,
  "Standard Directions": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <line x1="50" y1="10" x2="50" y2="90" stroke="var(--text)" stroke-width="2" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="var(--text)" stroke-width="2" />
      <text x="50" y="8" fill="var(--accent)" font-size="12" text-anchor="middle">N</text>
      <text x="50" y="100" fill="var(--accent)" font-size="12" text-anchor="middle">S</text>
      <text x="96" y="54" fill="var(--accent)" font-size="12" text-anchor="middle">E</text>
      <text x="4" y="54" fill="var(--accent)" font-size="12" text-anchor="middle">W</text>
    </svg>
  `,
  "Two Circles: Relative Positions": `
    <svg viewBox="0 0 200 100" width="100%" height="100" style="max-width: 300px;">
      <!-- Disjoint -->
      <circle cx="30" cy="45" r="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="1" />
      <circle cx="70" cy="45" r="10" fill="none" stroke="var(--green)" stroke-width="1" />
      <!-- Touch Externally -->
      <circle cx="130" cy="45" r="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="1" />
      <circle cx="160" cy="45" r="10" fill="none" stroke="var(--green)" stroke-width="1" />
      <text x="50" y="85" fill="var(--text)" font-size="10" text-anchor="middle">Disjoint (d > R+r)</text>
      <text x="145" y="85" fill="var(--text)" font-size="10" text-anchor="middle">Touch Externally (d = R+r)</text>
    </svg>
  `,
  "Chord Properties": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="20" y1="70" x2="80" y2="70" stroke="var(--green)" stroke-width="2" />
      <line x1="50" y1="50" x2="50" y2="70" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="3" />
      <circle cx="50" cy="50" r="2" fill="var(--text)" />
      <rect x="50" y="66" width="4" height="4" fill="none" stroke="var(--text)" stroke-width="1" />
      <text x="50" y="45" fill="var(--text)" font-size="10" text-anchor="middle">O</text>
      <text x="15" y="75" fill="var(--green)" font-size="10">A</text>
      <text x="85" y="75" fill="var(--green)" font-size="10">B</text>
      <text x="55" y="80" fill="var(--text)" font-size="10">M</text>
    </svg>
  `,
  "Angles in a Circle": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <path d="M 20 75 L 50 50 L 80 75" fill="none" stroke="var(--text)" stroke-width="1.5" />
      <path d="M 20 75 L 50 10 L 80 75" fill="none" stroke="var(--green)" stroke-width="1.5" />
      <circle cx="50" cy="50" r="2" fill="var(--text)" />
      <text x="50" y="65" fill="var(--text)" font-size="10" text-anchor="middle">2x</text>
      <text x="50" y="25" fill="var(--green)" font-size="10" text-anchor="middle">x</text>
    </svg>
  `,
  "Intersecting Chords Theorem": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="20" y1="25" x2="80" y2="75" stroke="var(--green)" stroke-width="2" />
      <line x1="20" y1="75" x2="80" y2="25" stroke="var(--green)" stroke-width="2" />
      <circle cx="50" cy="50" r="2" fill="var(--text)" />
      <text x="50" y="45" fill="var(--text)" font-size="10" text-anchor="middle">P</text>
      <text x="15" y="20" fill="var(--green)" font-size="10">A</text>
      <text x="85" y="85" fill="var(--green)" font-size="10">B</text>
      <text x="15" y="85" fill="var(--green)" font-size="10">C</text>
      <text x="85" y="20" fill="var(--green)" font-size="10">D</text>
    </svg>
  `,
  "Tangent-Secant Theorem": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="60" cy="50" r="30" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="10" y1="20" x2="60" y2="20" stroke="var(--green)" stroke-width="2" />
      <line x1="10" y1="20" x2="90" y2="50" stroke="var(--green)" stroke-width="2" />
      <text x="5" y="20" fill="var(--text)" font-size="10">P</text>
      <text x="65" y="15" fill="var(--green)" font-size="10">T</text>
      <text x="35" y="45" fill="var(--green)" font-size="10">A</text>
      <text x="95" y="55" fill="var(--green)" font-size="10">B</text>
    </svg>
  `,
  "Alternate Segment Theorem": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="10" y1="90" x2="90" y2="90" stroke="var(--green)" stroke-width="2" />
      <path d="M 50 90 L 20 40 L 80 40 Z" fill="none" stroke="var(--text)" stroke-width="1.5" />
      <text x="50" y="100" fill="var(--green)" font-size="10" text-anchor="middle">P (Tangent point)</text>
      <text x="40" y="85" fill="var(--accent)" font-size="10">θ</text>
      <text x="70" y="50" fill="var(--accent)" font-size="10">θ</text>
    </svg>
  `,
  "Shortest Distance (Pythagoras)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 20 80 L 80 80 L 80 20 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <rect x="75" y="75" width="5" height="5" fill="none" stroke="var(--accent)" stroke-width="1" />
      <text x="50" y="95" fill="var(--text)" font-size="10" text-anchor="middle">Base</text>
      <text x="95" y="50" fill="var(--text)" font-size="10" text-anchor="middle">Perp</text>
      <text x="40" y="45" fill="var(--green)" font-size="10" text-anchor="middle">Hypotenuse</text>
    </svg>
  `,
  "Pipes & Cisterns": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--text)" />
        </marker>
      </defs>
      <path d="M 30 30 L 30 80 L 70 80 L 70 30" fill="none" stroke="var(--text)" stroke-width="2" />
      <rect x="32" y="50" width="36" height="28" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.3)" />
      <!-- Inlet -->
      <line x1="20" y1="20" x2="40" y2="40" stroke="var(--green)" stroke-width="3" marker-end="url(#arrow)" />
      <text x="20" y="15" fill="var(--green)" font-size="10">Inlet (+)</text>
      <!-- Outlet -->
      <line x1="60" y1="75" x2="90" y2="90" stroke="var(--accent)" stroke-width="3" marker-end="url(#arrow)" />
      <text x="80" y="98" fill="var(--accent)" font-size="10">Outlet (-)</text>
    </svg>
  `,
  "Angle Between Clock Hands": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--text)" stroke-width="2" />
      <circle cx="50" cy="50" r="3" fill="var(--text)" />
      <!-- Minute Hand -->
      <line x1="50" y1="50" x2="50" y2="20" stroke="var(--accent)" stroke-width="2" />
      <!-- Hour Hand -->
      <line x1="50" y1="50" x2="70" y2="60" stroke="var(--green)" stroke-width="3" />
      <path d="M 50 35 A 15 15 0 0 1 58 52" fill="none" stroke="var(--text)" stroke-width="1" stroke-dasharray="2" />
      <text x="60" y="40" fill="var(--text)" font-size="10">θ</text>
    </svg>
  `,
  "Apollonius Theorem": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <!-- Triangle ABC -->
      <path d="M 50 20 L 20 80 L 80 80 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <!-- Median AD -->
      <line x1="50" y1="20" x2="50" y2="80" stroke="var(--green)" stroke-width="2" stroke-dasharray="4" />
      <!-- Labels -->
      <text x="50" y="15" fill="var(--text)" font-size="10" text-anchor="middle">A</text>
      <text x="15" y="85" fill="var(--text)" font-size="10" text-anchor="middle">B</text>
      <text x="85" y="85" fill="var(--text)" font-size="10" text-anchor="middle">C</text>
      <text x="50" y="92" fill="var(--green)" font-size="10" text-anchor="middle">D (Midpoint)</text>
      <!-- Tick marks for midpoint -->
      <line x1="33" y1="78" x2="33" y2="82" stroke="var(--text)" stroke-width="1.5" />
      <line x1="37" y1="78" x2="37" y2="82" stroke="var(--text)" stroke-width="1.5" />
      <line x1="63" y1="78" x2="63" y2="82" stroke="var(--text)" stroke-width="1.5" />
      <line x1="67" y1="78" x2="67" y2="82" stroke="var(--text)" stroke-width="1.5" />
    </svg>
  `,
  "Trains crossing each other": `
    <svg viewBox="0 0 200 100" width="100%" height="100" style="max-width: 250px;">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--text)" />
        </marker>
      </defs>
      <rect x="20" y="30" width="50" height="15" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.3)" stroke="var(--accent)" stroke-width="2" />
      <text x="45" y="42" fill="var(--text)" font-size="10" text-anchor="middle">L1 (S1)</text>
      <rect x="130" y="55" width="40" height="15" fill="rgba(46, 204, 113, 0.3)" stroke="var(--green)" stroke-width="2" />
      <text x="150" y="67" fill="var(--text)" font-size="10" text-anchor="middle">L2 (S2)</text>
      <line x1="75" y1="37" x2="100" y2="37" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="125" y1="62" x2="100" y2="62" stroke="var(--green)" stroke-width="2" marker-end="url(#arrow)" />
    </svg>
  `,
  "Boats & Streams": `
    <svg viewBox="0 0 150 100" width="100%" height="120" style="max-width: 200px;">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--text)" />
        </marker>
      </defs>
      <!-- Stream (Water) -->
      <path d="M 10 70 Q 30 60 50 70 T 90 70 T 130 70" fill="none" stroke="var(--accent)" stroke-width="2" opacity="0.5" />
      <path d="M 20 80 Q 40 70 60 80 T 100 80 T 140 80" fill="none" stroke="var(--accent)" stroke-width="2" opacity="0.5" />
      <!-- Boat -->
      <path d="M 40 60 L 100 60 L 90 70 L 50 70 Z" fill="rgba(46,204,113, 0.3)" stroke="var(--green)" stroke-width="2" />
      <line x1="70" y1="40" x2="70" y2="60" stroke="var(--text)" stroke-width="2" />
      <polygon points="70,40 90,50 70,60" fill="var(--text)" />
      <!-- Speed vectors -->
      <line x1="105" y1="55" x2="135" y2="55" stroke="var(--green)" stroke-width="2" marker-end="url(#arrow)" />
      <text x="120" y="50" fill="var(--green)" font-size="10" text-anchor="middle">v (Boat)</text>
      <line x1="105" y1="85" x2="135" y2="85" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow)" />
      <text x="120" y="95" fill="var(--accent)" font-size="10" text-anchor="middle">u (Stream)</text>
    </svg>
  `,
  "Circular Tracks (Meeting)": `
    <svg viewBox="0 0 150 150" width="100%" height="150" style="max-width: 200px;">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--text)" />
        </marker>
      </defs>
      <circle cx="75" cy="75" r="50" fill="none" stroke="var(--text)" stroke-width="2" stroke-dasharray="4" />
      <circle cx="75" cy="25" r="4" fill="var(--text)" />
      <text x="75" y="15" fill="var(--text)" font-size="10" text-anchor="middle">Start</text>
      <path d="M 75 20 A 55 55 0 0 1 125 55" fill="none" stroke="var(--accent)" stroke-width="3" marker-end="url(#arrow)" />
      <text x="135" y="40" fill="var(--accent)" font-size="10">S1</text>
      <path d="M 70 25 A 45 45 0 0 0 35 55" fill="none" stroke="var(--green)" stroke-width="3" marker-end="url(#arrow)" />
      <text x="15" y="40" fill="var(--green)" font-size="10">S2</text>
    </svg>
  `,
  "Rule of Alligation": `
    <svg viewBox="0 0 150 120" width="100%" height="150" style="max-width: 250px;">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--text)" />
        </marker>
      </defs>
      <text x="20" y="20" fill="var(--accent)" font-size="12" text-anchor="middle">C</text>
      <text x="130" y="20" fill="var(--green)" font-size="12" text-anchor="middle">D</text>
      <text x="75" y="65" fill="var(--text)" font-size="12" text-anchor="middle">M</text>
      <text x="20" y="110" fill="var(--green)" font-size="10" text-anchor="middle">D - M</text>
      <text x="130" y="110" fill="var(--accent)" font-size="10" text-anchor="middle">M - C</text>
      <line x1="30" y1="30" x2="65" y2="55" stroke="var(--text)" stroke-width="1.5" />
      <line x1="120" y1="30" x2="85" y2="55" stroke="var(--text)" stroke-width="1.5" />
      <line x1="65" y1="75" x2="30" y2="100" stroke="var(--text)" stroke-width="1.5" marker-end="url(#arrow)" />
      <line x1="85" y1="75" x2="120" y2="100" stroke="var(--text)" stroke-width="1.5" marker-end="url(#arrow)" />
    </svg>
  `,
  "Coordinate Geometry (Distance & Area)": `
    <svg viewBox="0 0 150 150" width="100%" height="150" style="max-width: 200px;">
      <!-- Axes -->
      <line x1="20" y1="120" x2="140" y2="120" stroke="var(--text)" stroke-width="1" />
      <line x1="30" y1="10" x2="30" y2="130" stroke="var(--text)" stroke-width="1" />
      <!-- Points -->
      <circle cx="50" cy="90" r="3" fill="var(--accent)" />
      <text x="45" y="85" fill="var(--accent)" font-size="10">P1</text>
      <circle cx="110" cy="40" r="3" fill="var(--green)" />
      <text x="115" y="35" fill="var(--green)" font-size="10">P2</text>
      <!-- Line -->
      <line x1="50" y1="90" x2="110" y2="40" stroke="var(--text)" stroke-width="2" stroke-dasharray="4" />
      <text x="85" y="60" fill="var(--text)" font-size="10" text-anchor="middle">d</text>
    </svg>
  `,
  "Generations Tree Method": `
    <svg viewBox="0 0 150 150" width="100%" height="150" style="max-width: 200px;">
      <!-- Gen 1 -->
      <rect x="40" y="10" width="20" height="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.2)" stroke="var(--accent)" stroke-width="2" />
      <circle cx="90" cy="20" r="10" fill="rgba(46,204,113, 0.2)" stroke="var(--green)" stroke-width="2" />
      <line x1="60" y1="20" x2="80" y2="20" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="2" /> 
      
      <!-- Gen 2 -->
      <line x1="70" y1="20" x2="70" y2="60" stroke="var(--text)" stroke-width="1.5" />
      <line x1="40" y1="60" x2="100" y2="60" stroke="var(--text)" stroke-width="1.5" />
      
      <circle cx="40" cy="80" r="10" fill="rgba(46,204,113, 0.2)" stroke="var(--green)" stroke-width="2" />
      <line x1="40" y1="60" x2="40" y2="70" stroke="var(--text)" stroke-width="1.5" />
      
      <rect x="90" y="70" width="20" height="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.2)" stroke="var(--accent)" stroke-width="2" />
      <line x1="100" y1="60" x2="100" y2="70" stroke="var(--text)" stroke-width="1.5" />
      
      <text x="70" y="120" fill="var(--text)" font-size="10" text-anchor="middle">■ Male   ● Female</text>
    </svg>
  `,
  "Tangents from an External Point": `
    <svg viewBox="0 0 150 120" width="100%" height="150" style="max-width: 250px;">
      <circle cx="100" cy="60" r="40" fill="none" stroke="var(--accent)" stroke-width="2" />
      <circle cx="100" cy="60" r="2" fill="var(--text)" />
      <text x="110" y="65" fill="var(--text)" font-size="10">O</text>
      <!-- Point P -->
      <circle cx="20" cy="60" r="3" fill="var(--text)" />
      <text x="10" y="65" fill="var(--text)" font-size="10">P</text>
      <!-- Tangents -->
      <line x1="20" y1="60" x2="80" y2="25" stroke="var(--green)" stroke-width="2" />
      <line x1="20" y1="60" x2="80" y2="95" stroke="var(--green)" stroke-width="2" />
      <!-- Radii to tangency points -->
      <line x1="100" y1="60" x2="80" y2="25" stroke="var(--text)" stroke-width="1" stroke-dasharray="2" />
      <line x1="100" y1="60" x2="80" y2="95" stroke="var(--text)" stroke-width="1" stroke-dasharray="2" />
      <!-- Labels -->
      <text x="85" y="20" fill="var(--text)" font-size="10">A</text>
      <text x="85" y="110" fill="var(--text)" font-size="10">B</text>
      <!-- 90 deg markers -->
      <path d="M 80 32 L 87 35 L 90 28" fill="none" stroke="var(--text)" stroke-width="1" />
      <path d="M 80 88 L 87 85 L 90 92" fill="none" stroke="var(--text)" stroke-width="1" />
    </svg>
  `,
  "Isosceles Triangle": `
    <svg viewBox="0 0 100 120" width="100%" height="150" style="max-width: 200px;">
      <path d="M 50 20 L 20 90 L 80 90 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="30" y1="55" x2="38" y2="52" stroke="var(--text)" stroke-width="2" />
      <line x1="70" y1="55" x2="62" y2="52" stroke="var(--text)" stroke-width="2" />
      <text x="25" y="50" fill="var(--text)" font-size="10">a</text>
      <text x="70" y="50" fill="var(--text)" font-size="10">a</text>
      <text x="50" y="105" fill="var(--text)" font-size="10" text-anchor="middle">b (Base)</text>
    </svg>
  `,
  "Sine and Cosine Rules": `
    <svg viewBox="0 0 120 120" width="100%" height="150" style="max-width: 200px;">
      <path d="M 20 90 L 100 90 L 60 20 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <text x="60" y="15" fill="var(--text)" font-size="10" text-anchor="middle">A</text>
      <text x="10" y="100" fill="var(--text)" font-size="10">B</text>
      <text x="105" y="100" fill="var(--text)" font-size="10">C</text>
      <text x="60" y="105" fill="var(--green)" font-size="10" text-anchor="middle">a</text>
      <text x="30" y="50" fill="var(--green)" font-size="10">c</text>
      <text x="85" y="50" fill="var(--green)" font-size="10">b</text>
    </svg>
  `,
  "Area of a Triangle (Heron's Formula)": `
    <svg viewBox="0 0 120 120" width="100%" height="150" style="max-width: 200px;">
      <path d="M 20 90 L 110 90 L 50 30 Z" fill="none" stroke="var(--accent)" stroke-width="2" />
      <text x="65" y="105" fill="var(--text)" font-size="10" text-anchor="middle">a</text>
      <text x="25" y="55" fill="var(--text)" font-size="10">b</text>
      <text x="85" y="55" fill="var(--text)" font-size="10">c</text>
    </svg>
  `,
  "Forward Alphabet Positional Value": `
    <svg viewBox="0 0 200 60" width="100%" height="60" style="max-width: 300px;">
      <rect x="10" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1" />
      <text x="25" y="30" fill="var(--text)" font-size="12" text-anchor="middle">A</text>
      <text x="25" y="55" fill="var(--accent)" font-size="10" text-anchor="middle">1</text>
      
      <rect x="50" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1" />
      <text x="65" y="30" fill="var(--text)" font-size="12" text-anchor="middle">B</text>
      <text x="65" y="55" fill="var(--accent)" font-size="10" text-anchor="middle">2</text>
      
      <text x="100" y="30" fill="var(--text)" font-size="14" text-anchor="middle">...</text>
      
      <rect x="120" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1" />
      <text x="135" y="30" fill="var(--text)" font-size="12" text-anchor="middle">Y</text>
      <text x="135" y="55" fill="var(--accent)" font-size="10" text-anchor="middle">25</text>
      
      <rect x="160" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1" />
      <text x="175" y="30" fill="var(--text)" font-size="12" text-anchor="middle">Z</text>
      <text x="175" y="55" fill="var(--accent)" font-size="10" text-anchor="middle">26</text>
    </svg>
  `,
  "Reverse Alphabet Positional Value": `
    <svg viewBox="0 0 200 60" width="100%" height="60" style="max-width: 300px;">
      <rect x="10" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--green)" stroke-width="1" />
      <text x="25" y="30" fill="var(--text)" font-size="12" text-anchor="middle">Z</text>
      <text x="25" y="55" fill="var(--green)" font-size="10" text-anchor="middle">1</text>
      
      <rect x="50" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--green)" stroke-width="1" />
      <text x="65" y="30" fill="var(--text)" font-size="12" text-anchor="middle">Y</text>
      <text x="65" y="55" fill="var(--green)" font-size="10" text-anchor="middle">2</text>
      
      <text x="100" y="30" fill="var(--text)" font-size="14" text-anchor="middle">...</text>
      
      <rect x="120" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--green)" stroke-width="1" />
      <text x="135" y="30" fill="var(--text)" font-size="12" text-anchor="middle">B</text>
      <text x="135" y="55" fill="var(--green)" font-size="10" text-anchor="middle">25</text>
      
      <rect x="160" y="10" width="30" height="30" rx="4" fill="var(--surface-2)" stroke="var(--green)" stroke-width="1" />
      <text x="175" y="30" fill="var(--text)" font-size="12" text-anchor="middle">A</text>
      <text x="175" y="55" fill="var(--green)" font-size="10" text-anchor="middle">26</text>
    </svg>
  `,
  "Clock Hands Coincide (0°)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--text)" stroke-width="2" />
      <circle cx="50" cy="50" r="3" fill="var(--text)" />
      <!-- Overlapping at angle -->
      <line x1="50" y1="50" x2="70" y2="20" stroke="var(--green)" stroke-width="4" />
      <line x1="50" y1="50" x2="75" y2="12.5" stroke="var(--accent)" stroke-width="2" />
      <text x="50" y="90" fill="var(--text)" font-size="10" text-anchor="middle">θ = 0°</text>
    </svg>
  `,
  "Clock Hands Opposite (180°)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--text)" stroke-width="2" />
      <circle cx="50" cy="50" r="3" fill="var(--text)" />
      <!-- Opposite -->
      <line x1="50" y1="50" x2="70" y2="20" stroke="var(--green)" stroke-width="3" />
      <line x1="50" y1="50" x2="30" y2="80" stroke="var(--accent)" stroke-width="2" />
      <text x="50" y="90" fill="var(--text)" font-size="10" text-anchor="middle">θ = 180°</text>
    </svg>
  `,
  "Clock Hands at Right Angle (90°)": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--text)" stroke-width="2" />
      <circle cx="50" cy="50" r="3" fill="var(--text)" />
      <!-- 90 deg -->
      <line x1="50" y1="50" x2="80" y2="50" stroke="var(--green)" stroke-width="3" />
      <line x1="50" y1="50" x2="50" y2="15" stroke="var(--accent)" stroke-width="2" />
      <path d="M 50 40 L 60 40 L 60 50" fill="none" stroke="var(--text)" stroke-width="1" />
      <text x="50" y="90" fill="var(--text)" font-size="10" text-anchor="middle">θ = 90°</text>
    </svg>
  `,
  "Calendar Repetition": `
    <svg viewBox="0 0 200 100" width="100%" height="100" style="max-width: 300px;">
      <rect x="10" y="30" width="50" height="40" rx="4" fill="rgba(46,204,113, 0.2)" stroke="var(--green)" stroke-width="1" />
      <text x="35" y="50" fill="var(--text)" font-size="10" text-anchor="middle">Leap Yr</text>
      <text x="35" y="65" fill="var(--green)" font-size="10" text-anchor="middle">+28 Yrs</text>
      
      <rect x="75" y="30" width="50" height="40" rx="4" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.2)" stroke="var(--accent)" stroke-width="1" />
      <text x="100" y="50" fill="var(--text)" font-size="10" text-anchor="middle">Leap + 1</text>
      <text x="100" y="65" fill="var(--accent)" font-size="10" text-anchor="middle">+6 Yrs</text>
      
      <rect x="140" y="30" width="50" height="40" rx="4" fill="rgba(255,255,255, 0.1)" stroke="var(--text)" stroke-width="1" />
      <text x="165" y="50" fill="var(--text)" font-size="10" text-anchor="middle">Leap + 2/3</text>
      <text x="165" y="65" fill="var(--text)" font-size="10" text-anchor="middle">+11 Yrs</text>
    </svg>
  `,

  "Prism": `
  <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
    <!-- Triangular Prism -->
    <path d="M 50 10 L 20 40 L 80 40 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
    <path d="M 50 60 L 20 90 L 80 90 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
    <line x1="50" y1="10" x2="50" y2="60" stroke="var(--accent)" stroke-width="2" />
    <line x1="20" y1="40" x2="20" y2="90" stroke="var(--accent)" stroke-width="2" />
    <line x1="80" y1="40" x2="80" y2="90" stroke="var(--accent)" stroke-width="2" />
    <text x="30" y="65" fill="var(--text)" font-size="8">h</text>
  </svg>
  `,
  "Pyramid": `
  <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
    <!-- Square Pyramid -->
    <path d="M 20 70 L 80 70 L 90 90 L 30 90 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" />
    <path d="M 55 20 L 20 70" stroke="var(--accent)" stroke-width="2" />
    <path d="M 55 20 L 80 70" stroke="var(--accent)" stroke-width="2" />
    <path d="M 55 20 L 90 90" stroke="var(--accent)" stroke-width="2" />
    <path d="M 55 20 L 30 90" stroke="var(--accent)" stroke-width="2" />
    <line x1="55" y1="20" x2="55" y2="80" stroke="var(--green)" stroke-width="1" stroke-dasharray="2,2" />
    <text x="58" y="50" fill="var(--text)" font-size="8">h</text>
  </svg>
  `,
  "Regular Tetrahedron": `
  <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
    <!-- Tetrahedron -->
    <path d="M 50 15 L 15 85 L 85 85 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" />
    <line x1="50" y1="15" x2="50" y2="65" stroke="var(--accent)" stroke-width="2" />
    <path d="M 15 85 L 50 65 L 85 85" stroke="var(--green)" stroke-width="1" stroke-dasharray="2,2" />
  </svg>
  `,
  "Shadows & Sun Position": `
  <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
    <!-- Sun & Shadow -->
    <circle cx="80" cy="20" r="10" fill="var(--accent)" />
    <line x1="70" y1="30" x2="50" y2="50" stroke="var(--accent)" stroke-width="2" />
    <rect x="40" y="50" width="10" height="40" fill="var(--text)" />
    <rect x="10" y="85" width="30" height="5" fill="var(--green)" />
    <text x="10" y="80" fill="var(--text)" font-size="8">Shadow</text>
  </svg>
  `,
  "Only a Few / Only A are B": `
  <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
    <!-- Syllogism Venn Diagram -->
    <circle cx="50" cy="50" r="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
    <circle cx="50" cy="50" r="20" fill="rgba(var(--green-rgb, 16, 185, 129), 0.2)" stroke="var(--green)" stroke-width="2" />
    <text x="45" y="30" fill="var(--text)" font-size="12">A</text>
    <text x="45" y="55" fill="var(--text)" font-size="12">B</text>
  </svg>
  `,
  "Opposite Letter Pairs": `
  <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
    <text x="10" y="30" fill="var(--text)" font-size="12">A (1)</text>
    <path d="M 45 26 L 55 26 M 55 26 L 50 21 M 55 26 L 50 31 M 45 26 L 50 21 M 45 26 L 50 31" stroke="var(--accent)" stroke-width="1.5" fill="none" />
    <text x="60" y="30" fill="var(--text)" font-size="12">Z (26)</text>

    <text x="10" y="60" fill="var(--text)" font-size="12">B (2)</text>
    <path d="M 45 56 L 55 56 M 55 56 L 50 51 M 55 56 L 50 61 M 45 56 L 50 51 M 45 56 L 50 61" stroke="var(--accent)" stroke-width="1.5" fill="none" />
    <text x="60" y="60" fill="var(--text)" font-size="12">Y (25)</text>

    <text x="25" y="90" fill="var(--green)" font-size="10">Sum = 27</text>
  </svg>
  `,
  "Prism (Volume & Surface Area)": `
    <svg viewBox="0 0 120 110" width="100%" height="150" style="max-width: 220px;">
      <path d="M 30 85 L 80 85 L 95 55 L 45 55 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <path d="M 30 85 L 30 35 L 45 5 L 45 55" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.05)" stroke="var(--accent)" stroke-width="2" />
      <path d="M 80 85 L 80 35 L 95 5 L 95 55" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.05)" stroke="var(--accent)" stroke-width="2" />
      <path d="M 30 35 L 80 35 L 95 5 L 45 5 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.08)" stroke="var(--accent)" stroke-width="2" />
      <line x1="105" y1="55" x2="105" y2="85" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <text x="110" y="73" fill="var(--green)" font-size="10">h</text>
      <text x="50" y="100" fill="var(--text)" font-size="10" text-anchor="middle">Base</text>
    </svg>
  `,
  "Pyramid (Volume & Surface Area)": `
    <svg viewBox="0 0 120 110" width="100%" height="150" style="max-width: 220px;">
      <path d="M 20 90 L 100 90 L 80 60 L 40 60 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="60" y1="10" x2="20" y2="90" stroke="var(--accent)" stroke-width="2" />
      <line x1="60" y1="10" x2="100" y2="90" stroke="var(--accent)" stroke-width="2" />
      <line x1="60" y1="10" x2="80" y2="60" stroke="var(--accent)" stroke-width="2" />
      <line x1="60" y1="10" x2="40" y2="60" stroke="var(--accent)" stroke-width="2" />
      <line x1="60" y1="10" x2="60" y2="75" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="4" />
      <rect x="57" y="72" width="4" height="4" fill="none" stroke="var(--green)" stroke-width="1" />
      <text x="65" y="50" fill="var(--green)" font-size="10">h</text>
      <text x="90" y="50" fill="var(--text)" font-size="9">l</text>
      <text x="55" y="8" fill="var(--text)" font-size="9">Apex</text>
    </svg>
  `,
  "Regular Tetrahedron": `
    <svg viewBox="0 0 120 110" width="100%" height="150" style="max-width: 220px;">
      <path d="M 20 90 L 100 90 L 60 10 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <line x1="60" y1="10" x2="75" y2="65" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4" />
      <line x1="100" y1="90" x2="75" y2="65" stroke="var(--accent)" stroke-width="2" />
      <line x1="20" y1="90" x2="75" y2="65" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4" />
      <text x="55" y="105" fill="var(--text)" font-size="10" text-anchor="middle">a</text>
      <text x="30" y="48" fill="var(--text)" font-size="10">a</text>
      <text x="85" y="48" fill="var(--text)" font-size="10">a</text>
    </svg>
  `,
  "Sum of Interior Angles": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 50 10 L 90 40 L 75 90 L 25 90 L 10 40 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <!-- Triangulation from one vertex -->
      <line x1="25" y1="90" x2="50" y2="10" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="3" />
      <line x1="25" y1="90" x2="90" y2="40" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="3" />
      <text x="50" y="55" fill="var(--text)" font-size="8">n-2 triangles</text>
    </svg>
  `,
  "Sum of Exterior Angles": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <path d="M 50 30 L 70 70 L 30 70 Z" fill="none" stroke="var(--accent)" stroke-width="2" />
      <!-- Extended lines -->
      <line x1="50" y1="30" x2="60" y2="10" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="3" />
      <line x1="70" y1="70" x2="90" y2="70" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="3" />
      <line x1="30" y1="70" x2="20" y2="90" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="3" />
      <path d="M 56 18 A 10 10 0 0 0 50 30" fill="none" stroke="var(--text)" stroke-width="1" />
      <path d="M 70 70 A 10 10 0 0 0 80 65" fill="none" stroke="var(--text)" stroke-width="1" />
      <path d="M 30 70 A 10 10 0 0 0 24 82" fill="none" stroke="var(--text)" stroke-width="1" />
      <text x="50" y="95" fill="var(--text)" font-size="9" text-anchor="middle">Sum = 360°</text>
    </svg>
  `,
  "Standard Dice Rule": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 150px;">
      <!-- Front face -->
      <rect x="30" y="40" width="40" height="40" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.2)" stroke="var(--accent)" stroke-width="2" />
      <!-- Top face -->
      <path d="M 30 40 L 50 20 L 90 20 L 70 40 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      <!-- Right face -->
      <path d="M 70 40 L 90 20 L 90 60 L 70 80 Z" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.15)" stroke="var(--accent)" stroke-width="2" />
      
      <!-- Dots -->
      <circle cx="50" cy="60" r="3" fill="var(--text)" /> <!-- 1 on front -->
      <circle cx="50" cy="30" r="3" fill="var(--text)" /> <!-- 2 on top -->
      <circle cx="70" cy="30" r="3" fill="var(--text)" />
      
      <circle cx="75" cy="50" r="3" fill="var(--text)" /> <!-- 3 on right -->
      <circle cx="80" cy="40" r="3" fill="var(--text)" />
      <circle cx="85" cy="60" r="3" fill="var(--text)" />
      
      <text x="50" y="105" fill="var(--green)" font-size="10" text-anchor="middle">Opposites sum to 7</text>
    </svg>
  `,
  "Unfolded/Open Dice Rule": `
    <svg viewBox="0 0 100 120" width="100%" height="150" style="max-width: 120px;">
      <rect x="40" y="10" width="20" height="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="1.5" />
      <rect x="40" y="30" width="20" height="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.3)" stroke="var(--accent)" stroke-width="1.5" />
      <rect x="20" y="30" width="20" height="20" fill="rgba(var(--green-rgb, 34, 197, 94), 0.2)" stroke="var(--green)" stroke-width="1.5" />
      <rect x="40" y="50" width="20" height="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="1.5" />
      <rect x="60" y="50" width="20" height="20" fill="rgba(var(--green-rgb, 34, 197, 94), 0.2)" stroke="var(--green)" stroke-width="1.5" />
      <rect x="40" y="70" width="20" height="20" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.3)" stroke="var(--accent)" stroke-width="1.5" />
      
      <text x="50" y="24" font-size="10" fill="var(--text)" text-anchor="middle">A</text>
      <text x="50" y="44" font-size="10" fill="var(--text)" text-anchor="middle">B</text>
      <text x="30" y="44" font-size="10" fill="var(--text)" text-anchor="middle">C</text>
      <text x="50" y="64" font-size="10" fill="var(--text)" text-anchor="middle">A</text>
      <text x="70" y="64" font-size="10" fill="var(--text)" text-anchor="middle">C</text>
      <text x="50" y="84" font-size="10" fill="var(--text)" text-anchor="middle">B</text>
      <text x="50" y="105" font-size="8" fill="var(--green)" text-anchor="middle">Matches are Opposite</text>
    </svg>
  `,
  "Population Standard Deviation": `
    <svg viewBox="0 0 100 100" width="100%" height="150" style="max-width: 200px;">
      <!-- Bell curve -->
      <path d="M 10 80 Q 30 80, 40 50 T 50 20 T 60 50 T 90 80" fill="rgba(var(--accent-rgb, 99, 102, 241), 0.1)" stroke="var(--accent)" stroke-width="2" />
      
      <!-- Mean line -->
      <line x1="50" y1="20" x2="50" y2="80" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="3" />
      
      <!-- Sigma lines -->
      <line x1="35" y1="58" x2="35" y2="80" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="2" />
      <line x1="65" y1="58" x2="65" y2="80" stroke="var(--green)" stroke-width="1.5" stroke-dasharray="2" />
      
      <!-- Baseline -->
      <line x1="5" y1="80" x2="95" y2="80" stroke="var(--text)" stroke-width="2" />
      
      <!-- Labels -->
      <text x="50" y="95" fill="var(--text)" font-size="9" text-anchor="middle">μ</text>
      <text x="35" y="95" fill="var(--green)" font-size="9" text-anchor="middle">-1σ</text>
      <text x="65" y="95" fill="var(--green)" font-size="9" text-anchor="middle">+1σ</text>
      
      <!-- Annotation -->
      <path d="M 35 65 Q 50 55, 65 65" fill="none" stroke="var(--green)" stroke-width="1" />
      <text x="50" y="60" fill="var(--green)" font-size="8" text-anchor="middle">68%</text>
    </svg>
  `
};
