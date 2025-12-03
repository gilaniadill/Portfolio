const sidemenu = document.querySelector('#sidemenu');

function openMenu(){
    sidemenu.style.transform = 'translateX(-16rem)';

}
function closeMenu(){
    sidemenu.style.transform = 'translateX(16rem)';

}
const navbar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navbar.classList.add('bg-white','bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm','dark:bg-[#11001f]','dark:shadow-white/20'
        );
        navLinks.classList.remove('bg-white','bg-opacity-50','shadow-sm',
            'dark:border','dark:border-white/50','dark:bg-transparent'
        )
    }
    else{
        navbar.classList.remove('bg-white','bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm','dark:bg-[#11001f]','dark:shadow-white/20');
            navLinks.classList.add('bg-white','bg-opacity-50','shadow-sm',
            'dark:border','dark:border-white/50','dark:bg-transparent')
   
    }
})
// light mode dark mode
const rootElement = document.documentElement;
const toggleButton = document.getElementById('toggleButton');
// Load user preference
if (localStorage.getItem('theme') === 'dark') {
  rootElement.classList.add('dark');
} else {
  rootElement.classList.remove('dark');
}

toggleButton.addEventListener('click', () => {
    if (rootElement.classList.contains('dark')) {
      rootElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      rootElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
