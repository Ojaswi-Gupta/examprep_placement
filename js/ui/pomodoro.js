// js/ui/pomodoro.js

export function initPomodoro() {
  const fab = document.getElementById('pomodoroFab');
  const widget = document.getElementById('pomodoroWidget');
  const closeBtn = document.getElementById('pomodoroClose');
  const minimizeBtn = document.getElementById('pomodoroMinimize');
  const header = document.getElementById('pomodoroHeader');
  
  const timeDisplay = document.getElementById('pomodoroTime');
  const startBtn = document.getElementById('pomodoroStart');
  const pauseBtn = document.getElementById('pomodoroPause');
  const resetBtn = document.getElementById('pomodoroReset');
  
  if (!fab || !widget) return;

  // Toggle widget visibility
  fab.addEventListener('click', () => {
    widget.classList.toggle('active');
    if(widget.classList.contains('active')) {
      widget.classList.remove('minimized');
    }
  });

  closeBtn.addEventListener('click', () => {
    widget.classList.remove('active');
  });
  
  minimizeBtn.addEventListener('click', () => {
    widget.classList.toggle('minimized');
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
    widget.style.bottom = 'auto';
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      widget.style.transition = 'box-shadow 0.2s ease, max-height 0.3s ease, width 0.3s ease';
    }
  });

  // Timer Logic
  let timerInterval;
  let timeLeft = 25 * 60; // 25 minutes
  let isRunning = false;
  
  function updateDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${m}:${s}`;
    
    if(timeLeft === 0) {
      clearInterval(timerInterval);
      isRunning = false;
      timeDisplay.classList.add('flash');
      setTimeout(() => timeDisplay.classList.remove('flash'), 3000);
    }
  }
  
  startBtn.addEventListener('click', () => {
    if (isRunning || timeLeft === 0) return;
    
    // Fullscreen Prompt
    if (!document.fullscreenElement) {
      if(confirm("Enter Full Screen mode for maximum focus?")) {
        document.documentElement.requestFullscreen().catch(err => console.log("Fullscreen API error:", err));
      }
    }
    
    isRunning = true;
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      }
    }, 1000);
  });
  
  pauseBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
  });
  
  resetBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateDisplay();
    timeDisplay.classList.remove('flash');
  });
}
