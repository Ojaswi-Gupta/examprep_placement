import { FORMULAS_DATA } from '../data/formulas.js';
import { EXAMPLES_DATA } from '../data/examples.js';
import { DIAGRAMS_DATA } from '../data/diagrams.js';

let currentTopicIndex = null;
let katexLoaded = false;

// Dynamically load KaTeX CSS and JS to bypass any index.html caching issues
async function loadKatex() {
  if (katexLoaded || window.katex) return true;
  
  return new Promise((resolve, reject) => {
    // 1. Load CSS
    if (!document.querySelector('link[href*="katex.min.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
      document.head.appendChild(link);
    }
    
    // 2. Load JS
    if (!document.querySelector('script[src*="katex.min.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
      script.onload = () => {
        katexLoaded = true;
        resolve(true);
      };
      script.onerror = () => {
        console.error("Failed to load KaTeX script");
        resolve(false);
      };
      document.head.appendChild(script);
    } else {
      resolve(true);
    }
  });
}

export function initFormulas() {
  const navLink = document.querySelector('a[data-view="view-formulas"]');
  if (navLink) {
    navLink.addEventListener('click', () => {
      currentTopicIndex = null;
      renderFormulas();
    });
  }
  
  // Preload KaTeX when formulas module is initialized
  loadKatex().then(() => {
    renderFormulas();
  });
}

function renderFormulas() {
  const container = document.getElementById('formulasGrid');
  if (!container) return;
  container.innerHTML = '';
  
  if (currentTopicIndex === null) {
    renderTopicGrid(container);
  } else {
    renderTopicFormulas(container, currentTopicIndex);
  }
}

function renderTopicGrid(container) {
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
  grid.style.gap = '1.5rem';
  
  FORMULAS_DATA.forEach((categoryData, index) => {
    const card = document.createElement('div');
    card.className = 'card topic-card';
    card.style.cursor = 'pointer';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.style.padding = '3rem 1.5rem';
    card.style.textAlign = 'center';
    card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    
    // Icon mapping based on keywords
    let icon = '📘';
    const cat = categoryData.category.toLowerCase();
    if (cat.includes('percent')) icon = '📈';
    else if (cat.includes('profit')) icon = '💰';
    else if (cat.includes('time') || cat.includes('speed')) icon = '⏱️';
    else if (cat.includes('interest')) icon = '💵';
    else if (cat.includes('mensuration') || cat.includes('geometry')) icon = '📐';
    else if (cat.includes('algebra')) icon = '✖️';
    else if (cat.includes('blood')) icon = '🩸';
    else if (cat.includes('direction')) icon = '🧭';
    else if (cat.includes('syllogism')) icon = '⭕';
    else if (cat.includes('coding')) icon = '🕵️‍♂️';
    
    card.onmouseover = () => { card.style.transform = 'translateY(-5px)'; };
    card.onmouseout = () => { card.style.transform = 'translateY(0)'; };
    
    card.innerHTML = `
      <div style="font-size: 3.5rem; margin-bottom: 1rem; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));">${icon}</div>
      <h3 style="font-size: 1.3rem; color: var(--text); font-weight: 600;">${categoryData.category}</h3>
      <p style="color: var(--accent); margin-top: 0.75rem; font-size: 0.9rem; font-weight: 600; background: var(--surface-2); padding: 0.3rem 0.8rem; border-radius: 50px;">${categoryData.formulas.length} Formulas</p>
    `;
    
    card.onclick = () => {
      currentTopicIndex = index;
      renderFormulas();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    grid.appendChild(card);
  });
  
  container.appendChild(grid);
}

function renderTopicFormulas(container, index) {
  const categoryData = FORMULAS_DATA[index];
  
  // Header section for back button and title
  const headerContainer = document.createElement('div');
  headerContainer.style.display = 'flex';
  headerContainer.style.flexDirection = 'column';
  headerContainer.style.alignItems = 'flex-start';
  headerContainer.style.marginBottom = '2rem';
  
  const backBtn = document.createElement('button');
  backBtn.className = 'cta-button cta-outline';
  backBtn.innerHTML = '← Back to Topics';
  backBtn.style.padding = '0.5rem 1rem';
  backBtn.style.fontSize = '0.9rem';
  backBtn.style.marginBottom = '1.5rem';
  backBtn.onclick = () => {
    currentTopicIndex = null;
    renderFormulas();
  };
  headerContainer.appendChild(backBtn);
  
  const catTitle = document.createElement('h2');
  catTitle.className = 'section-title';
  catTitle.textContent = categoryData.category;
  catTitle.style.fontSize = '2.2rem';
  catTitle.style.width = '100%';
  catTitle.style.borderBottom = '2px solid var(--border)';
  catTitle.style.paddingBottom = '0.8rem';
  headerContainer.appendChild(catTitle);
  
  container.appendChild(headerContainer);
  
  // Formulas Grid
  const cardsGrid = document.createElement('div');
  cardsGrid.className = 'vocab-grid'; // Reusing grid layout
  
  categoryData.formulas.forEach(f => {
    cardsGrid.appendChild(createFormulaCard(f, categoryData.category));
  });
  
  container.appendChild(cardsGrid);
}

function createFormulaCard(f, categoryName) {
  const card = document.createElement('div');
  card.className = `card formula-card`;
  
  const typeClass = f.type === 'Advanced' ? 'type-advanced' : 'type-simple';
  
  let varsHtml = f.variables.map(v => 
    `<div style="display: flex; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.9rem;">
       <span style="color: var(--accent); font-weight: 600; min-width: 40px;">${v.symbol}</span> 
       <span style="color: var(--text-2);">${v.definition}</span>
     </div>`
  ).join('');
  
  let formulaHtml = f.formula;
  if (window.katex) {
    try {
      formulaHtml = katex.renderToString(f.formula, {
        throwOnError: false,
        displayMode: true,
        strict: false
      });
    } catch (e) {
      console.error("KaTeX Error:", e);
    }
  } else {
    console.warn("KaTeX not loaded, falling back to raw LaTeX");
  }
  
  let exampleHtml = '';
  const exampleData = EXAMPLES_DATA[f.title];
  
  if (exampleData) {
    let stepsHtml = exampleData.steps.map((step, i) => {
      let stepText = step;
      if (window.katex) {
          stepText = step.replace(/\$([^$]+)\$/g, (match, math) => {
              try {
                  return katex.renderToString(math, { throwOnError: false, strict: false });
              } catch(e) { return match; }
          });
      }
      return `<li style="margin-bottom: 0.5rem; color: var(--text-2);">${stepText}</li>`;
    }).join('');

    exampleHtml = `
    <div class="formula-example" style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
      <button class="example-toggle" style="background: none; border: none; color: var(--accent); cursor: pointer; font-family: inherit; font-size: 0.9rem; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; padding: 0;">
        <span>▶</span> Show Conceptual Example
      </button>
      <div class="example-content" style="display: none; margin-top: 1rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px;">
        <p style="font-weight: 500; margin-bottom: 0.8rem; color: var(--text);">${exampleData.question}</p>
        <ol style="padding-left: 1.2rem; margin: 0; font-size: 0.9rem;">
          ${stepsHtml}
        </ol>
      </div>
    </div>
    `;
  }

  let diagramHtml = '';
  const diagramData = DIAGRAMS_DATA[f.title];
  if (diagramData) {
    diagramHtml = `
    <div class="formula-diagram" style="text-align: center; margin: 1.5rem 0; background: var(--surface-2); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
      ${diagramData}
    </div>
    `;
  }

  const categoryTag = categoryName ? `<div style="font-size: 0.8rem; color: var(--text-3); margin-bottom: 0.5rem;">${categoryName}</div>` : '';

  card.innerHTML = `
    ${categoryTag}
    <div class="word-header" style="border-bottom: none; padding-bottom: 0;">
      <h3 class="word" style="font-size: 1.15rem;">${f.title}</h3>
      <span class="simple ${typeClass}">${f.type}</span>
    </div>
    ${diagramHtml}
    <div class="formula-math" style="margin: 1.5rem 0; font-size: 1.3rem; color: var(--green); text-align: center; background: var(--surface-2); padding: 1rem; border-radius: 8px; border: 1px dashed var(--border); overflow-x: auto;">
      ${formulaHtml}
    </div>
    <div class="formula-vars" style="background: rgba(255, 255, 255, 0.02); padding: 1rem; border-radius: 8px;">
      <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-3); margin-bottom: 0.8rem;">Variables Defined</h4>
      ${varsHtml}
    </div>
    ${exampleHtml}
  `;
  
  if (exampleData) {
      const toggleBtn = card.querySelector('.example-toggle');
      const contentDiv = card.querySelector('.example-content');
      toggleBtn.addEventListener('click', () => {
          const isHidden = contentDiv.style.display === 'none';
          contentDiv.style.display = isHidden ? 'block' : 'none';
          toggleBtn.querySelector('span').textContent = isHidden ? '▼' : '▶';
          toggleBtn.childNodes[2].textContent = isHidden ? ' Hide Conceptual Example' : ' Show Conceptual Example';
      });
  }

  return card;
}

// Search Logic
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('formulasSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const container = document.getElementById('formulasGrid');
      if (!container) return;
      
      if (!query) {
        renderFormulas();
        return;
      }
      
      container.innerHTML = '';
      
      const cardsGrid = document.createElement('div');
      cardsGrid.className = 'vocab-grid';
      
      let matchCount = 0;
      
      FORMULAS_DATA.forEach(categoryData => {
        categoryData.formulas.forEach(f => {
          const searchableText = `${f.title} ${f.type} ${categoryData.category}`.toLowerCase();
          if (searchableText.includes(query)) {
            cardsGrid.appendChild(createFormulaCard(f, categoryData.category));
            matchCount++;
          }
        });
      });
      
      if (matchCount === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-3); padding: 2rem;">No formulas found matching your search.</p>';
      } else {
        const resultCount = document.createElement('p');
        resultCount.style.textAlign = 'center';
        resultCount.style.color = 'var(--text-3)';
        resultCount.style.marginBottom = '2rem';
        resultCount.textContent = `Found ${matchCount} formula${matchCount !== 1 ? 's' : ''}`;
        
        container.appendChild(resultCount);
        container.appendChild(cardsGrid);
      }
    });
  }
});
