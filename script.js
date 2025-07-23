// Interactive functionality
function showMessage() {
    const messages = [
        "Welcome to my awesome free website! 🎉",
        "This website cost exactly $0 to make and host! 💰",
        "Built with HTML, CSS, JavaScript, and lots of ❤️",
        "GitHub Pages is amazing for free hosting! 🚀",
        "You can build one just like this too! 💪"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.25)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.15)';
    }
});

console.log("🎉 Website loaded successfully!");
console.log("💡 This website was built for FREE using GitHub Pages!");
