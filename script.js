// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.getElementById('myButton');
//     button.addEventListener('click', function() {
//         alert('Button was clicked!');
//     });
// });

function openModal(modalId) {
    document.getElementById(modalId + '-modal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId + '-modal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    dropdown.addEventListener('mouseenter', function() {
        dropdownMenu.classList.remove('hidden');
    });
    
    dropdown.addEventListener('mouseleave', function() {
        dropdownMenu.classList.add('hidden');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    document.querySelector('.carousel-next').addEventListener('click', () => {
        nextSlide();
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        prevSlide();
    });

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove('carousel-visible');
            slide.classList.add('carousel-hidden');
        }
        slides[currentSlide].classList.add('carousel-visible');
    }

    function nextSlide() {
        if (currentSlide === totalSlides - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlidePosition();
    }

    function prevSlide() {
        if (currentSlide === 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide--;
        }
        updateSlidePosition();
    }

    // Initialize the first slide as visible
    updateSlidePosition();
});