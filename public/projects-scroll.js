document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const scrollAmount = 300;

  const leftBtn = document.getElementById('scrollLeft');
  const rightBtn = document.getElementById('scrollRight');

  leftBtn?.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn?.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
