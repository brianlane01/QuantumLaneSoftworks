document.addEventListener('DOMContentLoaded', function() {
    // Button click example (commented out in the original)
    // const button = document.getElementById('myButton');
    // button.addEventListener('click', function() {
    //     alert('Button was clicked!');
    // });

    // Modal functionality
    function openModal(modalId) {
        document.getElementById(modalId + '-modal').classList.remove('hidden');
    }

    function closeModal(modalId) {
        document.getElementById(modalId + '-modal').classList.add('hidden');
    }

    // Dropdown functionality
    var dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        var dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
        dropdown.addEventListener('mouseenter', function() {
            dropdownMenu.classList.remove('hidden');
        });
    
        dropdown.addEventListener('mouseleave', function() {
            dropdownMenu.classList.add('hidden');
        });
    }

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function updateSlidePosition() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('carousel-visible', index === currentSlide);
            slide.classList.toggle('carousel-hidden', index !== currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    document.querySelector('.carousel-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

    // Initialize the first slide as visible
    updateSlidePosition();

    // Optional auto-slide functionality
    setInterval(nextSlide, 12000);
});
