const SLIDES = [...document.getElementsByClassName("slide box")];
const SLIDE_COUNT = SLIDES.length;
let slideCounter = 0;

const SLIDE_COUNT_P = document.getElementById("slide-count");

turnOffInactiveSlides();
updateCount();

function turnOffInactiveSlides() {
    for(let i = 0; i < SLIDES.length; i++) {
        if(i !== slideCounter) {
            SLIDES[i].style.display = "none";
        }
        else {
            SLIDES[i].style.display = "flex";
        }
    }
}

function changeSlide(amount) {
    slideCounter += amount;

    if(slideCounter > SLIDES.length - 1) { 
        slideCounter = 0;
    }
    else if(slideCounter < 0) {
        slideCounter = SLIDES.length - 1;
    }

    turnOffInactiveSlides();
    updateCount();
}

function updateCount() {
    SLIDE_COUNT_P.innerHTML = (slideCounter + 1).toString() + " / " + SLIDE_COUNT.toString();
}

document.changeSlide = changeSlide;