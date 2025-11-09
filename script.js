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

// Arrow click to scroll right
const arrowRight = document.querySelector('.filter-arrow-right');
if (arrowRight) {
  arrowRight.addEventListener('click', () => {
    filters.scrollTo({
      left: filters.scrollLeft + 200,  // Scroll by 200px (adjust as needed)
      behavior: 'smooth'
    });
  });
}

