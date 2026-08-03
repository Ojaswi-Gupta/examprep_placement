import { FORMULAS_DATA } from '../data/formulas.js';

export function initFormulas() {
  renderFormulas();
}

function renderFormulas() {
  const container = document.getElementById('formulasGrid');
  if (!container) return;
  container.innerHTML = '';
  
  FORMULAS_DATA.forEach((categoryData) => {
    const section = document.createElement('div');
    section.className = 'formula-category-section';
    
    const catTitle = document.createElement('h2');
    catTitle.className = 'section-title';
    catTitle.textContent = categoryData.category;
    catTitle.style.marginTop = '2rem';
    catTitle.style.marginBottom = '1.5rem';
    catTitle.style.fontSize = '1.8rem';
    catTitle.style.borderBottom = '2px solid var(--border)';
    catTitle.style.paddingBottom = '0.5rem';
    section.appendChild(catTitle);
    
    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'vocab-grid'; // Reusing grid layout from vocabulary
    
    categoryData.formulas.forEach(f => {
      const card = document.createElement('div');
      card.className = `card formula-card`; // Reusing .card for glassmorphism
      
      const typeClass = f.type === 'Advanced' ? 'type-advanced' : 'type-simple';
      
      let varsHtml = f.variables.map(v => 
        `<div style="display: flex; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.9rem;">
           <span style="color: var(--accent); font-weight: 600; min-width: 40px;">${v.symbol}</span> 
           <span style="color: var(--text-2);">${v.definition}</span>
         </div>`
      ).join('');
      
      card.innerHTML = `
        <div class="word-header" style="border-bottom: none; padding-bottom: 0;">
          <h3 class="word" style="font-size: 1.15rem;">${f.title}</h3>
          <span class="simple ${typeClass}">${f.type}</span>
        </div>
        <div class="formula-math" style="margin: 1.5rem 0; font-size: 1.3rem; font-weight: 600; color: var(--green); text-align: center; background: var(--surface-2); padding: 1rem; border-radius: 8px; border: 1px dashed var(--border);">
          ${f.formula}
        </div>
        <div class="formula-vars" style="background: rgba(255, 255, 255, 0.02); padding: 1rem; border-radius: 8px;">
          <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-3); margin-bottom: 0.8rem;">Variables Defined</h4>
          ${varsHtml}
        </div>
      `;
      cardsGrid.appendChild(card);
    });
    
    section.appendChild(cardsGrid);
    container.appendChild(section);
  });
}
