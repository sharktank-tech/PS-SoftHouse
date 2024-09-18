const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function showProject(index) {
    const totalProjects = document.querySelectorAll('.project').length;
    if (index < 0) {
        currentIndex = totalProjects - 1;
    } else if (index >= totalProjects) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showProject(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showProject(currentIndex + 1);
});

// Mostrar o primeiro projeto inicialmente
showProject(0);
