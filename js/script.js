// Initialize AOS with proper settings for all devices
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 50,
  disable: false, // Make sure AOS is enabled on all devices
  startEvent: 'DOMContentLoaded', // Ensure it starts after content loads
  initClassName: 'aos-init', // Default classes
  animatedClassName: 'aos-animate'
});

// Refresh AOS after a short delay to ensure all elements are loaded
setTimeout(() => {
  AOS.refresh();
}, 500);

// Also refresh on window load
window.addEventListener('load', () => {
  AOS.refresh();
});

// Mobile menu functions
window.openMenu = function() {
  const menu = document.getElementById('sidemenu');
  menu.style.right = '0';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

window.closeMenu = function() {
  const menu = document.getElementById('sidemenu');
  menu.style.right = '-280px';
  document.body.style.overflow = ''; // Restore scrolling
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
  updateThemeIcon();
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
  link.addEventListener('click', function(e) {
    closeMenu();
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('sidemenu');
  const menuButton = document.querySelector('.fa-bars')?.parentElement;
  
  if (window.innerWidth <= 768 && 
      !menu.contains(e.target) && 
      !menuButton?.contains(e.target) &&
      menu.style.right === '0px') {
    closeMenu();
  }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#") return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        closeMenu();
      }
      
      // Smooth scroll to target
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Handle resize events - but don't disable AOS
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    // Close mobile menu on resize if screen becomes larger
    if (window.innerWidth > 768) {
      document.getElementById('sidemenu').style.right = '-280px';
      document.body.style.overflow = '';
    }
    
    // Refresh AOS on resize to recalculate positions
    AOS.refresh();
  }, 250);
});

// Fix for iOS viewport height issues
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);
setVH();

// Prevent body scroll when mobile menu is open
document.addEventListener('touchmove', function(e) {
  if (document.getElementById('sidemenu').style.right === '0px') {
    e.preventDefault();
  }
}, { passive: false });