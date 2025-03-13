
export const initScrollReveal = () => {
  const revealOnScroll = function() {
    const sections = document.querySelectorAll('.reveal-sections > section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.85) {
        section.classList.add('in-view');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Check on initial load

  // Return a cleanup function to remove the event listener
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
};
