// script.js
window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let hue = 0;
  
    setInterval(() => {
      hue = (hue + 1) % 360;
      const color = `hsl(${hue}, 100%, 50%)`;
      body.style.backgroundColor = color;
    }, 10);
  });
  