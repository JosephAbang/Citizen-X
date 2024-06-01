// Main Slider
let mainSlideIndex = 0;
showMainSlides();

function showMainSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    mainSlideIndex++;
    if (mainSlideIndex > slides.length) { mainSlideIndex = 1 }
    slides[mainSlideIndex - 1].style.display = "block";
    setTimeout(showMainSlides, 3000); // Change slide every 3 seconds
}

// Project Slider
let projectSlideIndex = 0;
const projectSlides = document.querySelectorAll('#project-slider .project');
const totalProjectSlides = projectSlides.length;

document.querySelector('#project-slider .next').addEventListener('click', () => {
    moveToNextProjectSlide();
});

document.querySelector('#project-slider .prev').addEventListener('click', () => {
    moveToPrevProjectSlide();
});

function moveToNextProjectSlide() {
    projectSlideIndex = (projectSlideIndex + 1) % totalProjectSlides;
    updateProjectSlidePosition();
}

function moveToPrevProjectSlide() {
    projectSlideIndex = (projectSlideIndex - 1 + totalProjectSlides) % totalProjectSlides;
    updateProjectSlidePosition();
}

function updateProjectSlidePosition() {
    const slider = document.querySelector('#project-slider .project-slides');
    slider.style.transform = `translateX(-${projectSlideIndex * 100}%)`;
}

setInterval(() => {
    moveToNextProjectSlide();
}, 5000); // Auto-slide every 5 seconds
