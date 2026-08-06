import { EXAMPLES_DATA } from '../data/examples.js';
import { DIAGRAMS_DATA } from '../data/diagrams.js';

let fqIndex = 0;
let fqItems = [];

export function initFormulaQuiz() {
  const fqCard = document.getElementById('fqCard');
  const fqPrev = document.getElementById('fqPrev');
  const fqNext = document.getElementById('fqNext');
  const fqWrongBtn = document.getElementById('fqWrongBtn');
  const fqRightBtn = document.getElementById('fqRightBtn');
  const quitFormulaQuiz = document.getElementById('quitFormulaQuiz');
  
  if (fqCard) {
    fqCard.addEventListener('click', (e) => {
      // Ignore clicks on buttons
      if (e.target.closest('button')) return;
      fqCard.classList.toggle('flipped');
    });
  }
  
  if (fqPrev) fqPrev.addEventListener('click', (e) => { e.stopPropagation(); prevFormula(); });
  if (fqNext) fqNext.addEventListener('click', (e) => { e.stopPropagation(); nextFormula(); });
  
  if (fqWrongBtn) fqWrongBtn.addEventListener('click', (e) => { e.stopPropagation(); nextFormula(); });
  if (fqRightBtn) fqRightBtn.addEventListener('click', (e) => { e.stopPropagation(); nextFormula(); });
  
  if (quitFormulaQuiz) {
    quitFormulaQuiz.addEventListener('click', () => {
      if (typeof window.showView === 'function') {
        window.showView('view-formulas');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (document.body.getAttribute('data-active-view') !== 'formula-quiz-section') return;

    if (e.key === 'ArrowRight') {
      nextFormula();
    } else if (e.key === 'ArrowLeft') {
      prevFormula();
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      if (fqCard) fqCard.classList.toggle('flipped');
    }
  });
}

export function startFormulaQuiz(categoryData) {
  if (!categoryData || !categoryData.formulas || !categoryData.formulas.length) return;
  
  const fqCategory = document.getElementById('fqCategory');
  if (fqCategory) fqCategory.textContent = categoryData.category;
  
  // Collect all formulas in this category that have an example
  fqItems = categoryData.formulas.filter(f => EXAMPLES_DATA[f.title]).map(f => ({
    title: f.title,
    formula: f.formula,
    example: EXAMPLES_DATA[f.title],
    diagram: DIAGRAMS_DATA[f.title]
  }));
  
  // If no examples, show an alert
  if (fqItems.length === 0) {
    alert('No practice questions available for this topic yet.');
    return;
  }
  
  // Shuffle
  fqItems = fqItems.sort(() => 0.5 - Math.random());
  fqIndex = 0;
  
  if (typeof window.showView === 'function') {
    window.showView('formula-quiz-section');
  }
  
  renderFormula();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderFormula() {
  const item = fqItems[fqIndex];
  if (!item) return;
  
  const fqCard = document.getElementById('fqCard');
  const fqCounter = document.getElementById('fqCounter');
  const fqQuestion = document.getElementById('fqQuestion');
  const fqFormula = document.getElementById('fqFormula');
  const fqDiagram = document.getElementById('fqDiagram');
  const fqSteps = document.getElementById('fqSteps');
  
  if(fqCard) fqCard.classList.remove('flipped');
  if(fqCounter) fqCounter.textContent = `${fqIndex + 1} / ${fqItems.length}`;
  
  // Use KaTeX if available
  const renderMath = (text) => {
    if (!window.katex) return text;
    // Replace $math$ with rendered KaTeX
    return text.replace(/\$([^$]+)\$/g, (match, math) => {
      try {
        return katex.renderToString(math, { throwOnError: false, strict: false });
      } catch(e) { return match; }
    });
  };

  if(fqQuestion) fqQuestion.innerHTML = renderMath(item.example.question);
  
  if(fqFormula) {
    if (window.katex) {
      try {
        fqFormula.innerHTML = katex.renderToString(item.formula, { displayMode: true, throwOnError: false, strict: false });
      } catch (e) {
        fqFormula.textContent = item.formula;
      }
    } else {
      fqFormula.textContent = item.formula;
    }
  }
  
  if (fqDiagram) {
    if (item.diagram) {
      fqDiagram.innerHTML = item.diagram;
      fqDiagram.style.display = 'block';
    } else {
      fqDiagram.style.display = 'none';
      fqDiagram.innerHTML = '';
    }
  }
  
  if (fqSteps) {
    fqSteps.innerHTML = item.example.steps.map(step => 
      `<li style="margin-bottom: 0.5rem;">${renderMath(step)}</li>`
    ).join('');
  }
}

function nextFormula() {
  if (fqIndex < fqItems.length - 1) {
    fqIndex++;
    renderFormula();
  } else {
    alert('You have completed this topic!');
    if (typeof window.showView === 'function') {
      window.showView('view-formulas');
    }
  }
}

function prevFormula() {
  if (fqIndex > 0) {
    fqIndex--;
    renderFormula();
  }
}
