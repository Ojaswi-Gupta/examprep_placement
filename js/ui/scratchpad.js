// js/ui/scratchpad.js

export function initScratchpad() {
  const fab = document.getElementById('scratchpadFab');
  const widget = document.getElementById('scratchpadWidget');
  const closeBtn = document.getElementById('scratchpadClose');
  const header = document.getElementById('scratchpadHeader');
  
  if (!fab || !widget) return;

  // Toggle widget visibility
  fab.addEventListener('click', () => {
    widget.classList.toggle('active');
    if (widget.classList.contains('active')) {
      resizeCanvas();
    }
  });

  closeBtn.addEventListener('click', () => {
    widget.classList.remove('active');
  });

  // Dragging logic
  let isDragging = false;
  let offsetX, offsetY;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - widget.getBoundingClientRect().left;
    offsetY = e.clientY - widget.getBoundingClientRect().top;
    widget.style.transition = 'none'; // Disable transition while dragging
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    // Boundary checks
    const maxX = window.innerWidth - widget.offsetWidth;
    const maxY = window.innerHeight - widget.offsetHeight;
    
    widget.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
    widget.style.top = `${Math.max(0, Math.min(y, maxY))}px`;
    widget.style.right = 'auto'; // Remove right positioning once dragged
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      widget.style.transition = 'box-shadow 0.2s ease';
    }
  });

  // Tab switching
  const tabs = document.querySelectorAll('.scratchpad-tab');
  const canvasContainer = document.getElementById('sp-canvas');
  const calcContainer = document.getElementById('sp-calc');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.dataset.target === 'canvas') {
        canvasContainer.style.display = 'flex';
        calcContainer.style.display = 'none';
        resizeCanvas();
      } else {
        canvasContainer.style.display = 'none';
        calcContainer.style.display = 'flex';
      }
    });
  });

  // --- Canvas Drawing Logic ---
  const canvas = document.getElementById('scratchCanvas');
  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let currentMode = 'pen'; // 'pen' or 'eraser'

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight - 40; // Minus tool height
    // Setup initial context properties
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    if (widget.classList.contains('active') && canvasContainer.style.display !== 'none') {
      // Save canvas content, resize, restore
      const tempCanvas = document.createElement('canvas');
      const tCtx = tempCanvas.getContext('2d');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tCtx.drawImage(canvas, 0, 0);
      
      resizeCanvas();
      ctx.drawImage(tempCanvas, 0, 0);
    }
  });

  function startPosition(e) {
    isDrawing = true;
    draw(e);
  }

  function endPosition() {
    isDrawing = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!isDrawing) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.lineWidth = currentMode === 'eraser' ? 20 : 2;
    ctx.strokeStyle = currentMode === 'eraser' ? '#2a2a2a' : '#ffffff';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', endPosition);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseout', endPosition);
  
  // Touch support
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startPosition(e); });
  canvas.addEventListener('touchend', endPosition);
  canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });

  // Tools
  document.getElementById('spClearBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  
  const penBtn = document.getElementById('spPenBtn');
  const eraserBtn = document.getElementById('spEraserBtn');
  
  penBtn.addEventListener('click', () => {
    currentMode = 'pen';
    penBtn.style.borderColor = 'var(--accent)';
    eraserBtn.style.borderColor = 'var(--border)';
  });
  
  eraserBtn.addEventListener('click', () => {
    currentMode = 'eraser';
    eraserBtn.style.borderColor = 'var(--accent)';
    penBtn.style.borderColor = 'var(--border)';
  });

  // --- Calculator Logic ---
  const calcDisplay = document.getElementById('calcDisplay');
  const calcBtns = document.querySelectorAll('.calc-btn');
  let currentExpression = '';

  calcBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;
      
      if (val === 'C') {
        currentExpression = '';
        calcDisplay.textContent = '0';
      } else if (val === '=') {
        try {
          // Replace symbols with JS operators
          let evalStr = currentExpression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
          // Basic security constraint - only allow math characters
          if (/^[0-9+\-*/()..\s]+$/.test(evalStr)) {
            const result = new Function('return ' + evalStr)();
            // Format to avoid long decimals
            currentExpression = Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(6)).toString();
            calcDisplay.textContent = currentExpression;
          } else {
            throw new Error('Invalid math');
          }
        } catch (e) {
          calcDisplay.textContent = 'Error';
          currentExpression = '';
        }
      } else {
        const displayVal = val === '*' ? '×' : val === '/' ? '÷' : val === '-' ? '−' : val;
        currentExpression += displayVal;
        calcDisplay.textContent = currentExpression;
      }
    });
  });
}
