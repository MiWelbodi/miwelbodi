document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.swiper-slide');
    const tabs = document.querySelectorAll('.swiper-tab');
    const prevButton = document.getElementById('prev-screen');
    const nextButton = document.getElementById('next-screen');
    const progressBar = document.getElementById('swiper-progress');
    let currentIndex = 0;

    function updateSlider() {
        // Update slides
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'flex';
            }
        });

        // Update tabs
        tabs.forEach((tab, index) => {
            if (index === currentIndex) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // Update progress bar
        const progress = ((currentIndex + 1) / slides.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Event listeners for next and prev buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Initialize the slider
    updateSlider();
});