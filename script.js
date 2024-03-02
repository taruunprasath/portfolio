function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        var position = section.getBoundingClientRect().top;
        var screenHeight = window.innerHeight / 1.5;

        if (position < screenHeight) {
            section.style.opacity = '1.5';
            section.style.transform = 'translateY(0)';
        }
    });
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