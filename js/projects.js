// Projects data
const works = [
  {
    title: "School Management System",
    description: "Management System for Schools (Mean Stack)",
    image: "./images/sms.png",
    link: "https://gilaniadill.github.io/sms",
  },
  {
    title: "Buraq Studio",
    description: "Company Website",
    image: "./images/buraq.png",
    link: "https://gilaniadill.github.io/buraqstudio/home",
  },
  {
    title: "Ecommerce Website",
    description: "Asp.net Core Web API",
    image: "./images/foodmart.png",
    link: "https://fooodmaart.netlify.app/",
  },
  {
    title: "Yoga Website",
    description: "Website for Yoga Classes",
    image: "./images/work-1.png",
    link: "https://yogastic.netlify.app/",
  },
  {
    title: "Search Any Image",
    description: "Unsplash Web API",
    image: "./images/work-3.png",
    link: "https://pixplorer-imagesearch.netlify.app/",
  },
  {
    title: "Cyber Security Page",
    description: "Cyber Security Awareness",
    image: "./images/work-4.png",
    link: "https://cyber-sec-avs.netlify.app/",
  },
];

// Function to create project cards with black text and animations
function renderProjects() {
  const container = document.getElementById("work-container");
  if (!container) return;
  
  container.innerHTML = ''; // Clear container
  
  works.forEach((work, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.backgroundImage = `url('${work.image}')`;
    
    // Add AOS attributes for ALL devices - animations work everywhere
    card.setAttribute("data-aos", "zoom-in");
    card.setAttribute("data-aos-delay", (index * 100).toString());
    card.setAttribute("data-aos-duration", "1000");
    card.setAttribute("data-aos-easing", "ease-in-out");
    card.setAttribute("data-aos-mirror", "true");
    card.setAttribute("data-aos-once", "false");
    
    // Card HTML structure with black text
    card.innerHTML = `
      <a href="${work.link}" target="_blank" rel="noopener noreferrer" class="block w-full h-full">
        <div class="project-overlay">
          <div>
            <h2 class="font-semibold text-black">${work.title}</h2>
            <p class="text-sm text-black">${work.description}</p>
          </div>
          <div class="project-link">
            <i class="fas fa-arrow-right text-black"></i>
          </div>
        </div>
      </a>
    `;
    
    // Add error handling for broken images
    const img = new Image();
    img.src = work.image;
    img.onerror = function() {
      card.style.backgroundImage = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      // Add a subtle pattern or icon for fallback
      const fallbackIcon = document.createElement('div');
      fallbackIcon.className = 'absolute inset-0 flex items-center justify-center opacity-20';
      fallbackIcon.innerHTML = '<i class="fas fa-code text-6xl text-white"></i>';
      card.appendChild(fallbackIcon);
    };
    
    container.appendChild(card);
  });
  
  // Refresh AOS after adding new elements
  setTimeout(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, 100);
}

// Render projects when page loads
document.addEventListener('DOMContentLoaded', renderProjects);

// Re-render on resize if needed (optional)
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
    renderProjects();
  }, 250);
});