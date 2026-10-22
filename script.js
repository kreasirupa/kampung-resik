// script.js — KAMPUNG RESIK Kelurahan Jatimekar
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuPanel = document.getElementById('mobileMenuPanel');
  if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuPanel.classList.toggle('hidden');
    });
  }
});
