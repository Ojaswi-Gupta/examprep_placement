import { CONVERSIONS_DATA } from '../data/conversions.js?v=1';

export function initConversions() {
  // Listen for navigation clicks
  const navLinks = document.querySelectorAll('button[data-view="view-conversions"], a[data-view="view-conversions"]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      renderConversionsView();
    });
  });
  
  // Render immediately if already on this view
  if (document.getElementById('view-conversions').classList.contains('active-view')) {
      renderConversionsView();
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

function renderConversionsView() {
  renderCalculator();
  renderStaticCards();
}

// ---------------------------
// 1. Interactive Calculator
// ---------------------------
function renderCalculator() {
  const container = document.getElementById('conversionsCalculator');
  if (!container) return;
  
  let html = `
    <h3 style="color: var(--primary); margin-top: 0; margin-bottom: 1.5rem; text-align: center;">⚡ Interactive Converter</h3>
    
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px; margin: 0 auto;">
      
      <!-- Category Selector -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <label for="convCategory" style="font-size: 0.9rem; color: var(--text-light); font-weight: bold;">Select Category</label>
        <select id="convCategory" style="padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border); background: var(--bg); color: var(--text); font-size: 1rem; outline: none;">
          ${CONVERSIONS_DATA.map((cat, idx) => `<option value="${idx}">${cat.icon} ${escapeHTML(cat.category)}</option>`).join('')}
        </select>
      </div>

      <!-- Inputs Area -->
      <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap;">
        
        <!-- From -->
        <div style="flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 0.5rem;">
          <label style="font-size: 0.9rem; color: var(--text-light); font-weight: bold;">From</label>
          <div style="display: flex; background: var(--bg); border: 1px solid var(--border); border-radius: 6px; overflow: hidden;">
            <input type="number" id="convInput" value="1" step="any" style="flex: 1; padding: 0.75rem; border: none; background: transparent; color: var(--text); font-size: 1rem; outline: none;">
            <select id="convFromUnit" style="border: none; border-left: 1px solid var(--border); background: var(--bg-secondary); color: var(--text); padding: 0 0.5rem; outline: none;"></select>
          </div>
        </div>

        <div style="font-size: 1.5rem; color: var(--primary); padding-top: 1.5rem;">=</div>

        <!-- To -->
        <div style="flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 0.5rem;">
          <label style="font-size: 0.9rem; color: var(--text-light); font-weight: bold;">To</label>
          <div style="display: flex; background: var(--bg); border: 1px solid var(--border); border-radius: 6px; overflow: hidden;">
            <input type="text" id="convOutput" readonly style="flex: 1; padding: 0.75rem; border: none; background: transparent; color: var(--text); font-size: 1rem; outline: none; font-weight: bold;">
            <select id="convToUnit" style="border: none; border-left: 1px solid var(--border); background: var(--bg-secondary); color: var(--text); padding: 0 0.5rem; outline: none;"></select>
          </div>
        </div>
      </div>
      
    </div>
  `;
  container.innerHTML = html;

  // Event Listeners for Calculator
  const categorySelect = document.getElementById('convCategory');
  const fromSelect = document.getElementById('convFromUnit');
  const toSelect = document.getElementById('convToUnit');
  const inputEl = document.getElementById('convInput');
  const outputEl = document.getElementById('convOutput');

  function populateUnits() {
    const category = CONVERSIONS_DATA[categorySelect.value];
    const optionsHtml = category.units.map(u => `<option value="${escapeHTML(u)}">${escapeHTML(u)}</option>`).join('');
    
    // Store current selections to prevent resetting if they still exist
    const currentFrom = fromSelect.value;
    const currentTo = toSelect.value;

    fromSelect.innerHTML = optionsHtml;
    toSelect.innerHTML = optionsHtml;
    
    // Set defaults (first and second units if available)
    if (category.units.includes(currentFrom)) fromSelect.value = currentFrom;
    else fromSelect.selectedIndex = 0;
    
    if (category.units.includes(currentTo)) toSelect.value = currentTo;
    else toSelect.selectedIndex = category.units.length > 1 ? 1 : 0;
    
    calculate();
  }

  function calculate() {
    const category = CONVERSIONS_DATA[categorySelect.value];
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;
    const val = parseFloat(inputEl.value);

    if (isNaN(val)) {
      outputEl.value = '';
      return;
    }

    // Convert from -> base -> to
    // The rates map: 1 base unit = X target unit
    const rateFrom = category.rates[fromUnit];
    const rateTo = category.rates[toUnit];
    
    // val in base unit = val / rateFrom
    // val in target unit = (val / rateFrom) * rateTo
    const result = (val / rateFrom) * rateTo;
    
    // Formatting to avoid crazy decimals
    outputEl.value = parseFloat(result.toPrecision(10)); 
  }

  categorySelect.addEventListener('change', populateUnits);
  fromSelect.addEventListener('change', calculate);
  toSelect.addEventListener('change', calculate);
  inputEl.addEventListener('input', calculate);

  // Initialize first view
  populateUnits();
}


// ---------------------------
// 2. Static Memory Cards
// ---------------------------
function renderStaticCards() {
  const container = document.getElementById('conversionsGrid');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Apply a proper grid layout for alignment
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
  container.style.gap = '2rem';
  container.style.alignItems = 'start'; // Prevents cards from stretching vertically
  
  CONVERSIONS_DATA.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '2rem';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.height = '100%'; // Make cards stretch to match row height
    card.style.boxSizing = 'border-box';
    
    let html = `
      <div style="display: flex; align-items: center; gap: 1rem; border-bottom: 2px solid var(--border); padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <span style="font-size: 2.5rem;">${cat.icon}</span>
        <h3 style="margin: 0; color: var(--primary); font-size: 1.5rem;">${escapeHTML(cat.category)}</h3>
      </div>
      
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem; flex-grow: 1;">
    `;
    
    cat.memorize.forEach(item => {
      // Highlight numbers for better readability
      const highlighted = escapeHTML(item).replace(/([0-9/.]+)/g, '<strong style="color: var(--primary);">$1</strong>');
      html += `
        <li style="background: var(--bg-secondary); padding: 1rem; border-radius: 6px; border-left: 4px solid var(--primary); color: var(--text);">
          ${highlighted}
        </li>
      `;
    });
    
    html += `</ul>`;
    card.innerHTML = html;
    container.appendChild(card);
  });
}
