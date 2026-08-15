import { DSA_DATA } from '../data/dsa/index.js?v=1';

let currentDsaCategory = null;

export function initDsa() {
  const navLink = document.querySelector('a[data-view="view-dsa"]');
  if (navLink) {
    navLink.addEventListener('click', () => {
      currentDsaCategory = null;
      renderDsaView();
    });
  }
}

function renderDsaView() {
  const container = document.getElementById('dsaGrid');
  if (!container) return;
  container.innerHTML = '';
  
  if (currentDsaCategory === null) {
    renderCategoryGrid(container);
  } else {
    renderCategoryDetails(container, currentDsaCategory);
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag)
  );
}

function renderCategoryGrid(container) {
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
  grid.style.gap = '1.5rem';
  
  DSA_DATA.forEach((categoryData, index) => {
    const card = document.createElement('div');
    card.className = 'card topic-card';
    card.style.cursor = 'pointer';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.style.padding = '2rem';
    card.style.textAlign = 'center';
    card.style.height = '100%';
    card.style.transition = 'transform 0.2s, box-shadow 0.2s';
    
    card.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">${categoryData.icon || '📚'}</div>
      <h3 style="margin: 0; color: var(--primary);">${escapeHTML(categoryData.category)}</h3>
      <p style="margin-top: 0.5rem; color: var(--text-light); font-size: 0.9rem;">
        ${categoryData.items.length} Topics
      </p>
    `;
    
    card.addEventListener('click', () => {
      currentDsaCategory = index;
      renderDsaView();
    });
    
    grid.appendChild(card);
  });
  
  container.appendChild(grid);
}

function renderCategoryDetails(container, categoryIndex) {
  const categoryData = DSA_DATA[categoryIndex];
  
  // Back button
  const backBtn = document.createElement('button');
  backBtn.className = 'cta-button cta-outline';
  backBtn.style.marginBottom = '2rem';
  backBtn.innerHTML = '← Back to Categories';
  backBtn.addEventListener('click', () => {
    currentDsaCategory = null;
    renderDsaView();
  });
  container.appendChild(backBtn);
  
  // Title
  const title = document.createElement('h2');
  title.style.marginBottom = '2rem';
  title.style.color = 'var(--primary)';
  title.innerHTML = `${categoryData.icon || ''} ${escapeHTML(categoryData.category)}`;
  container.appendChild(title);
  
  // Items Grid
  const list = document.createElement('div');
  list.style.display = 'flex';
  list.style.flexDirection = 'column';
  list.style.gap = '2rem';
  
  categoryData.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card full-width-card';
    card.style.padding = '2rem';
    
    let html = `
      <h3 style="color: var(--primary); margin-top: 0; font-size: 1.5rem;">${escapeHTML(item.name)}</h3>
      <div class="dsa-description" style="margin-bottom: 1.5rem; line-height: 1.6; color: var(--text);">
        ${item.description}
      </div>
    `;
    
    if (item.image) {
      html += `
        <div style="margin: 1.5rem 0; text-align: center; background: #fff; padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" style="max-width: 100%; height: auto; border-radius: 4px;">
        </div>
      `;
    }
    
    if (item.complexity) {
        html += `
        <div style="margin: 1rem 0; padding: 1rem; background: var(--bg-secondary); border-radius: 6px; border-left: 4px solid var(--primary);">
            <strong>Time Complexity:</strong> ${escapeHTML(item.complexity.time)} <br>
            <strong>Space Complexity:</strong> ${escapeHTML(item.complexity.space)}
        </div>
        `;
    }
    
    if (item.code) {
      html += `
        <h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--text-dark);">Implementation / Example</h4>
        <div style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 6px; overflow-x: auto; font-family: monospace; font-size: 0.9rem; line-height: 1.5;">
          <pre style="margin: 0;"><code>${escapeHTML(item.code)}</code></pre>
        </div>
      `;
    }
    
    card.innerHTML = html;
    list.appendChild(card);
  });
  
  container.appendChild(list);
}
