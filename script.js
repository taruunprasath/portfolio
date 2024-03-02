function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    function checkScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.9) {
          section.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
  });

document.addEventListener('DOMContentLoaded', function() {
    var welcomeScreen = document.getElementById('welcome-screen');
    var enterBtn = document.getElementById('enter-btn');

    
    welcomeScreen.style.opacity = '1';

   
    enterBtn.addEventListener('click', function() {
        welcomeScreen.style.opacity = '0';
        setTimeout(function() {
            welcomeScreen.style.display = 'none';
        }, 500); 
    });
});