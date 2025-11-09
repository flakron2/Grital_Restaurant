const searchInput = document.getElementById('menu-search');
const menuItems = document.querySelectorAll('.menu-item');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase().trim();
  menuItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    const matches = term === '' || text.includes(term);
    item.classList.toggle('hidden', !matches);
  });
});

// // Arrow click to scroll right
// const arrowRight = document.querySelector('.filter-arrow-right');
// if (arrowRight) {
//   arrowRight.addEventListener('click', () => {
//     filters.scrollTo({
//       left: filters.scrollLeft + 200,  // Scroll by 200px (adjust as needed)
//       behavior: 'smooth'
//     });
//   });
// }

// BEAUTIFUL SCROLLBAR INDICATOR
const filters = document.querySelector('.category-filters');
if (filters) {
  const updateBar = () => {
    const total = filters.scrollWidth;
    const visible = filters.clientWidth;
    const scrolled = filters.scrollLeft;

    if (total > visible + 50) {
      filters.classList.add('has-content');
      const thumbWidth = (visible / total) * 100;
      const thumbPosition = (scrolled / (total - visible)) * (100 - thumbWidth);
      filters.style.setProperty('--thumb-width', thumbWidth + '%');
      filters.style.setProperty('--thumb-left', thumbPosition + '%');
    } else {
      filters.classList.remove('has-content');
    }
  };

  filters.addEventListener('scroll', updateBar);
  window.addEventListener('resize', updateBar);
  updateBar();
}
