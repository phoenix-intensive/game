document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .game-card, .bonus-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // window.addEventListener('scroll', animateOnScroll);
    // animateOnScroll(); // Call the function on page load
    //
    // // Modal for "Play Now" button
    // const playButton = document.querySelector('.btn-primary');
    // playButton.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     alert('Welcome to LuckyPlay! Registration is temporarily unavailable.');
    // });
});