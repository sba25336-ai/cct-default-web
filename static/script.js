document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('currentYear');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const toggle = document.getElementById('detailsToggle');
  const details = document.getElementById('programDetails');

  if (toggle && details) {
    toggle.addEventListener('click', () => {
      const isHidden = details.classList.toggle('hidden');
      toggle.textContent = isHidden ? 'Show program details' : 'Hide program details';
    });
  }
});
