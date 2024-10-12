// Add zoom effect on page load
window.onload = () => {
    const subscribeBox = document.getElementById('subscribe-box');
    subscribeBox.style.transform = 'scale(0)';
    setTimeout(() => {
        subscribeBox.style.transform = 'scale(1)';
    }, 300);
};

// Scroll event for the subscribe box zoom
window.addEventListener('scroll', () => {
    const subscribeBox = document.getElementById('subscribe-box');
    const boxPosition = subscribeBox.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (boxPosition < screenPosition) {
        subscribeBox.classList.add('show-animation');
    }
});

// Hover effects for top icons
document.querySelectorAll('.icon-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.2)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.querySelector('.carousel-control-prev').addEventListener('click', function() {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    updateCarousel();
});

document.querySelector('.carousel-control-next').addEventListener('click', function() {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateCarousel();
});

function updateCarousel() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
}

