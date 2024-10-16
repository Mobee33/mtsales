// Hero to Slider Transition
// Get the hero section and slider section elements
const heroSection = document.getElementById('hero-section');
const sliderSection = document.getElementById('slider-section');

// After 9 seconds, start the transition
setTimeout(() => {
    // Add the 'hidden' class to fade out the hero section
    heroSection.classList.add('hidden');

    // After fade out, hide the hero section completely
    setTimeout(() => {
        // Hide the hero section
        heroSection.style.display = 'none';

        // Show the slider section
        sliderSection.classList.remove('hidden');
        sliderSection.classList.add('visible');

        // Initialize Swiper for Main Slider
        const swiper = new Swiper('.main-swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
            },
            loop: true,
        });

    }, 1000); // Delay matches the fade-out transition duration
}, 9000); // 9 seconds delay

// Initialize Splide for Logo Slider
document.addEventListener('DOMContentLoaded', function () {
    // Create a new Splide instance
    var splide = new Splide('#logo-slider', {
        type: 'loop',
        perPage: 5,
        autoplay: true,
        interval: 2000,
        arrows: false,
        pagination: false,
        gap: '1rem',
        breakpoints: {
            1024: {
                perPage: 4,
            },
            768: {
                perPage: 3,
            },
            640: {
                perPage: 2,
            },
        },
    });
    // Mount the Splide instance
    splide.mount();
});
