// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 50
});

// Mobile menu functions
window.openMenu = function() {
  document.getElementById('sidemenu').style.right = '0';
};

window.closeMenu = function() {
  document.getElementById('sidemenu').style.right = '-256px';
};

// Dark mode toggle with localStorage and icon switching
const toggleButton = document.getElementById('toggleButton');

// Function to update icon based on dark mode
function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const moonIcon = toggleButton.querySelector('.fa-moon');
  const sunIcon = toggleButton.querySelector('.fa-sun');
  
  if (isDark) {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  }
}

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'enabled' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Update icon on page load
updateThemeIcon();

toggleButton.addEventListener('click', function() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
  }
  updateThemeIcon(); // Update icon after toggling
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#") return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});