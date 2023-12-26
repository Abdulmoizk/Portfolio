/////////scrollToTop////////

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    window.addEventListener('scroll', function() {
      // Show the button when the page is scrolled down
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', function() {
      // Scroll to the top of the page with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });


///////scrollToSpecific////////

  document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.navbar li');
  
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const targetId = this.id.replace('navItem', 'section');
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });